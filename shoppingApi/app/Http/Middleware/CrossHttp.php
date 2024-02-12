<?php

namespace App\Http\Middleware;

use Closure;

class CrossHttp
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        //解决跨域
        header("Content-type: text/html; charset=utf-8");
        // 得指明那个网址
        header('Access-Control-Allow-Origin: http://localhost:1234');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Methods: GET, POST, PUT,DELETE,OPTIONS,PATCH');
        // header("Access-Control-Allow-Methods: *");
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
        $response = $next($request);
        return $response;
        //第二种情况
        //         $domains = [
        //             'http://127.0.0.1:5500',
        //         ];
        //         $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
        //         if (in_array($origin, $domains)) {
        //             header('Access-Control-Allow-Origin:' . $origin);
        //         }
        // // 允许的请求头信息
        //         header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
        // //在请求头里加上需要允许的 header("Access-Control-Allow-Headers: Origin, 名称);
        //         // 允许的请求类型
        //         header('Access-Control-Allow-Methods: GET, POST, PUT,DELETE,OPTIONS,PATCH');
        // // 允许携带证书式访问（携带cookie）
        //         header('Access-Control-Allow-Credentials:true');
        //         $response = $next($request);
        //         return $response;
    }
}
