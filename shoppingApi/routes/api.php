<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\AdminController;
use \App\Http\Controllers\RoleMenuController;
use \App\Http\Controllers\MenuController;
use \App\Http\Controllers\CategoryController;
use \App\Http\Controllers\OrderController;
use \App\Http\Controllers\MyController;
use \App\Http\Controllers\GoodController;
use \App\Http\Controllers\HomeController;
use \App\Http\Controllers\FileController;
use \App\Http\Controllers\ShoppingController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//上传文件接口 前后台通用
Route::post('sendFile', [FileController::class,'sendFile']);
//前台app的
Route::prefix('front')->group(function(){
    Route::post('login', [AdminController::class, 'login']);
    Route::post('received', [OrderController::class, 'received']);
    Route::post('getOrderList', [OrderController::class, 'getOrderList']);
    Route::post('changeType', [ShoppingController::class, 'changeType']);
    Route::post('buy', [OrderController::class, 'Buy']);
    Route::post('getBuyGoodList', [ShoppingController::class, 'getBuyGoodList']);
    Route::get('home/multidata', [HomeController::class, 'multidata']);
    Route::get('home/getGoodList/{page}', [GoodController::class, 'getGoodList']);
    Route::get('goodDetail', [GoodController::class, 'goodDetail']);
    Route::post('addShop', [ShoppingController::class, 'AddShop']);
    Route::get('categoryList', [CategoryController::class, 'categoryList']);
    Route::post('sendFile', [FileController::class, 'sendFile']);
    Route::get('mySwiper', [HomeController::class, 'mySwiper']);
    Route::get('code', [MyController::class, 'generateNumericCode']);
    Route::post('verifyCode', [MyController::class, 'verifyCode']);
    Route::post('register', [MyController::class, 'register']);
    Route::post('login', [MyController::class, 'Login']);
    Route::post('getUserInfo', [MyController::class, 'getUserInfo']);
    Route::post('getAllCheck', [ShoppingController::class, 'getAllCheck']);
    Route::post('getShop/{page}', [ShoppingController::class, 'getShop']);
    Route::post('changeNum', [ShoppingController::class, 'changeNum']);
    Route::delete('{id}', [ShoppingController::class, 'DeleteShop']);
    Route::post('changeChecked', [ShoppingController::class, 'changeChecked']);
    Route::post('checkedAll', [ShoppingController::class, 'CheckedAll']);
    Route::get('search', [GoodController::class, 'Search']);


    Route::prefix('user')->group(function () {
        Route::patch('{id}', [MyController::class, 'Update']);
    });
});
//后台系统
Route::prefix('back')->group(function (){
    //管理员
    Route::prefix('admin')->group(function (){
        Route::post('login', [AdminController::class, 'login']);
        Route::post('logout', [AdminController::class, 'logout']);
        Route::post('getRoleMenu', [RoleMenuController::class, 'getRoleMenu']);
        Route::post('likeSelect', [AdminController::class, 'likeSelect']);
        Route::post('Insert', [AdminController::class, 'Insert']);
        Route::patch('{id}', [AdminController::class, 'Update']);
        Route::delete('{id}', [AdminController::class, 'Delete']);
        Route::post('refresh',[AdminController::class,'refresh']);
    });
//菜单
    Route::prefix('menu')->group(function () {
        Route::post('likeSelect', [MenuController::class, 'likeSelect']);
        Route::post('Insert', [MenuController::class, 'Insert']);
        Route::patch('{id}', [MenuController::class, 'Update']);
        Route::delete('{id}', [MenuController::class, 'Delete']);
    });

//商品
    Route::prefix('good')->group(function () {
        Route::post('selectCategory/{level}', [CategoryController::class, 'selectCategory']);
        Route::post('likeSelect', [\App\Http\Controllers\GoodController::class, 'likeSelect']);
        Route::post('Insert', [GoodController::class, 'Insert']);
        Route::patch('{id}', [GoodController::class, 'Update']);
        Route::delete('{id}', [GoodController::class, 'Delete']);
    });

//订单
    Route::prefix('order')->group(function () {
        Route::post('likeSelect', [OrderController::class, 'likeSelect']);
        Route::patch('{id}', [OrderController::class, 'Update']);
        Route::post('getOrderList', [OrderController::class, 'getOrderList']);
    });

//用户
    Route::prefix('user')->group(function () {
        Route::post('likeSelect', [MyController::class, 'likeSelect']);
        Route::post('Insert', [MyController::class, 'Insert']);
        Route::patch('{id}', [MyController::class, 'Update']);
        Route::delete('{id}', [MyController::class, 'Delete']);
    });

//分类
    Route::prefix('category')->group(function () {
        Route::post('likeSelect', [CategoryController::class, 'likeSelect']);
        Route::post('Insert', [CategoryController::class, 'Insert']);
        Route::patch('{id}', [CategoryController::class, 'Update']);
        Route::delete('{id}', [CategoryController::class, 'Delete']);
    });

// 数据展示
    Route::prefix('statistics')->group(function () {
        Route::get('categoryGoodsCount', [GoodController::class, 'categoryGoodsCount']);
        Route::get('adminGenderCount', [AdminController::class, 'adminGenderCount']);
        Route::get('orderCount', [OrderController::class, 'orderCount']);
        Route::get('monthPriceCount', [OrderController::class, 'monthPriceCount']);
    });

//角色
    Route::prefix('role')->group(function () {
        Route::post('selectRole', [RoleMenuController::class, 'selectRole']);
        Route::post('likeSelect', [RoleMenuController::class, 'likeSelect']);
        Route::post('Insert', [RoleMenuController::class, 'Insert']);
        Route::patch('{id}', [RoleMenuController::class, 'Update']);
        Route::delete('{id}', [RoleMenuController::class, 'Delete']);
    });
});


