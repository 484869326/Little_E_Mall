<?php

namespace App\Http\Controllers;

use App\Model\Good;
use App\Model\My;
use App\Model\Order;
use App\Model\Shopping;
use App\Total;
use Illuminate\Http\Request;

class OrderController extends Controller
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
        $result["data"] = $data;
        Total::json($result);
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
        $result["data"] = $data;
        Total::json($result);
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
            'userId' => $userId, 'goodId' => $goodId,'color' => $color,'type' => $type, 'num' => $num, 'totalPrice' => $totalPrice, 'createdAt' => date("Y-m-d  H:i:s a "), 'name' => $name, 'address' => $address, 'phone' => $phone, 'condition' => '购买成功',
        ]);
        foreach ($newShoppingId as $key => $data) {
            Shopping::find($data)->delete();
        }
        Total::json("success");
    }
    public function received(Request $request)
    {
        $userId = $request->input('userId');
        $orderId = $request->input('orderId');
        $sql=Order::where('orderId', $orderId)->where('userId',$userId);
        $condition=$sql->first()['condition'];
        if($condition==='购买成功'){
            Total::json('fail');
        }
        $data = $sql->update([
            'condition' => '确认收货',
        ]);
        Total::json('success');
    }
    public function getOrderList(Request $request)
    {
        $page=$request->input('page');
        $limit=$request->input('limit');
        $offset        = ($page - 1) * $limit;
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
        if($offset && $limit){
            $sql->offset($offset)->limit($limit);
        }
        $data['data']=$sql->get();
        foreach ($data["data"] as $order) {
         $goodIds = explode(',', $order['goodId']);
        $order['goods']=Good::whereIn('goodId', $goodIds)->get();
        foreach ($order['goods'] as $Good) {
            $Good["goodImg"] = env('APP_URL') . substr_replace($Good["goodImg"], "", 0, 1);
        }
        }
        Total::json($data);
    }
    public function likeSelect(Request $request)
    {
        $page          = $request->input('page');
        $limit         = $request->input('limit');
        $offset        = ($page - 1) * $limit;
        $orderId       = $request->input('orderId') ? $request->input('orderId') : "";
        $userId        = $request->input('userId') ? $request->input('userId') : "";
        $goodId        = $request->input('goodId') ? $request->input('goodId') : "";
        $name          = $request->input('name') ? $request->input('name') : "";
        $address       = $request->input('address') ? $request->input('address') : "";
        $phone         = $request->input('phone') ? $request->input('phone') : "";
        $data["data"]  = Order::where('orderId', 'like', '%' . $orderId . '%')->where('userId', 'like', '%' . $userId . '%')->where('goodId', 'like', '%' . $goodId . '%')->where('name', 'like', '%' . $name . '%')->where('address', 'like', '%' . $address . '%')->where('phone', 'like', '%' . $phone . '%')->offset($offset)->limit($limit)->get();
        $data["count"] = Order::count();
        Total::json($data);
    }
    public function Update($id)
    {
        $data = Order::where('orderId', $id)->update([
            'condition' => '已发货',
        ]);
        if ($data) {
            Total::json('更新成功');
        } else {
            Total::json('更新失败', -1);
        }
    }
}
