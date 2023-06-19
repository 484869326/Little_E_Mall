<?php

namespace App\Http\Controllers;
use App\Model\Category;
use App\Model\Good;
use App\Total;
use Illuminate\Http\Request;

class GoodController extends Controller
{
    //
    public function getGood(Request $request){
        $id=$request->input('id');
        $Cid=$request->input('Cid');
        $value=$request->input('value');
        if($request->input('value')!=null){
             $data=Good::where('Goodname','like','%'.$value.'%')->get();
        }
        else if($request->input('id')!=null){
            $data=Good::where('Cid','=',$id)->get();
        }
        else{
            $Cid=Category::where('parentID',$Cid)->get(["Cid"]);
            $data="";
            foreach($Cid as $key =>$model){
                $CidList=Category::where('parentID', $model["Cid"])->get(["Cid"]);
                foreach($CidList as $key1 => $model1){
                    if($data==""){
                        $data=Good::where('Cid',$model1["Cid"])->get();
                    }
                    else{
                        $data=$data->merge(Good::where('Cid',$model1["Cid"])->get());
                    }
                }
            }
        }
        Total::json(200,'获取成功',$data,'Goodimg');
    }
    public function goodDetail($id){
        $data=Good::where('Goodid','=',$id)->get();
          $data[0]["Swiper"]=explode(",",$data[0]["Swiper"]);
          $data[0]["Detail"]=explode(",",$data[0]["Detail"]);
          $data[0]["Swiper"]=Total::change($data[0]["Swiper"]);
          $data[0]["Detail"]=Total::change($data[0]["Detail"]);
        Total::json(200,'获取成功',$data,'Goodimg');
    }
    public function getGoodList(Request $request){
        $paginate=$request->input('paginate');
        $lastPage=$request->input('lastPage');
        // offset从哪里开始 limit 限制条数
        $data["good"]=Good::offset($lastPage)->limit($paginate)->get();
        // 获取总条数
        $data["count"]=Good::count();
        foreach($data["good"] as $key => $model){
              $model["Goodimg"]=env('APP_URL').substr_replace($model["Goodimg"],"",0,1);
          }
        Total::json(200,'获取成功',$data,'');
    }
    public function Insert(Request $request){
        $Goodname=$request->input('Goodname');
        $CName=$request->input('CName');
        $Cid=Category::where('Cname',$CName)->first()['Cid'];
        $Explain=$request->input('Explain');
        $advertise=$request->input('advertise');
        $price=$request->input('price');
        $color=$request->input('color');
        $Goodimg1=$request->file("Goodimg");
        $Goodimg=Total::saveImg($Goodimg1,'./image/Good');
        $Type=$request->input('Type');
        $SwiperImg=$request->file('Swiper');
        $Swiper=Total::saveImgs($SwiperImg,'./image/Good');
        $DetailImg=$request->file("Detail");
        $Detail=Total::saveImgs($DetailImg,'./image/Good');
        Good::insert([
            'Goodname'=>$Goodname,
            'Explain'=>$Explain,
            'Cid'=>$Cid,
            'advertise'=>$advertise,
            'Goodimg'=>$Goodimg,
            'price'=>$price,
            'type'=>$Type,
            'color'=>$color,
            'Swiper'=>$Swiper,
            'Detail'=>$Detail,
        ]);
    }
    public function likeSelect(Request $request){
        $data["count"]=Good::count();
        $data["code"]=0;
        if($data["count"]==0){
            $data["data"]=[];
        }
        else{
            // header('Access-Control-Allow-Origin: *');
                $page = $request->input('page');
                $limit = $request->input('limit');
                $offset=($page-1)*$limit;
                $Goodid=$request->input('dataId')?$request->input('dataId'):"";
                $Goodname=$request->input('Goodname')?$request->input('Goodname'):"";
                $CName=$request->input('CName')=="请选择类别"?"":$request->input('CName');
                if($CName==""){
                    $Cid="";
                }
                else{
                    $Cid=Category::where('Cname',$CName)->first()['Cid'];
                }
                $good=Good::where('Goodid','like','%'.$Goodid.'%')->where('Goodname','like','%'.$Goodname.'%')->where('Cid','like','%'.$Cid.'%')->offset($offset)->limit($limit)->get();
                foreach($good as $key => $model){
                     $model["Cname"]=Category::where('Cid',$model["Cid"])->first()['Cname'];
                      $model["Goodimg"]=env('APP_URL').substr_replace($model["Goodimg"],"",0,1);
                      $model["Swiper"]=explode(",",$model["Swiper"]);
                      // $model["Swiper"]=Total::envImg($model["Swiper"]);
                      $model["Detail"]=[1];
                      // $model["Detail"]=explode(",",$model["Detail"]);
                }
                $data["data"]=$good;
        }

        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }
    public function Delete(Request $request){
        $id=$request->input('id');
        $data=Good::where('Goodid',$id)->delete();
    }
    public function getSelf(Request $request){
        $id=$request->input('dataId');
        $data=Good::where('Goodid',$id)->first();
        $data["Cname"]=Category::where('Cid',$data["Cid"])->first()['Cname'];
        $data["Goodimg"]=env('APP_URL').substr_replace($data["Goodimg"],"",0,1);
        $data["CnameList"]=Category::where('Clevel','2')->get();
        $data["Swiper"]=Total::envImg($data["Swiper"]);
        $data["Detail"]=Total::envImg($data["Detail"]);
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }
    public function Update(Request $request){
        $id=$request->input('dataId');
       $Goodname=$request->input('Goodname');
       $CName=$request->input('CName');
       $Cid=Category::where('Cname',$CName)->first()['Cid'];
       $Explain=$request->input('Explain');
       $advertise=$request->input('advertise');
       $price=$request->input('price');
       $color=$request->input('color');
       $Type=$request->input('Type');
       $Goodimg1=$request->file("Goodimg")?$request->file('Goodimg'):"";
       $SwiperImg=$request->file('Swiper')?$request->file('Swiper'):"";
       $DetailImg=$request->file("Detail")?$request->file('Detail'):"";
       $same=Good::where('Goodid',$id)->first();
      if($Goodimg1==""){
          $Goodimg=$same["Goodimg"];
      }
      else{
          $Goodimg=Total::saveImg($Goodimg1,'./image/Good');
      }
      if($SwiperImg==""){
          $Swiper=$same["Swiper"];
      }
      else{
          $Swiper=Total::saveImgs($SwiperImg,'./image/Good');
      }
      if($DetailImg==""){
          $Detail=$same["Detail"];
      }
      else{
          $Detail=Total::saveImgs($DetailImg,'./image/Good');
      }
       Good::where('Goodid',$id)->update([
           'Goodname'=>$Goodname,
           'Explain'=>$Explain,
           'Cid'=>$Cid,
           'advertise'=>$advertise,
           'Goodimg'=>$Goodimg,
           'price'=>$price,
           'type'=>$Type,
           'color'=>$color,
           'Swiper'=>$Swiper,
           'Detail'=>$Detail,
       ]);
    }

}
