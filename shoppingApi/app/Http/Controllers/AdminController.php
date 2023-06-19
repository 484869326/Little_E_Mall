<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Admin;

class AdminController extends Controller
{
    //
    public function login(Request $request){
        $adminName=$request->input('username');
        $adminPwd=$request->input('password');
        $data=Admin::where('adminName',$adminName)->where('adminPwd',$adminPwd)->first();
       echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }
    public function getSelf(Request $request){
        $id=$request->input('dataId');
        $data=Admin::where('id',$id)->first();
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }
    public function Update(Request $request){
        $id=$request->input('dataId');
        $adminName=$request->input('username');
        $Sex=$request->input('sex');
        $Email=$request->input('email');
        $Address=$request->input('address');
        $adminPwd=$request->input('repass');
        $Tel=$request->input('phone');
        $data=Admin::where('id','=',$id)->update(
        [
            'adminName'=>$adminName,
            'Sex'=>$Sex,
            'Email'=>$Email,
            'Address'=>$Address,
            'adminPwd'=>$adminPwd,
            'Tel'=>$Tel,
        ]
        );
    }
    public function Insert(Request $request){
        $adminName=$request->input('username');
        $Sex=$request->input('sex');
        $Email=$request->input('email');
        $Address=$request->input('address');
        $adminPwd=$request->input('repass');
        $Tel=$request->input('phone');
        $data=Admin::insert(
        [
            'adminName'=>$adminName,
            'Sex'=>$Sex,
            'Email'=>$Email,
            'Address'=>$Address,
            'adminPwd'=>$adminPwd,
            'Tel'=>$Tel,
        ]
        );
    }
    public function likeSelect(Request $request){
        $page = $request->input('page');
        $limit = $request->input('limit');
        $offset=($page-1)*$limit;
        $id=$request->input('dataId')?$request->input('dataId'):"";
        $adminName=$request->input('username')?$request->input('username'):"";
        $Sex=$request->input('sex')?$request->input('sex'):"";
        $Email=$request->input('email')?$request->input('email'):"";
        $Address=$request->input('address')?$request->input('address'):"";
        $Tel=$request->input('phone')?$request->input('phone'):"";
        $data["data"]=Admin::where('id','like','%'.$id.'%')->where('adminName','like','%'.$adminName.'%')->where('Sex','like','%'.$Sex.'%')->where('Email','like','%'.$Email.'%')->where('Address','like','%'.$Address.'%')->where('Tel','like','%'.$Tel.'%')->offset($offset)->limit($limit)->get();
        $data["code"]=0;
        $data["count"]=Admin::count();
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }
    public function Delete(Request $request){
        $id=$request->input('id');
        $data=Admin::where('id',$id)->delete();
    }
}
