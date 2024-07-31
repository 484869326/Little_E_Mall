<?php

namespace App\Http\Controllers;

use App\Models\Shopping;
use Illuminate\Http\Request;

class ShoppingController extends BaseController
{
    public function getAllCheck(Request $request)
    {
        $userId = $request->input('userId');
        $shoppingList = Shopping::with(['Good'])->where('isBuy', '=', '0')->where('userId', '=', $userId)->get();
        $data['totalPrice']=0;
        $data['totalCheck']=0;
        $data['totalCheckPrice']=0;
        foreach ($shoppingList as $key=>$model) {
            $price=(float)explode(',', $model['good']['price'])[$model['type']]*$model['num'];
            if ($model['isChecked']) {
                $data['totalCheck']++;
                $data['totalCheckPrice']+=$price;
            }
            $data['totalPrice']+=$price;
        }
        $data['isCheckAll']=$data['totalCheck']===count($shoppingList);
        $data['total']=count($shoppingList);
        return $this->response($data);
    }
    public function getBuyGoodList(Request $request)
    {
        $goodId=$request->input('goodId');
        $userId=$request->input('userId');
        $isBuy=$request->input('isBuy')?'1':'0';
        $sql=Shopping::with(['Good'])->where('isBuy', '=', $isBuy)->where('isChecked', '=', '1')->Where('userId', '=', $userId);
        if ($goodId) {
            $sql->where('goodId', '=', $goodId);
        }
        $data=$sql->get();
        foreach ($data as $Key => $model) {
            $model["good"]["goodImg"] = env('APP_URL') . substr_replace($model["good"]["goodImg"], "", 0, 1);
        }
        return $this->response($data);
    }
    public function getShop($page, Request $request)
    {
        $offset=($page-1)*10;
        $userId = $request->input('userId');
        $data = Shopping::with(['Good'])->where('isBuy', '=', '0')->Where('userId', '=', $userId)->orderBy('shoppingId', 'desc')->offset($offset)->limit(10)->get();
        foreach ($data as $Key => $model) {
            $model["good"]["goodImg"] = env('APP_URL') . substr_replace($model["good"]["goodImg"], "", 0, 1);
        }
        return $this->response($data);
    }
    public function changenum(Request $request)
    {
        $shoppingId = $request->input('id');
        $num=$request->input('num');
        $data = Shopping::where('shoppingId', '=', $shoppingId)->update(
            [
                'num' => $num,
            ]
        );
        return $this->response(null,'success');
    }
    public function DeleteShop($shoppingId)
    {
        $data = Shopping::find($shoppingId);
        $data = $data->delete();
        return $this->response(null,'success');
    }
    public function changeType(Request $request)
    {
        $shoppingId = $request->input('shoppingId');
        $type = $request->input('type');
        $color = $request->input('color');
        $data = Shopping::where('shoppingId', '=', $shoppingId)->update(
            [
                'type' => $type,
                'color' => $color,
            ]
        );
        if ($data) {
            return $this->response(null,'success');
        } else {
            return $this->response(null,'fail');
        }
    }
    public function changeChecked(Request $request)
    {
        $shoppingId = $request->input('id');
        $isChecked = $request->input('checked');
        $userId = $request->input('userId');
        $data = Shopping::where('shoppingId', '=', $shoppingId)->where('isBuy', '=', '0')->where('userId', '=', $userId)->update(
            [
                'isChecked' => $isChecked,
            ]
        );
        //是否下面的也是全选
        $result= Shopping::where('isChecked', '=', 0)->where('isBuy', '=', '0')->where('userId', '=', $userId)->count() === 0;
        return $this->response($result);
    }
    public function CheckedAll(Request $request)
    {
        $userId = $request->input('userId');
        $checkAll = $request->input('checkAll');
        $data = Shopping::where('userId', '=', $userId)->where('isBuy', '=', '0')->update(
            [
                'isChecked' => $checkAll,
            ]
        );

        return $this->response(null,'success');
    }
    public function AddShop(Request $request)
    {
        $goodId = $request->input('goodId');
        $userId = $request->input('userId');
        $type = $request->input('type');
        $color = $request->input('color');
        $num = $request->input('num');
        $isBuy=$request->input('isBuy');
        $result = Shopping::where('goodId', '=', $goodId)->where('userId', $userId)->where('isBuy', '=', $isBuy)->first();
        if ($result) {
            Shopping::where('goodId', '=', $goodId)->where('userId', $userId)->update(
                [
                    'type' => $type,
                    'color' => $color,
                    'num' => $num,
                ]
            );
        } else {
            Shopping::insert([
                'goodId' => $goodId,
                'userId' => $userId,
                'type' => $type,
                'color' => $color,
                'num' => $num,
                'isChecked' => $isBuy,
                'isBuy' => $isBuy,
            ]);
        }
        return $this->response(null,'success');
    }
}
