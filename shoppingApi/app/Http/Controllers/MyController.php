<?php

namespace App\Http\Controllers;

use App\Models\My;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class MyController extends BaseController
{
    public function generateNumericCode(Request $request)
    {
        $phone= $request->input('phone');
        $code = '';
        for ($i = 0; $i < 6; $i++) {
            $code .= rand(0, 9);
        }
        session(['code'=>$code,'phone'=>$phone,'expireTime'=>time() + 60,'codeStatus'=>'init']);
       return $this->response(null,$code);
    }
    public function verifyCode(Request $request)
    {
        $code=$request->input('code');
        $phone=$request->input('phone');
        $scode = session('code');
        $sphone = session('phone');
        if ($code!=$scode || $phone!==$sphone||time() >= session('expireTime')) {
            $request->session()->forget('code');
            $request->session()->save();
            return $this->response(null,'校验失败',400);
        }
        $data=My::where('phone', '=', $phone)->first();
        if (is_null($data)) {
            // 得去注册
            $request->session()->put('codeStatus', 'pass');
            $request->session()->save();
            return $this->response(null,'register');
        } else {
            // 正常登录
            return $this->response(null,'success');
        }
    }
    public function register(Request $request)
    {
        $phone= session('phone');
        $status= session('codeStatus');
        if ($status!=='pass') {
            return $this->response(null,'未知错误',400);
        }
        $data=My::where('phone', '=', $phone)->first();
        if (is_null($data)) {
            $password=hash('sha256',$request->input('password'));
            $result= My::insert([
                'password'      => $password,
                'phone'     => $phone,
            ]);
            return $this->response(strval($result));
        } else {
            return $this->response(null,'已注册');
        }
    }
    public function login(Request $request)
    {
        $phone = $request->input('phone');
        $password=hash('sha256',$request->input('password'));
        $data = My::where('phone', '=', $phone)->where('password', '=', $password)->first();
        if ($data) {
            return $this->response(null,'success');
        } else {
            return $this->response(null,'fail');
        }
    }
    public function getUserInfo(Request $request)
    {
        $phone = $request->input('phone');
        $data = My::where('phone', '=', $phone)->first();
        if (!is_null($data["avatarUrl"])) {
            $data["avatarUrl"] = env('APP_URL') . substr_replace($data["avatarUrl"], "", 0, 1);
        }
        return $this->response($data);
    }

    //验证规则
    public function validateData(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nickName'  => ['nullable', 'regex:/^[\x{4e00}-\x{9fa5}A-Za-z0-9]{4,10}$/u'],
            'gender'    => ['nullable', Rule::in([0, 1])],
            'avatarUrl' => ['nullable', function ($attribute, $value, $fail) {
                if ($value) {
                    if (!preg_match('/\/+/', $value)) {
                        $fail('路径不符合要求');
                    }
                }
            }],
            'city'      => 'nullable',
            'phone'     => ['required', 'regex:/^1[0-9]{10}$/'],
            'status'    => [
                'nullable',
                'numeric',
                Rule::in([0, 1]),
            ],
        ]);
        return $validator;
    }
    //更新
    public function Update($id, Request $request)
    {

        $nickName  = $request->input('nickName');
        $gender    = $request->input('gender');
        $avatarUrl = $request->input('avatarUrl');
        $city      = $request->input('city');
        $phone     = $request->input('phone');
        $status    = $request->input('status');
        $validator = $this->validateData($request);
        if ($validator->fails()) {
            return $this->response(null, '校验失败', 400);
        }
        $updateData = [];
        if ($request->filled('isField')) {
            $updateData['avatarUrl'] = $avatarUrl;
        } else {
            $updateData = [
                'nickName' => $nickName,
                'gender' => $gender,
                'city' => $city,
                'phone' => $phone,
                'status' => $status,
            ];
            if ($request->filled('defaultId')) {
                $updateData['defaultId'] = $request->input('defaultId');
            }
        }
        $data = My::where('id', $id)->first();
        if (!$data) {
            return $this->response(null, '更新失败', 400);
        }
        $data->update($updateData);
        return $this->response(null, '更新成功');
    }
    public function Insert(Request $request)
    {
        $validator = $this->validateData($request);
        if ($validator->fails()) {
            return $this->response(null,'校验失败',400);
        }
        $nickName  = $request->input('nickName');
        $gender    = $request->input('gender');
        $avatarUrl = $request->input('avatarUrl');
        $city      = $request->input('city');
        $phone     = $request->input('phone');
        $status    = $request->input('status');
        $data      = My::insert(
            [
                'nickName'  => $nickName,
                'gender'    => $gender,
                'avatarUrl' => $avatarUrl,
                'city'      => $city,
                'phone'     => $phone,
                'status'    => $status,
            ]
        );
        if ($data) {
            return $this->response(null,'增加成功');
        } else {
            return $this->response(null,'增加失败',400);
        }
    }
    public function likeSelect(Request $request)
    {
        $limit       = $request->input('limit');
        $nickName    = $request->input('nickName');
        $gender      = $request->input('gender');
        $city        = $request->input('city') ;
        $phone       = $request->input('phone');
        $betweenTime = $request->input('betweenTime');
        $query = My::where(function ($query) use ($nickName, $gender, $city, $phone, $betweenTime) {
            if (!empty($nickName)) {
                $query->where('nickName', 'like', '%' . $nickName . '%');
            }
            if (isset($gender)) {
              $query->where('gender', 'like', '%' . $gender . '%');
            }
            if (!empty($city)) {
                $query->where('city', 'like', '%' . $city . '%');
            }
            if (!empty($phone)) {
                $query->where('phone', 'like', '%' . $phone . '%');
            }
            if (!empty($betweenTime)) {
                $query->whereBetween('createdAt', $betweenTime);
            }
        })->paginate($limit);
        $list = $query->items();
        $count=$query->total();
        foreach ($list as $key => $model) {
            $img = strpos($model["avatarUrl"], "./image");
            if ($img !== false) {
                $model["avatarUrl"] = env('APP_URL') . substr_replace($model["avatarUrl"], "", 0, 1);
            }
        }
        $data=['count'=>$count,'list'=>$list];
        return $this->response($data);
    }

    //删除
    public function Delete($id)
    {
        $data = My::where('id', $id)->delete();
        if ($data) {
            return $this->response(null,'删除成功');
        } else {
            return $this->response(null,'删除失败',400);
        }
    }
}
