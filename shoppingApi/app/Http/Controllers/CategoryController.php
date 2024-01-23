<?php

namespace App\Http\Controllers;
use App\Model\Category;
use App\Total;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
        $result['data']=$category;
		Total::json($result);
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
	//验证规则
	public function validateData($request, $id) {
		$validator = Validator::make($request->all(), [
			'Cname' => ['required', 'regex:/^[\x{4e00}-\x{9fa5}A-Za-z0-9]{1,10}$/u'],
			'level' => 'required|numeric|in:0,1,2',
			'parentID' => ['required_unless:level,0', function ($attribute, $value, $fail) use ($request, $id) {
				if ($request->input('level')) {
					if (!is_numeric($value)) {
						$fail('parentID 必须是数字');
					} elseif ($id == $value) {
						$fail('父亲ID不能和自身相同');
					}
				}
			}],
			'Cimg' => ['required_unless:level,1', function ($attribute, $value, $fail) use ($request) {
				if ($request->input('level') != 1) {
					if (!preg_match('/\/+/', $value)) {
						$fail('路径不符合要求');
					}
				}
			}],
		]);
		return $validator;
	}
	public function Update($id, Request $request) {
		$validator = $this->validateData($request, $id);
		if ($validator->fails()) {
			Total::json('校验失败', -1);
		}
		$Cname = $request->input('Cname');
		$parentID = $request->input('parentID');
		$level = $request->input('level');
		$Cimg = $request->input('Cimg');
		//分层级再进行验证
		if ($level === 0) {
			$parentID = 0;
		} elseif ($parentID === 0) {
			Total::json('上级菜单错误', -1);
		} else {
			$hasParentID = Category::where('Cid', '=', $parentID)->where('level', '=', $level - 1)->count();
			if ($hasParentID === 0) {
				Total::json('上级菜单不存在', -1);
			}
			//判断是不是 有孙子节点
			$children = Category::where('parentID', '=', $id)->get();
			foreach ($children as $key => $value) {
				$parentIDS = $value['Cid'];
				$grandson = Category::where('parentID', '=', $parentIDS)->get();
				if (count($grandson) != 0) {
					Total::json('父节点有孙子节点', -1);
					break;
				}
			}
		}
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
	public function Insert(Request $request) {
		$validator = $this->validateData($request, null);
		if ($validator->fails()) {
			Total::json('校验失败', -1);
		}
		$Cname = $request->input('Cname');
		$parentID = $request->input('parentID');
		$level = $request->input('level');
		$Cimg = $request->input('Cimg');
		//分层级再进行验证
		if ($level === 0) {
			$parentID = 0;
		} elseif ($parentID === 0) {
			Total::json('上级菜单错误', -1);
		} else {
			$hasParentID = Category::where('Cid', '=', $parentID)->where('level', '=', $level - 1)->count();
			if ($hasParentID === 0) {
				Total::json('上级菜单不存在', -1);
			}
		}
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
