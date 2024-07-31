<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
//        排除不需要请求头的路由
        if ($request->is('api/back/admin/login', 'api/sendFile','api/back/admin/refresh','api/front/*')) {
            return $next($request);
        }
        if (!$request->header('Authorization')) {
            return response([
                'code'=>401,
                'msg'=>'未授权，禁止访问',
            ],401);
        }
        // 从 Authorization 头部中获取 token
        $accessToken = $request->header('Authorization');
        $admin=auth('admin')->user();
        $refreshTokenKey=md5($admin['id'].$admin['adminPwd'].'refreshToken');
        $accessTokenKey=md5($admin['id'].$admin['adminPwd'].'accessToken');
        //长token不让他进来
        if($accessToken==='Bearer '.Redis::get($refreshTokenKey)){
            return response([
                'code'=>401,
                'msg'=>'未授权，禁止访问',
            ],401);
        }
        // 进行 token 验证
        if (!auth('admin')->check($accessToken) || 'Bearer '.Redis::get($accessTokenKey)!==$accessToken) {
            return response([
                'code'=>401,
                'msg'=>'未授权，禁止访问',
            ],401);
        }
        return $next($request);
    }
}
