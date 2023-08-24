<?php

namespace App\Http\Controllers;
use App\Model\my;
use App\Total;
use Illuminate\Http\Request;

class myController extends Controller {
	public function Login(Request $request) {
		$signature = $request->input('signature');
		$nickName = $request->input('nickName');
		$gender = $request->input('gender');
		$avatarUrl = $request->input('avatarUrl');
		$city = $request->input('city') ? $request->input('city') : "";
		$phone = $request->input('phone') ? $request->input('phone') : "";
		$result = My::where('signature', '=', $signature)->first();
		if ($result) {

		} else {
			My::insert([
				'signature' => $signature,
				'nickName' => $nickName,
				'gender' => $gender,
				'avatarUrl' => $avatarUrl,
				'city' => $city,
				'phone' => $phone,
			]);
		}
	}
	public function LoginId(Request $request) {
		$signature = $request->input('signature');
		$data = My::where('signature', '=', $signature)->first();
		Total::json($data);
		// Total::json(200, '获取成功', $data, '');
	}
	public function getSelf(Request $request) {
		$id = $request->input('dataId');
		$data = My::where('id', $id)->first();
		echo json_encode($data, JSON_UNESCAPED_UNICODE);
	}
	public function Update(Request $request) {
		$id = $request->input('dataId');
		$signature = $request->input('signature');
		$nickName = $request->input('nickName');
		$gender = $request->input('gender') === '男' ? 0 : 1;
		$avatarUrl = $request->file('avatarUrl') ? $request->file('avatarUrl') : "";
		if ($avatarUrl === "") {
			$avatarUrl = My::where('id', $id)->first()["avatarUrl"];
		} else {
			$avatarUrl = Total::saveImg($avatarUrl, './image/User');
		}
		$city = $request->input('city');
		$phone = $request->input('phone');
		$data = My::where('id', '=', $id)->update(
			[
				'signature' => $signature,
				'nickName' => $nickName,
				'gender' => $gender,
				'avatarUrl' => $avatarUrl,
				'city' => $city,
				'phone' => $phone,
			]
		);
	}
	public function Insert(Request $request) {
		$signature = $request->input('signature');
		$nickName = $request->input('nickName');
		$gender = $request->input('gender') === '男' ? 0 : 1;
		$avatarUrl = Total::saveImg($request->file('avatarUrl'), './image/User');
		$city = $request->input('city') ? $request->input('city') : "";
		$phone = $request->input('phone') ? $request->input('phone') : "";
		$data = My::insert(
			[
				'signature' => $signature,
				'nickName' => $nickName,
				'gender' => $gender,
				'avatarUrl' => $avatarUrl,
				'city' => $city,
				'phone' => $phone,
			]
		);
	}
	public function likeSelect(Request $request) {
		$page = $request->input('page');
		$limit = $request->input('limit');
		$offset = ($page - 1) * $limit;
		$id = $request->input('id') ? $request->input('id') : "";
		$signature = $request->input('signature') ? $request->input('signature') : "";
		$nickName = $request->input('nickName') ? $request->input('nickName') : "";
		$gender = $request->input('gender') ? $request->input('gender') : "";
		if ($gender === '男') {
			$gender = 0;
		}
		if ($gender === '女') {
			$gender = 1;
		}
		$city = $request->input('city') ? $request->input('city') : "";
		$phone = $request->input('phone') ? $request->input('phone') : "";
		$data["data"] = My::where('id', 'like', '%' . $id . '%')->where('signature', 'like', '%' . $signature . '%')->where('gender', 'like', '%' . $gender . '%')->where('city', 'like', '%' . $city . '%')->where('phone', 'like', '%' . $phone . '%')->where('nickName', 'like', '%' . $nickName . '%')->offset($offset)->limit($limit)->get();
		foreach ($data["data"] as $key => $model) {
			$img = strpos($model["avatarUrl"], "./image");
			if ($img !== false) {
				$model["avatarUrl"] = env('APP_URL') . substr_replace($model["avatarUrl"], "", 0, 1);
			}
		}
		Total::json($data);
		// Total::json(200, '获取成功', $data, '');
	}
	public function Delete(Request $request) {
		$id = $request->input('id');
		$data = My::where('id', $id)->delete();
	}

}
