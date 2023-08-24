<?php

namespace App\Http\Contr
ollers;
use App\Model\My;
use App\Model\Shopping;
use App\Total;
use Illuminate\Http\Request;

class ShoppingController extends Controller {
	//
	public function getShop(Request $request) {
		$signature = $request->input('signature');
		$Userid = My::where('signature', '=', $signature)->first()["id"];
		$data = Shopping::with(['Good'])->where('isBuy', '=', 'false')->orderBy('shoppingid', 'desc')->get()->Where('Userid', '=', $Userid);
		foreach ($data as $Key => $model) {
			$model["good"]["Goodimg"] = env('APP_URL') . substr_replace($model["good"]["Goodimg"], "", 0, 1);
		}
		Total::json($data);
		// Total::json(200, '获取成功', $data, '');
	}
	public function changeNum($shoppingid, $Num) {
		$data = Shopping::where('shoppingid', '=', $shoppingid)->update(
			[
				'Num' => $Num,
			]
		);
	}
	public function DeleteShop($shoppingid) {
		$data = Shopping::find($shoppingid);
		$data = $data->delete();
		echo $data;
	}
	public function changeType($shoppingid, $type, $color) {
		$data = Shopping::where('shoppingid', '=', $shoppingid)->update(
			[
				'type' => $type,
				'color' => $color,
			]
		);
	}
	public function changeChecked($shoppingid, $isChecked) {
		$data = Shopping::where('shoppingid', '=', $shoppingid)->update(
			[
				'isChecked' => $isChecked,
			]
		);
	}
	public function CheckedAll($signature, $isChecked) {
		$Userid = My::where('signature', '=', $signature)->first()["id"];
		$data = Shopping::where('Userid', '=', $Userid)->update(
			[
				'isChecked' => $isChecked,
			]
		);
	}
	public function AddShop(Request $request) {
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
					'Num' => $result["Num"] + $Num,
				]);
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
	}
	public function deleteChecked(Request $request) {
		$signature = $request->input('signature');
		$Userid = My::where('signature', '=', $signature)->first()["id"];
		$data = Shopping::where('Userid', '=', $Userid)->where('isChecked', '=', '1')->delete();
	}
}
