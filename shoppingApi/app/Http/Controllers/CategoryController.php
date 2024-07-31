<?php

namespace App\Http\Controllers;
use App\Models\Category;
use App\Models\Good;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends BaseController {
	public function getCategory() {
		$data = Category::where('level', '=', '0')->orderByRaw('RAND()')->take(10)->get();
		return $this->response($data);
	}
	public function categoryList() {
		$category = Category::where('level', '=', '0')->get();
		$children = Category::where('level', '=', '1')->get();
		foreach ($children as $key => $data) {
			$parentId = $data["cid"];
			$data["children"] = Category::where('parentId', '=', $parentId)->get();
			foreach ($data["children"] as $Index => $datas) {
				$datas["cImg"] = env('APP_URL') . substr_replace($datas["cImg"], "", 0, 1);
			}
		}
		foreach ($category as $key => $data) {
			$parentId = $data["cid"];
			$newArr = [];
			foreach ($children as $index => $data1) {
				if ($parentId == $data1["parentId"]) {
					array_push($newArr, $data1);
				}
				$data["children"] = $newArr;
			}
		}
        return $this->response($category);
	}
	public function selectCategory($level) {
		$category = Category::where('level', $level)->get(['cid', 'cName']);
		$data=['list'=>$category];
        return $this->response($data);
	}
	// public function getSelf(Request $request) {
	// 	$id = $request->input('dataId');
	// 	$data = Category::where('cid', $id)->first();
	// 	if ($data["parentimg"] != "") {
	// 		$data["parentimg"] = env('APP_URL') . substr_replace($data["parentimg"], "", 0, 1);
	// 	}
	// 	if ($data["cImg"] != "") {
	// 		$data["cImg"] = env('APP_URL') . substr_replace($data["cImg"], "", 0, 1);
	// 	}
	// 	echo json_encode($data, JSON_UNESCAPED_UNICODE);
	// }
	//验证规则
	public function validateData($request, $id) {
		$validator = Validator::make($request->all(), [
			'cName' => ['required', 'regex:/^[\x{4e00}-\x{9fa5}A-Za-z0-9]{1,10}$/u'],
			'level' => 'required|numeric|in:0,1,2',
			'parentId' => ['required_unless:level,0', function ($attribute, $value, $fail) use ($request, $id) {
				if ($request->input('level')) {
					if (!is_numeric($value)) {
						$fail('parentId 必须是数字');
					} elseif ($id == $value) {
						$fail('父亲ID不能和自身相同');
					}
				}
			}],
			'cImg' => ['required_unless:level,1', function ($attribute, $value, $fail) use ($request) {
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
            return $this->response(null,'校验失败',400);
		}
		$cName = $request->input('cName');
		$parentId = $request->input('parentId');
		$level = $request->input('level');
		$cImg = $request->input('cImg');
		//分层级再进行验证
		if ($level === 0) {
			$parentId = 0;
		} elseif ($parentId === 0) {
            return $this->response(null,'上级菜单错误',400);
		} else {
			$hasparentId = Category::where('cid', '=', $parentId)->where('level', '=', $level - 1)->count();
			if ($hasparentId === 0) {

			}
			//判断是不是 有孙子节点
			$children = Category::where('parentId', '=', $id)->get();
			foreach ($children as $key => $value) {
				$parentIdS = $value['cid'];
				$grandson = Category::where('parentId', '=', $parentIdS)->get();
				if (count($grandson) != 0) {
                    return $this->response(null,'父节点有孙子节点',400);
					break;
				}
			}
		}
		$result = Category::where('cid', '=', $id)->update(
			[
				'cName' => $cName,
				'parentId' => $parentId,
				'level' => $level,
				'cImg' => $cImg,
			]
		);
		if ($result) {
            return $this->response(null,'更新成功');
		} else {
            return $this->response(null,'更新失败',400);
		}
	}
	public function Insert(Request $request) {
		$validator = $this->validateData($request, null);
		if ($validator->fails()) {
            return $this->response(null,'校验失败',400);
		}
		$cName = $request->input('cName');
		$parentId = $request->input('parentId');
		$level = $request->input('level');
		$cImg = $request->input('cImg');
		//分层级再进行验证
		if ($level === 0) {
			$parentId = 0;
		} elseif ($parentId === 0) {
            return $this->response(null,'上级菜单错误',400);
		} else {
			$hasparentId = Category::where('cid', '=', $parentId)->where('level', '=', $level - 1)->count();
			if ($hasparentId === 0) {
                return $this->response(null,'上级菜单不存在',400);
			}
		}
		$result = Category::insert(
			[
				'cName' => $cName,
				'parentId' => $parentId,
				'level' => $level,
				'cImg' => $cImg,
			]
		);
		if ($result) {
            return $this->response(null,'增加成功');
		}
            return $this->response(null,'增加失败',400);

	}

	public function likeSelect(Request $request) {
        $query = Category::where('level', '=', '0')->paginate();
        $list = $query->items();
        $count=$query->total();;
		foreach ($list as $key1 => $children) {
			$parentId = $children["cid"];
			$children["cImg"] = $this->imgPrefix($children["cImg"]);
			$children["children"] = Category::where('parentId', '=', $parentId)->get();
			foreach ($children["children"] as $key2 => $value) {
				$parentId = $value['cid'];
				$value['children'] = Category::where('parentId', '=', $parentId)->get();
				foreach ($value['children'] as $key3 => $value2) {
                    $value2["cImg"] = $this->imgPrefix($value2["cImg"]);
				}
			}
		}
        $data=['count'=>$count,'list'=>$list];
        return $this->response($data);
	}
	public function Delete($id) {
        $category=Category::where('cid', $id)->first();
        if($category['level']===2){
            $good=Good::where('cid',$id)->first();
            if($good){
                return $this->response(null,'此类别与商品有关联，不允许删除',400);
            }
        }else{
            $sonCategory=Category::where('parentId',$id)->first();
            if($sonCategory){
                return $this->response(null,'无法删除该类别，因为它具有下级类别。',400);
            }
        }

		$data = Category::where('cid', $id)->delete();
		if ($data) {
            return $this->response(null,'删除成功');
		} else {
            return $this->response(null,'删除失败',400);
		}
	}

}
