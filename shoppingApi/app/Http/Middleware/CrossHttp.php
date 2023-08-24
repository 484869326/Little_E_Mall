<?php

namespace App\Http\Middleware;

use Closure;

class CrossHttp {
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next) {
		//解决跨域
		header("Content-type: text/html; charset=utf-8");
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
		$response = $next($request);
		return $response;
	}
}
