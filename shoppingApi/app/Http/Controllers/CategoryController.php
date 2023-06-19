<?php

namespace App\Http\Controllers;
use App\Model\Category;
use Illuminate\Http\Request;
use App\Total;

class CategoryController extends Controller
{
   public function getCategory(){
       $data=Category::where('Clevel','=','0')->orderByRaw('RAND()')->take(10)->get();
      Total::json(200,'获取成功',$data,'parentimg');
   }
   public function categoryList(){
    $category=Category::where('Clevel','=','0')->get();
    $children=Category::where('Clevel','=','1')->get();
     foreach($children as $key=>$data){
        $parentID=$data["Cid"];
          $data["children"]=Category::where('parentID','=',$parentID)->get();
 foreach($data["children"] as $Index=>$datas){
     $datas["Cimg"]=env('APP_URL').substr_replace($datas["Cimg"],"",0,1);

 }
    }

    foreach($category as $key=>$data){
         $parentID=$data["Cid"];
         $newArr=[];
        foreach($children as $index=> $data1){
            if($parentID==$data1["parentID"]){
                array_push($newArr,$data1);
            }
            $data["children"]=$newArr;
        }

    }
    Total::json(200,'获取成功',$category,'parentimg');
    }
    public function Denglu(Request $request){
      header('Access-Control-Allow-Origin:*');
         echo json_encode("123");
        // echo $request->username;
    }
    public function selectCategory(){
        $category=Category::where('Clevel','2')->get(['Cname']);
         Total::json(200,'获取成功',$category,'');
    }

    public function getSelf(Request $request){
        $id=$request->input('dataId');
        $data=Category::where('Cid',$id)->first();
        if($data["parentimg"]!=""){
            $data["parentimg"]=env('APP_URL').substr_replace($data["parentimg"],"",0,1);
        }
        if($data["Cimg"]!=""){
            $data["Cimg"]=env('APP_URL').substr_replace($data["Cimg"],"",0,1);
        }
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }
    public function Update(Request $request){
        $id=$request->input('dataId');
        $Cname=$request->input('Cname');
        $parentID=$request->input('parentID');
        $Clevel=$request->input('Clevel');
        $parentimg=$request->file('parentimg')?$request->file('parentimg'):"";
        $Cimg=$request->file('Cimg')?$request->file('Cimg'):"";
        if($Clevel=="一级分类"){
            $Clevel=0;
            if($parentimg==""){
                $parentimg=Category::where('Cid',$id)->first()["parentimg"];
            }
            else{
                $parentimg=Total::saveImg($parentimg,'./image/category/level0');
            }
        }
        else if($Clevel=="二级分类"){
            $Clevel=1;
        }
        else{
             $Clevel=2;
             if($Cimg==""){
                 $Cimg=Category::where('Cid',$id)->first()["Cimg"];
             }
             else{
                 $Cimg=Total::saveImg($Cimg,'./image/category/level2');
             }
        }
        $data=Category::where('Cid','=',$id)->update(
        [
            'Cname'=>$Cname,
            'parentID'=>$parentID,
            'Clevel'=>$Clevel,
            'parentimg'=>$parentimg,
            'Cimg'=>$Cimg,
        ]
        );
    }
    public function Insert(Request $request){
     $Cname=$request->input('Cname');
     $parentID=$request->input('parentID');
     $Clevel=$request->input('Clevel');
     $parentimg=$request->file('parentimg')?$request->file('parentimg'):"";
     $Cimg=$request->file('Cimg')?$request->file('Cimg'):"";
     if($Clevel=="一级分类"){
         $Clevel=0;
         if($parentimg!=""){
             $parentimg=Total::saveImg($parentimg,'./image/category/level0');
         }
     }
     else if($Clevel=="二级分类"){
         $Clevel=1;
     }
     else{
          $Clevel=2;
          if($Cimg!=""){
             $Cimg=Total::saveImg($Cimg,'./image/category/level2');
          }
     }
        $data=Category::insert(
        [
            'Cname'=>$Cname,
            'parentID'=>$parentID,
            'Clevel'=>$Clevel,
            'parentimg'=>$parentimg,
            'Cimg'=>$Cimg
        ]
        );
    }
    public function likeSelect(Request $request){
        $page = $request->input('page');
        $limit = $request->input('limit');
        $offset=($page-1)*$limit;
        $Cid=$request->input('Cid')?$request->input('Cid'):"";
        $Cname=$request->input('Cname')?$request->input('Cname'):"";
        $parentID=$request->input('parentID')?$request->input('parentID'):"";
        $Clevel=$request->input('Clevel')?$request->input('Clevel'):"一级分类";
        if($Clevel ==='一级分类')
        {
            $Clevel=0;
        }
        else if($Clevel ==='二级分类'){
            $Clevel=1;
        }
        else{
            $Clevel=2;
        }
        $data["data"]=Category::where('Cid','like','%'.$Cid.'%')->where('Cname','like','%'.$Cname.'%')->where('parentID','like','%'.$parentID.'%')->where('Clevel','like','%'.$Clevel.'%')->offset($offset)->limit($limit)->get();
        foreach($data["data"] as $key => $model){
            if($model["parentimg"]!=""){
                $model["parentimg"]=env('APP_URL').substr_replace($model["parentimg"],"",0,1);
            }
            if($model["Cimg"]!=""){
                $model["Cimg"]=env('APP_URL').substr_replace($model["Cimg"],"",0,1);
            }
          }
        $data["code"]=0;
        $data["count"]=Category::count();
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }
    public function Delete(Request $request){
        $id=$request->input('id');
        $data=Category::where('Cid',$id)->delete();
    }

}
