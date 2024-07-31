<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redis;
use Tymon\JWTAuth\Facades\JWTAuth;

class BaseController extends Controller
{

    //返回格式
    protected function response($data, $msg='获取成功', $code=200,$headers=[])
    {
        $result=[
            'code'=>$code,
            'msg'=>$msg,
            'data'=>$data
        ];
        if(empty($headers)){
            return response($result,$code);
        }
        return response($result,$code)->withHeaders($headers);
    }
    //图片加上前缀
    protected  function  imgPrefix($img){
        $prefix=env('APP_URL');
        return env('APP_URL') . substr_replace($img, "", 0, 1);
    }
    protected  function envImg($img) {
        $img = explode(",", $img);
        foreach ($img as $key => $model) {
            $img[$key] = $this->imgPrefix($model);
        }
        return $img;
    }
    protected function invalidateToken($tokenKey)
    {
        $token = Redis::get($tokenKey);
        if(!$token){
            return;
        }
        if (JWTAuth::setToken($token)->check()) {
            JWTAuth::setToken($token)->invalidate();
        }
    }
}
