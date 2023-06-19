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


Route::any('admin/login', "AdminController@login");
Route::any('admin/getOrderNum', "OrderController@getOrderNum");
Route::any('admin/Update', "AdminController@Update");
Route::any('admin/getSelf', "AdminController@getSelf");
Route::any('admin/Insert', "AdminController@Insert");
Route::any('admin/likeSelect', "AdminController@likeSelect");
Route::any('admin/Delete', "AdminController@Delete");

   Route::any('admin/good/Insert', "GoodController@Insert");
   Route::any('admin/good/likeSelect', "GoodController@likeSelect");
   Route::any('admin/good/Delete', "GoodController@Delete");
   Route::any('admin/good/selectCategory', "CategoryController@selectCategory");
   Route::any('admin/good/getSelf', "GoodController@getSelf");
   Route::any('admin/good/Update', "GoodController@Update");
Route::any('admin/order/likeSelect', "OrderController@likeSelect");
Route::any('admin/order/Update', "OrderController@Update");

Route::any('admin/my/Update', "MyController@Update");
Route::any('admin/my/getSelf', "MyController@getSelf");
Route::any('admin/my/Insert', "MyController@Insert");
Route::any('admin/my/likeSelect', "MyController@likeSelect");
Route::any('admin/my/Delete', "MyController@Delete");

Route::any('admin/category/Update', "CategoryController@Update");
Route::any('admin/category/getSelf', "CategoryController@getSelf");
Route::any('admin/category/Insert', "CategoryController@Insert");
Route::any('admin/category/likeSelect', "CategoryController@likeSelect");
Route::any('admin/category/Delete', "CategoryController@Delete");
