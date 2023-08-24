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
	Route::prefix('admin')->group(function () {
		Route::any('login', "AdminController@login");
		Route::any('getOrderNum', "OrderController@getOrderNum");
		Route::any('getSelf', "AdminController@getSelf");
        Route::any('likeSelect', "AdminController@likeSelect");
		Route::post('Insert', "AdminController@Insert");
        Route::patch('{id}', "AdminController@Update");
		Route::delete('{id}', "AdminController@Delete");
	});
    Route::prefix('menu')->group(function () {
        Route::any('likeSelect', "MenuController@likeSelect");
    });
	Route::prefix('good')->group(function () {
		Route::any('selectCategory', "CategoryController@selectCategory");
		Route::any('sendFILE', "GoodController@sendFILE");
        Route::any('likeSelect', "GoodController@likeSelect");
        Route::post('Insert', "GoodController@Insert");
		Route::patch('{id}', "GoodController@Update");
        Route::delete('{id}', "GoodController@Delete");
	});

	Route::prefix('order')->group(function () {
		Route::any('likeSelect', "OrderController@likeSelect");
		Route::patch('{id}', "OrderController@Update");
	});

	Route::prefix('user')->group(function () {
		Route::any('Update', "MyController@Update");
		Route::any('getSelf', "MyController@getSelf");
		Route::any('Insert', "MyController@Insert");
		Route::any('likeSelect', "MyController@likeSelect");
		Route::any('Delete', "MyController@Delete");
	});

	Route::prefix('category')->group(function () {
		Route::any('Update', "CategoryController@Update");
		Route::any('getSelf', "CategoryController@getSelf");
		Route::any('Insert', "CategoryController@Insert");
		Route::any('likeSelect', "CategoryController@likeSelect");
		Route::any('Delete', "CategoryController@Delete");
	});
});
