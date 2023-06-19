<?php

namespace App\Http\Controllers;
use App\Model\Order;
use App\Model\Shopping;
use App\Model\Good;
use App\Model\My;
use App\Total;
use Illuminate\Http\Request;


class OrderController extends Controller
{
    public function Buy(Request $request){
        $Userid=$request->input('Userid');
        $shoppingid=$request->input('shoppingid');
        $shoppingid=explode(',',$shoppingid);
        $Goodid=$request->input('Goodid');
        $Num=$request->input('Num');
        $totalPrice=$request->input('totalPrice');
        $Name=$request->input('Name');
        $Address=$request->input('Address');
        $Phone=$request->input('Phone');
          Order::insert([
          'Userid'=>$Userid,'Goodid'=>$Goodid,'Num'=>$Num,'totalPrice'=>$totalPrice,'OrderDate'=>date("Y-m-d  H:i:s a "),'Name'=>$Name,'Address'=>$Address,'Phone'=>$Phone,'condition'=>'购买成功'
                ]);
        foreach($shoppingid as $key=>$data){
            Shopping::where('shoppingid','=',$data)->update([
                'isBuy'=>'true'
            ]);
        }
    }
    public function received(Request $request){
        $signature=$request->input('signature');
         $Userid=My::where('signature','=',$signature)->first()["id"];
        $Order=Order::where('Userid',$Userid)->get();
        foreach($Order as $key =>$model){
            $newArr=explode(",",$model["Goodid"]);
            foreach($newArr as $key1 =>$model1){
                 if($model["Good"]==""){
                    $model["Good"]=Good::where('Goodid',$model1)->get();
                }
                  else{
            $model["Good"]=$model["Good"]->merge(Good::where('Goodid',$model1)->get());
            }
                    }
                    foreach($model["Good"] as $key2=>$Good){
                                     $Good["Goodimg"]=env('APP_URL').substr_replace($Good["Goodimg"],"",0,1);
                                }

            }


        Total::json(200,'获取成功',$Order,'');
    }
    public function getOrderNum(){
        // $data=Order::where('OrderDate','like','%12-08%')->count();
        // Total::json(200,'获取成功',$data,'');
        $time = time();
         $date = [];
         $data=[];
          for ($i=1; $i<=7; $i++){
            $date[$i] = date("m-d" ,strtotime( '+' . $i-7 .' days', $time));
          }
          for($i=1;$i<=7;$i++){
              $data1=Order::where('OrderDate','like','%'.$date[$i].'%')->count();
               array_push($data,$data1);
          }
          Total::json(200,'获取成功',$data,'');

    }
    public function likeSelect(Request $request){
        $page = $request->input('page');
        $limit = $request->input('limit');
        $offset=($page-1)*$limit;
        $orderid=$request->input('orderid')?$request->input('orderid'):"";
        $Userid=$request->input('Userid')?$request->input('Userid'):"";
        $Goodid=$request->input('Goodid')?$request->input('Goodid'):"";
        $Name=$request->input('Name')?$request->input('Name'):"";
        $Address=$request->input('Address')?$request->input('Address'):"";
        $phone=$request->input('phone')?$request->input('phone'):"";
        $data["data"]=Order::where('orderid','like','%'.$orderid.'%')->where('Userid','like','%'.$Userid.'%')->where('Goodid','like','%'.$Goodid.'%')->where('Name','like','%'.$Name.'%')->where('Address','like','%'.$Address.'%')->where('phone','like','%'.$phone.'%')->offset($offset)->limit($limit)->get();
        $data["code"]=0;
        $data["count"]=Order::count();
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }
    public function Update(Request $request){
        $id=$request->input('id');
        $data=Order::where('orderid',$id)->update([
            'condition'=>'已发货'
        ]);
    }
}
