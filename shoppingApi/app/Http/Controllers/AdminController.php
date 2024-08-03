<?php

namespace App\Http\Controllers;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Redis;

class AdminController extends BaseController
{
    //登录
    public  function  login(Request $request){
        $adminName = $request->input('username');
//        密码加密为 brcpt
        $adminPwd =$request->input('password');
        //短token
        $accessToken = auth('admin')->attempt([
            'adminName' => $adminName,
            'password'=>$adminPwd
        ]);
        if(!$accessToken){
            return $this->response(null,'登录失败',400);
        }
        $admin=auth('admin')->user();
        $refreshToken = auth('admin')->setTTL(20160)->login($admin);
        $refreshTokenKey=md5($admin['id'].$admin['adminPwd'].'refreshToken');
        $accessTokenKey=md5($admin['id'].$admin['adminPwd'].'accessToken');
        //先清除在赋值
        // 失效之前的 token
        $this->invalidateToken($refreshTokenKey);
        $this->invalidateToken($accessTokenKey);
        Redis::set($refreshTokenKey,$refreshToken);
        Redis::set($accessTokenKey,$accessToken);
        return $this->response($admin,'登录成功',200,[
            'Authorization'=>'Bearer '.$accessToken,
            'RefreshToken'=>$refreshToken
        ]);
    }
//    通过长token  弄短token 刷新
    public function  refresh(Request $request){
        try{
            $refreshToken = $request->header('Authorization');
            if(!auth('admin')->check($refreshToken)){
                return $this->response(null,'未授权，禁止访问',401);
            }
        $admin=auth('admin')->user();
        $refreshTokenKey=md5($admin['id'].$admin['adminPwd'].'refreshToken');
        $accessTokenKey=md5($admin['id'].$admin['adminPwd'].'accessToken');
        if($refreshToken!=='Bearer '.Redis::get($refreshTokenKey)){
            return $this->response(null,'未授权，禁止访问',401);
        }
           $newAccessToken=JWTAuth::setToken(Redis::get($accessTokenKey))->refresh();
           Redis::set($accessTokenKey,$newAccessToken);
           return $this->response(null,'token刷新',200,[
               'Authorization'=>'Bearer '.$newAccessToken,
           ]);
       }catch(QueryException $e){
           return $this->response(null,'未授权，禁止访问',401);
       }
    }

    //退出登录
    public function logout(){
        $logout=auth('admin')->logout();
        return $this->response($logout,'退出登录成功');
    }
    //图表展示：管理员性别
    public function adminGenderCount()
    {
        $counts = Admin::select('gender')
            ->selectRaw('COUNT(*) as count')
            ->groupBy('gender')
            ->get();
        return $this->response($counts,'获取成功');
    }
    //验证规则
    public function validateData(Request $request, $isInsert = true)
    {
        $rules = [
            'adminName' => ['required', 'regex:/^[a-zA-Z0-9]{5,10}$/'],
            'gender' => ['required', Rule::in([0, 1])],
            'email' => ['required', 'regex:/^\S+@\S+\.\S+$/i'],
            'address' => 'required',
            'tel' => ['required', 'regex:/^1[0-9]{10}$/'],
            'status' => ['required', 'numeric', Rule::in(['0', '1'])],
        ];
        if ($isInsert) {
            $rules['adminPwd'] = ['required', 'regex:/^[a-zA-Z0-9]{5,10}$/'];
        }
        $validator = Validator::make($request->all(), $rules);
        return $validator;
    }
    //更新
    public function Update($id, Request $request)
    {
        $validator = $this->validateData($request, false);
        if ($validator->fails()) {
            return $this->response(null,'请检查所填参数',400);
        }
        $adminName = $request->input('adminName');
        $gender = $request->input('gender');
        $email = $request->input('email');
        $address = $request->input('address');
        $tel = $request->input('tel');
        $status = $request->input('status');
        $roleId = $request->input('roleId');
        $data = Admin::where('id', '=', $id)->update(
            [
                'adminName' => $adminName,
                'gender' => $gender,
                'email' => $email,
                'address' => $address,
                'tel' => $tel,
                'status' => $status,
                'roleId'=>$roleId
            ]
        );
        if ($data) {
            return $this->response(null,'更新成功');
        } else {
            return $this->response(null,'更新失败',400);
        }
    }
    //增加
    public function Insert(Request $request)
    {
        $validator = $this->validateData($request);
        if ($validator->fails()) {
            return $this->response(null,'请检查所填参数',400);
        }
        $adminName = $request->input('adminName');
        $gender = $request->input('gender');
        $email = $request->input('email');
        $address = $request->input('address');
        $adminPwd =bcrypt($request->input('adminPwd'));
        $tel = $request->input('tel');
        $status = $request->input('status');
        $roleId = $request->input('roleId');
        $data = Admin::insert(
            [
                'adminName' => $adminName,
                'gender' => $gender,
                'email' => $email,
                'address' => $address,
                'adminPwd' => $adminPwd,
                'tel' => $tel,
                'status' => $status,
                'roleId'=>$roleId
            ]
        );
        if ($data) {
            return $this->response(null,'增加成功');
        } else {
            return $this->response(null,'增加失败',400);
        }
    }
    //查找
    public function likeSelect(Request $request)
    {
        $limit = $request->input('limit');
        $adminName = $request->input('adminName') ?: "";
        $gender = $request->input('gender');
        $email = $request->input('email') ?: "";
        $address = $request->input('address') ?: "";
        $tel = $request->input('tel') ?: "";
        $roleId=$request->input('roleId');
        $betweenTime = $request->input('betweenTime') ?: "";
        $admin=auth('admin')->user();
        $query = Admin::with('role')->where('id','!=',$admin['id'])->where(function ($query) use ($adminName, $gender, $email, $address, $tel,$roleId, $betweenTime) {
            if (!empty($adminName)) {
                $query->where('adminName', 'like', '%' . $adminName . '%');
            }
            if (isset($gender)) {
                $query->where('gender', 'like', '%' . $gender . '%');
            }
            if (!empty($email)) {
                $query->where('email', 'like', '%' . $email . '%');
            }
            if (!empty($address)) {
                $query->where('address', 'like', '%' . $address . '%');
            }
            if (!empty($tel)) {
                $query->where('tel', 'like', '%' . $tel . '%');
            }
            if (!empty($roleId)) {
                $query->where('roleId', 'like', '%' . $roleId . '%');
            }
            if (!empty($betweenTime)) {
                $query->whereBetween('createdAt', $betweenTime);
            }
        })->paginate($limit);
        $list = $query->items();
        $count=$query->total();;
        $data=['count'=>$count,'list'=>$list];
        return $this->response($data);
    }
    //删除
    public function Delete($id)
    {
        $data = Admin::where('id', $id)->delete();
        if ($data) {
            return $this->response(null,'删除成功');
        } else {
            return $this->response(null,'删除失败',400);
        }
    }
}
