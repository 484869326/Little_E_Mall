<?php

namespace App\Http\Controllers;

use App\Model\My;
use App\Model\Shopping;
use App\Total;
use Illuminate\Http\Request;

class ShoppingController extends Controller
{
    public function getAllCheck(Request $request)
    {
        $Userid = $request->input('userid');
        $shoppingList = Shopping::with(['Good'])->where('Userid', '=', $Userid)->get();
        $data['totalPrice']=0;
        $data['totalCheck']=0;
        $data['totalCheckPrice']=0;
        foreach ($shoppingList as $key=>$model) {
            $price=(float)explode(',', $model['good']['price'])[$model['type']]*$model['Num'];
            if ($model['isChecked']) {
                $data['totalCheck']++;
                $data['totalCheckPrice']+=$price;
            }
            $data['totalPrice']+=$price;
        }
        $data['isCheckAll']=$data['totalCheck']===count($shoppingList);
        $data['total']=count($shoppingList);
        $result['data']=$data;
        Total::json($result);
    }
    public function getShop($page, Request $request)
    {
        $offset=($page-1)*10;
        $Userid = $request->input('userid');
        $data = Shopping::with(['Good'])->where('isBuy', '=', 'false')->Where('Userid', '=', $Userid)->orderBy('shoppingid', 'desc')->offset($offset)->limit(10)->get();
        foreach ($data as $Key => $model) {
            $model["good"]["Goodimg"] = env('APP_URL') . substr_replace($model["good"]["Goodimg"], "", 0, 1);
        }
        $result['data']=$data;
        Total::json($result);
    }
    public function changeNum(Request $request)
    {
        $shoppingid = $request->input('id');
        $Num=$request->input('num');
        $data = Shopping::where('shoppingid', '=', $shoppingid)->update(
            [
                'Num' => $Num,
            ]
        );
        Total::json('success');
    }
    public function DeleteShop($shoppingid)
    {
        $data = Shopping::find($shoppingid);
        $data = $data->delete();
        Total::json('success');
    }
    public function changeType($shoppingid, $type, $color)
    {
        $data = Shopping::where('shoppingid', '=', $shoppingid)->update(
            [
                'type' => $type,
                'color' => $color,
            ]
        );
    }
    public function changeChecked(Request $request)
    {
        $shoppingid = $request->input('id');
        $isChecked = $request->input('checked');
        $Userid = $request->input('userid');
        $data = Shopping::where('shoppingid', '=', $shoppingid)->where('Userid', '=', $Userid)->update(
            [
                'isChecked' => $isChecked,
            ]
        );
        //是否下面的也是全选
        $result['data'] = Shopping::where('isChecked', '=', 0)->where('Userid', '=', $Userid)->count() === 0;
        Total::json($result);
    }
    public function CheckedAll(Request $request)
    {
        $Userid = $request->input('userid');
        $checkAll = $request->input('checkAll');
        $data = Shopping::where('Userid', '=', $Userid)->update(
            [
                'isChecked' => $checkAll,
            ]
        );
        Total::json('success');
    }
    public function AddShop(Request $request)
    {
        $Goodid = $request->input('Goodid');
        $Userid = $request->input('Userid');
        $type = $request->input('type');
        $color = $request->input('color');
        $Num = $request->input('Num');
        $result = Shopping::where('Goodid', '=', $Goodid)->where('Userid', $Userid)->where('isBuy', '=', 'false')->first();
        if ($result) {
            Shopping::where('Goodid', '=', $Goodid)->where('Userid', $Userid)->update(
                [
                    'type' => $type,
                    'color' => $color,
                    'Num' => $Num,
                ]
            );
        } else {
            Shopping::insert([
                'Goodid' => $Goodid,
                'Userid' => $Userid,
                'type' => $type,
                'color' => $color,
                'Num' => $Num,
                'isChecked' => '0',
                'isBuy' => 'false',
            ]);
        }
        Total::json('success');
    }
}
