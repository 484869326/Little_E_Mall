<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */
Route::get('/', function () {
    return view('welcome');
});
//微信小程序api路由
Route::middleware('CrossHttp')->group(function () {
    Route::any('category', "CategoryController@getCategory");
    Route::any('categoryList', "CategoryController@categoryList");
    Route::any('getGood', "GoodController@getGood");
    Route::get('goodDetail/{id}', "GoodController@goodDetail");
    Route::get('search/{value}', "GoodController@search");
    Route::any('getGoodList', "GoodController@getGoodList");
    Route::any('getShop', "ShoppingController@getShop");
    Route::get('changeNum/{id}/{Num}', "ShoppingController@changeNum");
    Route::get('DeleteShop/{id}', "ShoppingController@DeleteShop");
    Route::get('changeType/{shoppingid}/{type}/{color}', "ShoppingController@changeType");
    Route::get('changeChecked/{shoppingid}/{isChecked}', "ShoppingController@changeChecked");
    Route::get('CheckedAll/{Userid}/{isChecked}', "ShoppingController@CheckedAll");
    Route::any('AddShop', "ShoppingController@AddShop");
    Route::any('deleteChecked', "ShoppingController@deleteChecked");
    Route::any('Buy', "OrderController@Buy");
    Route::any('Login', "MyController@Login");
    Route::any('LoginId', "MyController@LoginId");
    Route::any('received', "OrderController@received");
});
//后台api路由
Route::prefix('api')->middleware('CrossHttp')->group(function () {
    //上传文件
    Route::post('sendFile', "FileController@sendFile");
    //管理员
    Route::prefix('admin')->group(function () {
        Route::post('login', "AdminController@login");
        Route::post('getSelf', "AdminController@getSelf");
        Route::post('likeSelect', "AdminController@likeSelect");
        Route::post('Insert', "AdminController@Insert");
        Route::patch('{id}', "AdminController@Update");
        Route::delete('{id}', "AdminController@Delete");
    });
    //菜单
    Route::prefix('menu')->group(function () {
        Route::post('likeSelect', "MenuController@likeSelect");
        Route::post('Insert', "MenuController@Insert");
        Route::patch('{id}', "MenuController@Update");
        Route::delete('{id}', "MenuController@Delete");
    });
    //商品
    Route::prefix('good')->group(function () {
        Route::post('selectCategory/{level}', "CategoryController@selectCategory");
        Route::post('likeSelect', "GoodController@likeSelect");
        Route::post('Insert', "GoodController@Insert");
        Route::patch('{id}', "GoodController@Update");
        Route::delete('{id}', "GoodController@Delete");
    });
    //订单
    Route::prefix('order')->group(function () {
        Route::post('likeSelect', "OrderController@likeSelect");
        Route::patch('{id}', "OrderController@Update");
    });
    //用户
    Route::prefix('user')->group(function () {
        Route::post('likeSelect', "MyController@likeSelect");
        Route::post('Insert', "MyController@Insert");
        Route::patch('{id}', "MyController@Update");
        Route::delete('{id}', "MyController@Delete");
    });
    //分类
    Route::prefix('category')->group(function () {
        Route::post('likeSelect', "CategoryController@likeSelect");
        Route::post('Insert', "CategoryController@Insert");
        Route::patch('{id}', "CategoryController@Update");
        Route::delete('{id}', "CategoryController@Delete");
    });

    // 数据展示
    Route::prefix('statistics')->group(function () {
        Route::get('categoryGoodsCount', "GoodController@categoryGoodsCount");
        Route::get('adminSexCount', "AdminController@adminSexCount");
        Route::get('orderCount', "OrderController@orderCount");
        Route::get('monthPriceCount', "OrderController@monthPriceCount");
    });

});
