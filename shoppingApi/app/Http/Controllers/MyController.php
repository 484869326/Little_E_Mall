<?php

namespace App\Http\Controllers;

use App\Model\My;
use App\Total;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Cache;

class MyController extends Controller
{
    public function generateNumericCode(Request $request)
    {
        $phone= $request->input('phone');
        $code = '';
        for ($i = 0; $i < 6; $i++) {
            $code .= rand(0, 9);
        }
        session(['code'=>$code,'phone'=>$phone,'expireTime'=>time() + 60,'codeStatus'=>'init']);
        // 存储数据并设置过期时间为30秒
        // Cache::put('key', $value, now()->addSeconds(30));
        // 存储数据并设置过期时间(这不是唯一的)
        // Cache::put('code', $code, now()->addMinutes(1));
        // Cache::put('phone', $phone, now()->addMinutes(1));
        echo $code;
    }
    public function verifyCode(Request $request)
    {
        $code=$request->input('code');
        $phone=$request->input('phone');
        $scode = session('code');
        $sphone = session('phone');
        if ($code!==$scode || $phone!==$sphone||time() >= session('expireTime')) {
            $request->session()->forget('code');
            $request->session()->save();
            Total::json('fail');
            return;
        }
        $data=My::where('phone', '=', $phone)->first();
        if (is_null($data)) {
            // 得去注册
            $request->session()->put('codeStatus', 'pass');
            $request->session()->save();
            Total::json('register');
        } else {
            // 正常登录
            Total::json('success');
        }
    }
    public function register(Request $request)
    {
        $phone= session('phone');
        $status= session('codeStatus');
        if ($status!=='pass') {
            Total::json('未知错误');
            return;
        }
        $data=My::where('phone', '=', $phone)->first();
        if (is_null($data)) {
            $password=$request->input('password');
            $result= My::insert([
                'password'      => $password,
                'phone'     => $phone,
            ]);
            Total::json(strval($result));
        } else {
            Total::json('已注册');
        }
    }
    public function Login(Request $request)
    {
        $phone = $request->input('phone');
        $password=$request->input('password');
        $data = My::where('phone', '=', $phone)->where('password', '=', $password)->first();
        if ($data) {
            Total::json('success');
        } else {
            Total::json('fail');
        }
    }
    public function getUserInfo(Request $request)
    {
        $phone = $request->input('phone');
        $data = My::where('phone', '=', $phone)->first();
        if (!is_null($data["avatarUrl"])) {
            $data["avatarUrl"] = env('APP_URL') . substr_replace($data["avatarUrl"], "", 0, 1);
        }
        $result['data']=$data;
        Total::json($result);
    }

    //验证规则
    public function validateData(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nickName'  => ['required', 'regex:/^[\x{4e00}-\x{9fa5}A-Za-z0-9]{4,10}$/u'],
            'gender'    => ['nullable', Rule::in(['男', '女'])],
            'avatarUrl' => ['nullable', function ($attribute, $value, $fail) {
                if ($value) {
                    if (!preg_match('/\/+/', $value)) {
                        $fail('路径不符合要求');
                    }
                }
            }],
            'city'      => 'nullable',
            'phone'     => ['required', 'regex:/^1[0-9]{10}$/'],
            'Status'    => [
                'nullable',
                'numeric',
                Rule::in(['0', '1']),
            ],
        ]);
        return $validator;
    }
    //更新
    public function Update($id, Request $request)
    {
        $validator = $this->validateData($request);
        if ($validator->fails()) {
            Total::json('校验失败', -1);
        }
        $nickName  = $request->input('nickName');
        $gender    = $request->input('gender');
        $avatarUrl = $request->input('avatarUrl');
        $city      = $request->input('city');
        $defaultID = $request->input('defaultID');
        $phone     = $request->input('phone');
        $Status    = $request->input('Status');
        $data = My::find($id);
        //暂时偷懒 为了只传文件后台系统后面在看要不要传
        if ($request->filled('isField')) {
            $data->update(['avatarUrl' => $avatarUrl]);
        } else {
            $data->update(
                [
                    'nickName'  => $nickName,
                    'gender'    => $gender,
                    'city'      => $city,
                    'defaultID' => $defaultID,
                    'phone'     => $phone,
                    'Status'    => $Status,
                ]
            );
        }
        if ($data) {
            Total::json('更新成功');
        } else {
            Total::json('更新失败', -1);
        }
    }
    public function Insert(Request $request)
    {
        $validator = $this->validateData($request);
        if ($validator->fails()) {
            Total::json('校验失败', -1);
        }
        $signature = $request->input('signature');
        $nickName  = $request->input('nickName');
        $gender    = $request->input('gender');
        $avatarUrl = $request->input('avatarUrl');
        $city      = $request->input('city');
        $phone     = $request->input('phone');
        $Status    = $request->input('Status');
        $data      = My::insert(
            [
                'signature' => $signature,
                'nickName'  => $nickName,
                'gender'    => $gender,
                'avatarUrl' => $avatarUrl,
                'city'      => $city,
                'phone'     => $phone,
                'Status'    => $Status,
            ]
        );
        if ($data) {
            Total::json('增加成功');
        } else {
            Total::json('增加失败', -1);
        }
    }
    public function likeSelect(Request $request)
    {
        $page        = $request->input('page');
        $limit       = $request->input('limit');
        $offset      = ($page - 1) * $limit;
        $nickName    = $request->input('nickName') ?: "";
        $gender      = $request->input('gender') ?: "";
        $city        = $request->input('city') ?: "";
        $phone       = $request->input('phone') ?: "";
        $betweenTime = $request->input('betweenTime') ?: "";

        $data["data"] = My::where(function ($query) use ($nickName, $gender, $city, $phone, $betweenTime) {
            if (!empty($nickName)) {
                $query->where('nickName', 'like', '%' . $nickName . '%');
            }
            if (!empty($gender)) {
                $query->where('gender', 'like', '%' . $gender . '%');
            }
            if (!empty($city)) {
                $query->where('city', 'like', '%' . $city . '%');
            }
            if (!empty($phone)) {
                $query->where('phone', 'like', '%' . $phone . '%');
            }
            if (!empty($betweenTime)) {
                $query->whereBetween('created_at', $betweenTime);
            }
        })->tap(function ($query) use (&$data) {
            $data["count"] = $query->count();
        })
            ->offset($offset)
            ->limit($limit)
            ->get();

        foreach ($data["data"] as $key => $model) {
            $img = strpos($model["avatarUrl"], "./image");
            if ($img !== false) {
                $model["avatarUrl"] = env('APP_URL') . substr_replace($model["avatarUrl"], "", 0, 1);
            }
        }

        Total::json($data);
    }

    //删除
    public function Delete($id)
    {
        $data = My::where('id', $id)->delete();
        if ($data) {
            Total::json('删除成功');
        } else {
            Total::json('删除失败', -1);
        }
    }
}
