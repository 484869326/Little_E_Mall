<?php
namespace App;

class Total {
	/**
     * @param {Object} $code 状态码
	 * @param {Object} $data 数据源
	 * @param {Object} $imgName 图片名字  添加路径 env
	 */
	public static function json($result,$code=0, $imgName='') {
        if(is_string($result)){
            $result = array('msg' => $result);
        }
		if ($imgName != '') {
			foreach ($result["data"] as $key => $model) {
				if ($model[$imgName] != '') {
					$model[$imgName] = env('APP_URL') . substr_replace($model[$imgName], "", 0, 1);
				}
			}
		}
        $result["code"]=$code;
		echo json_encode($result, JSON_UNESCAPED_UNICODE);
		exit;
	}
	//转换地址图片
	public static function change($arr) {
		$newArr = [];
		foreach ($arr as $key => $model) {
			$model = env('APP_URL') . substr_replace($model, "", 0, 1);
			array_push($newArr, $model);
		}
		return $newArr;
	}
	//图片进行保存到本地
	public static function saveImg($img, $path) {
		$name = md5(time() . rand(100000, 999999)) . '.' . $img->extension();
		$img->move($path, $name);
		$newString = $path . '/' . $name;
		return $newString;
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
	//图片加路径
	public static function envImg($img) {
		$img = explode(",", $img);
		foreach ($img as $key => $model) {
			$img[$key] = env('APP_URL') . substr_replace($model, "", 0, 1);
		}
		return $img;
	}
}
