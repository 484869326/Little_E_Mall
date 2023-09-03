<?php

namespace App\Http\Controllers;
use App\Model\Category;
use App\Total;
use Illuminate\Http\Request;

class CategoryController extends Controller {
	public function getCategory() {
		$data = Category::where('level', '=', '0')->orderByRaw('RAND()')->take(10)->get();
		Total::json(200, '获取成功', $data, 'parentimg');
	}
	public function categoryList() {
		$category = Category::where('level', '=', '0')->get();
		$children = Category::where('level', '=', '1')->get();
		foreach ($children as $key => $data) {
			$parentID = $data["Cid"];
			$data["children"] = Category::where('parentID', '=', $parentID)->get();
			foreach ($data["children"] as $Index => $datas) {
				$datas["Cimg"] = env('APP_URL') . substr_replace($datas["Cimg"], "", 0, 1);

			}
		}

		foreach ($category as $key => $data) {
			$parentID = $data["Cid"];
			$newArr = [];
			foreach ($children as $index => $data1) {
				if ($parentID == $data1["parentID"]) {
					array_push($newArr, $data1);
				}
				$data["children"] = $newArr;
			}

		}
		Total::json(200, '获取成功', $category, 'parentimg');
	}
	public function selectCategory($level) {
		$category["data"] = Category::where('level', $level)->get(['Cid', 'Cname']);
		Total::json($category);
	}
	// public function getSelf(Request $request) {
	// 	$id = $request->input('dataId');
	// 	$data = Category::where('Cid', $id)->first();
	// 	if ($data["parentimg"] != "") {
	// 		$data["parentimg"] = env('APP_URL') . substr_replace($data["parentimg"], "", 0, 1);
	// 	}
	// 	if ($data["Cimg"] != "") {
	// 		$data["Cimg"] = env('APP_URL') . substr_replace($data["Cimg"], "", 0, 1);
	// 	}
	// 	echo json_encode($data, JSON_UNESCAPED_UNICODE);
	// }
	public function Insert(Request $request) {
		$Cname = $request->input('Cname');
		$parentID = $request->input('parentID');
		$level = $request->input('level');
		$Cimg = $request->input('Cimg');
		$result = Category::insert(
			[
				'Cname' => $Cname,
				'parentID' => $parentID,
				'level' => $level,
				'Cimg' => $Cimg,
			]
		);
		if ($result) {
			Total::json('增加成功');
		} else {
			Total::json('增加失败', -1);
		}
	}
	public function Update($id, Request $request) {
		$Cname = $request->input('Cname');
		$parentID = $request->input('parentID');
		$level = $request->input('level');
		$Cimg = $request->input('Cimg');
		$result = Category::where('Cid', '=', $id)->update(
			[
				'Cname' => $Cname,
				'parentID' => $parentID,
				'level' => $level,
				'Cimg' => $Cimg,
			]
		);
		if ($result) {
			Total::json('更新成功');
		} else {
			Total::json('更新失败', -1);
		}
	}

	public function likeSelect(Request $request) {
		$category = Category::where('level', '=', '0')->get();
		foreach ($category as $key1 => $children) {
			$parentID = $children["Cid"];
			$children["Cimg"] = env('APP_URL') . substr_replace($children["Cimg"], "", 0, 1);
			$children["children"] = Category::where('parentID', '=', $parentID)->get();
			foreach ($children["children"] as $key2 => $value) {
				$parentID = $value['Cid'];
				$value['children'] = Category::where('parentID', '=', $parentID)->get();
				foreach ($value['children'] as $key3 => $value2) {
					$value2["Cimg"] = env('APP_URL') . substr_replace($value2["Cimg"], "", 0, 1);
				}
			}
		}
		$data['data'] = $category;
		Total::json($data);
	}
	public function Delete($id) {
		$data = Category::where('Cid', $id)->delete();
		if ($data) {
			Total::json('删除成功');
		} else {
			Total::json('删除失败', -1);
		}
	}

}
