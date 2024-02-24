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
            $price        = Order::whereBetween('orderDate', [$startOfMonth, $endOfMonth])->sum('totalPrice');
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
            $count  = Order::where('OrderDate', 'like', '%' . $date[$i] . '%')->count();
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
        $Userid     = $request->input('Userid');
        $shoppingid = $request->input('shoppingid');
        $shoppingid = explode(',', $shoppingid);
        $Goodid     = $request->input('Goodid');
        $Num        = $request->input('Num');
        $totalPrice = $request->input('totalPrice');
        $Name       = $request->input('Name');
        $Address    = $request->input('Address');
        $Phone      = $request->input('Phone');
        Order::insert([
            'Userid' => $Userid, 'Goodid' => $Goodid, 'Num' => $Num, 'totalPrice' => $totalPrice, 'OrderDate' => date("Y-m-d  H:i:s a "), 'Name' => $Name, 'Address' => $Address, 'Phone' => $Phone, 'condition' => '购买成功',
        ]);
        foreach ($shoppingid as $key => $data) {
            Shopping::find($data)->delete();
        }
        Total::json("success");
    }
    public function received(Request $request)
    {
        $Userid = $request->input('Userid');
        $orderid = $request->input('orderid');
        $sql=Order::where('orderid', $orderid)->where('Userid',$Userid);
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
        $Userid=$request->input('Userid');
        $condition=$request->input('condition');
        $sql = Order::where('Userid', '=', $Userid);
        if($condition ==='toBeReceived'){
            $sql->where('condition', '=', '购买成功')->orWhere('condition','=','已发货');
        }
        $data['data']=$sql->offset($offset)->limit($limit)->get();
        foreach ($data["data"] as $order) {
         $goodIds = explode(',', $order['Goodid']);
        $order['goods']=Good::whereIn('Goodid', $goodIds)->get();
        foreach ($order['goods'] as $Good) {
            $Good["Goodimg"] = env('APP_URL') . substr_replace($Good["Goodimg"], "", 0, 1);
        }
        }
        Total::json($data);
    }
    public function likeSelect(Request $request)
    {
        $page          = $request->input('page');
        $limit         = $request->input('limit');
        $offset        = ($page - 1) * $limit;
        $orderid       = $request->input('orderid') ? $request->input('orderid') : "";
        $Userid        = $request->input('Userid') ? $request->input('Userid') : "";
        $Goodid        = $request->input('Goodid') ? $request->input('Goodid') : "";
        $Name          = $request->input('Name') ? $request->input('Name') : "";
        $Address       = $request->input('Address') ? $request->input('Address') : "";
        $phone         = $request->input('phone') ? $request->input('phone') : "";
        $data["data"]  = Order::where('orderid', 'like', '%' . $orderid . '%')->where('Userid', 'like', '%' . $Userid . '%')->where('Goodid', 'like', '%' . $Goodid . '%')->where('Name', 'like', '%' . $Name . '%')->where('Address', 'like', '%' . $Address . '%')->where('phone', 'like', '%' . $phone . '%')->offset($offset)->limit($limit)->get();
        $data["count"] = Order::count();
        Total::json($data);
    }
    public function Update($id)
    {
        $data = Order::where('orderid', $id)->update([
            'condition' => '已发货',
        ]);
        if ($data) {
            Total::json('更新成功');
        } else {
            Total::json('更新失败', -1);
        }
    }
}
