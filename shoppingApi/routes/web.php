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
Route::prefix('api')->middleware(['CrossHttp'])->group(function () {
    //微信小程序api路由
    Route::post('received', "OrderController@received");
    Route::post('getOrderList', "OrderController@getOrderList");
    Route::post('changeType', "ShoppingController@changeType");
    //购买
    Route::post('buy', "OrderController@Buy");
    //获取想要的商品数据
    Route::post('getBuyGoodList', "ShoppingController@getBuyGoodList");
    //首页获取数据
    Route::get('home/multidata', "HomeController@multidata");
    //首页获取全部Good表格
    Route::get('home/getGoodList/{page}', "GoodController@getGoodList");
    //详情页
    Route::get('goodDetail', "GoodController@goodDetail");
    Route::post('addShop', "ShoppingController@AddShop");
    //分类
    Route::get('categoryList', "CategoryController@categoryList");
    //上传文件
    Route::post('sendFile', "FileController@sendFile");
    //我的页面
    Route::get('mySwiper', "HomeController@mySwiper");
    Route::get('code', "MyController@generateNumericCode");
    Route::post('verifyCode', "MyController@verifyCode");
    Route::post('register', "MyController@register");
    Route::post('login', "MyController@Login");
    Route::post('getUserInfo', "MyController@getUserInfo");
    //购物车
    Route::post('getAllCheck', "ShoppingController@getAllCheck");
    Route::post('getShop/{page}', "ShoppingController@getShop");
    Route::post('changeNum', "ShoppingController@changeNum");
    Route::delete('{id}', "ShoppingController@DeleteShop");
    Route::post('changeChecked', "ShoppingController@changeChecked");
    Route::post('checkedAll', "ShoppingController@CheckedAll");
    //搜索
    Route::get('search', "GoodController@Search");
    //后台api路由
    //管理员
    Route::prefix('admin')->group(function () {
        Route::post('login', "AdminController@login");
        Route::post('getRoleMenu', "RoleMenuController@getRoleMenu");
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
        Route::get('adminGenderCount', "AdminController@adminGenderCount");
        Route::get('orderCount', "OrderController@orderCount");
        Route::get('monthPriceCount', "OrderController@monthPriceCount");
    });

    //角色
    Route::prefix('role')->group(function () {
        Route::post('selectRole', "RoleMenuController@selectRole");
        Route::post('likeSelect', "RoleMenuController@likeSelect");
        Route::post('Insert', "RoleMenuController@Insert");
        Route::patch('{id}', "RoleMenuController@Update");
        Route::delete('{id}', "RoleMenuController@Delete");
    });
});
