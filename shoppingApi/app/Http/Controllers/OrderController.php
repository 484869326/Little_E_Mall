<?php

namespace App\Http\Controllers;

use App\Models\Good;
use App\Models\Order;
use App\Models\Shopping;
use Illuminate\Http\Request;

class OrderController extends BaseController
{
    //展示一年每个月的销售额
    public function monthPriceCount()
    {
        $currentYear = date('Y');
        $data        = [];
        for ($i = 1; $i <= 12; $i++) {
            $startOfMonth = $currentYear . '-' . str_pad($i, 2, '0', STR_PAD_LEFT) . '-01';
            $endOfMonth   = date('Y-m-t', strtotime($startOfMonth));
            $price        = Order::whereBetween('createdAt', [$startOfMonth, $endOfMonth])->sum('totalPrice');
            $data[]       = [
                "month" => $i . '月',
                "price" => $price,
            ];
        }
        return $this->response($data);
    }
    //展示近7天数据
    public function orderCount()
    {
        $time = time();
        $date = [];
        $data = [];
        for ($i = 1; $i <= 7; $i++) {
            $date[$i] = date("Y-m-d", strtotime('+' . ($i - 7) . ' days', $time));
        }
        for ($i = 1; $i <= 7; $i++) {
            $count  = Order::where('createdAt', 'like', '%' . $date[$i] . '%')->count();
            $data[] = [
                "date"  => $date[$i],
                "count" => $count,
            ];
        }
        return $this->response($data);
    }
    public function Buy(Request $request)
    {
        $userId     = $request->input('userId');
        $shoppingId = $request->input('shoppingId');
        $newShoppingId = explode(',', $shoppingId);
        $goodId     = $request->input('goodId');
        $color      = $request->input('color');
        $type       = $request->input('type');
        $num        = $request->input('num');
        $totalPrice = $request->input('totalPrice');
        $name       = $request->input('name');
        $address    = $request->input('address');
        $phone      = $request->input('phone');
        Order::insert([
            'userId' => $userId, 'goodId' => $goodId,'color' => $color,'type' => $type, 'num' => $num, 'totalPrice' => $totalPrice, 'name' => $name, 'address' => $address, 'phone' => $phone, 'condition' => '购买成功',
        ]);
        foreach ($newShoppingId as $key => $data) {
            Shopping::find($data)->delete();
        }
        return $this->response(null,'success');
    }
    public function received(Request $request)
    {
        $userId = $request->input('userId');
        $orderId = $request->input('orderId');
        $sql=Order::where('orderId', $orderId)->where('userId',$userId);
        $condition=$sql->first()['condition'];
        if($condition==='购买成功'){
            return $this->response(null,'fail');
        }
        $data = $sql->update([
            'condition' => '确认收货',
        ]);
        return $this->response(null,'success');
    }
    public function getOrderList(Request $request)
    {
        $limit=$request->input('limit');
        $userId=$request->input('userId');
        $condition=$request->input('condition');
        $orderId=$request->input('orderId');
        $sql = Order::where('userId', '=', $userId);
        if($orderId){
            $sql->where('orderId','=',$orderId);
        }
        if($condition ==='toBeReceived'){
            $sql->where('condition', '=', '购买成功')->orWhere('condition','=','已发货');
        }
        $query=$sql->paginate($limit);
        $list = $query->items();
        $count=$query->total();
        foreach ($list as $order) {
         $goodIds = explode(',', $order['goodId']);
        $order['goods']=Good::whereIn('goodId', $goodIds)->get();
        foreach ($order['goods'] as $Good) {
            $Good["goodImg"] = env('APP_URL') . substr_replace($Good["goodImg"], "", 0, 1);
        }
        }
        $data=['list'=>$list,'count'=>$count];
        return $this->response($data);
    }
    public function likeSelect(Request $request)
    {
        $limit         = $request->input('limit');
        $orderId       = $request->input('orderId') ? $request->input('orderId') : "";
        $userId        = $request->input('userId') ? $request->input('userId') : "";
        $goodId        = $request->input('goodId') ? $request->input('goodId') : "";
        $name          = $request->input('name') ? $request->input('name') : "";
        $address       = $request->input('address') ? $request->input('address') : "";
        $phone         = $request->input('phone') ? $request->input('phone') : "";
        $query  = Order::where('orderId', 'like', '%' . $orderId . '%')->where('userId', 'like', '%' . $userId . '%')->where('goodId', 'like', '%' . $goodId . '%')->where('name', 'like', '%' . $name . '%')->where('address', 'like', '%' . $address . '%')->where('phone', 'like', '%' . $phone . '%')->paginate($limit);
        $list=$query->items();
        $count=$query->total();
        $data=['list'=>$list,'count'=>$count];
        return $this->response($data);
    }
    public function Update($id)
    {
        $data = Order::where('orderId', $id)->update([
            'condition' => '已发货',
        ]);
        if ($data) {
            return $this->response(null,'更新成功');
        } else {
            return $this->response(null,'更新失败',400);
        }
    }
}
