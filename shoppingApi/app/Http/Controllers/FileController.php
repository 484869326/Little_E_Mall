<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileController extends BaseController {
	// 图片上传
	public function sendFile(Request $request) {
        $data = FileController::saveImg($request->file("file"), './image/other');
        return $this->response($data);
	}
	//图片进行保存到本地
	public static function saveImg($img, $path) {
		$name = md5(time() . rand(100000, 999999)) . '.' . $img->extension();
		$img->move($path, $name);
		$url = $path . '/' . $name;
		return $url;
	}
	//图片进行保存到本地
	public static function saveImgs($img, $path) {
		$newArr = [];
		foreach ($img as $key => $model) {
			foreach ($model as $key1 => $model1) {
				$name = md5(time() . rand(100000, 999999)) . '.' . $model1->extension();
				$model1->move($path, $name);
			}
			array_push($newArr, $path . '/' . $name);
		}
		$newString = implode(",", $newArr);
		return $newString;
	}
}
