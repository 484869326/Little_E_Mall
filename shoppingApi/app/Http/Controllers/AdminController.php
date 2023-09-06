<?php

namespace App\Http\Controllers;

use App\Model\Admin;
use App\Total;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class AdminController extends Controller {
	//图表展示：管理员性别
	public function adminSexCount() {
		$counts = Admin::select('sex')
			->selectRaw('COUNT(*) as count')
			->groupBy('sex')
			->get();
		$result["data"] = $counts;
		Total::json($result);
	}
	//登录
	public function login(Request $request) {
		$adminName = $request->input('username');
		$adminPwd = $request->input('password');
		$data = Admin::where('adminName', $adminName)->where('adminPwd', $adminPwd)->first();
		if (is_null($data)) {
			Total::json('登录失败', -1);
		} else {
			$result["data"] = $data;
			Total::json($result);
		}
	}
	public function getSelf(Request $request) {
		$id = $request->input('dataId');
		$admin = Admin::where('id', $id)->first();
		$data["data"] = $admin;
		Total::json($data);
		// Total::json(200, '获取成功', $data, '');
	}
	//验证规则
	public function validateData(Request $request) {
		$validator = Validator::make($request->all(), [
			// adminName,adminPwd 5-10个数字或者英文
			'adminName' => ['required', 'regex:/^[a-zA-Z0-9]{5,10}$/'],
			'Sex' => ['required', Rule::in(['男', '女'])],
			'Email' => ['required', 'regex:/^\S+@\S+\.\S+$/i'],
			'Address' => 'required',
			'adminPwd' => ['required', 'regex:/^[a-zA-Z0-9]{5,10}$/'],
			'Tel' => ['required', 'regex:/^1[0-9]{10}$/'],
			'Status' => [
				'required',
				'numeric',
				Rule::in(['0', '1']),
			],
		]);
		return $validator;
	}
	//更新
	public function Update($id, Request $request) {
		$validator = $this->validateData($request);
		if ($validator->fails()) {
			Total::json('校验失败', -1);
		}
		$adminName = $request->input('adminName');
		$Sex = $request->input('Sex');
		$Email = $request->input('Email');
		$Address = $request->input('Address');
		$Tel = $request->input('Tel');
		$Status = $request->input('Status');
		$data = Admin::where('id', '=', $id)->update(
			[
				'adminName' => $adminName,
				'Sex' => $Sex,
				'Email' => $Email,
				'Address' => $Address,
				'Tel' => $Tel,
				'Status' => $Status,
			]
		);
		if ($data) {
			Total::json('更新成功');
		} else {
			Total::json('更新失败', -1);
		}
	}
	//增加
	public function Insert(Request $request) {
		$validator = $this->validateData($request);
		if ($validator->fails()) {
			Total::json('校验失败', -1);
		}
		$adminName = $request->input('adminName');
		$Sex = $request->input('Sex');
		$Email = $request->input('Email');
		$Address = $request->input('Address');
		$adminPwd = $request->input('adminPwd');
		$Tel = $request->input('Tel');
		$Status = $request->input('Status');
		$data = Admin::insert(
			[
				'adminName' => $adminName,
				'Sex' => $Sex,
				'Email' => $Email,
				'Address' => $Address,
				'adminPwd' => $adminPwd,
				'Tel' => $Tel,
				'Status' => $Status,
			]
		);
		if ($data) {
			Total::json('增加成功');
		} else {
			Total::json('增加失败', -1);
		}
	}
	//查找
	public function likeSelect(Request $request) {
		$page = $request->input('page');
		$limit = $request->input('limit');
		$offset = ($page - 1) * $limit;
		$adminName = $request->input('adminName') ?: "";
		$Sex = $request->input('sex') ?: "";
		$Email = $request->input('email') ?: "";
		$Address = $request->input('address') ?: "";
		$Tel = $request->input('telephone') ?: "";
		$betweenTime = $request->input('betweenTime') ?: "";
		$result["data"] = Admin::where(function ($query) use ($adminName, $Sex, $Email, $Address, $Tel, $betweenTime) {
			if (!empty($adminName)) {
				$query->where('adminName', 'like', '%' . $adminName . '%');
			}
			if (!empty($Sex)) {
				$query->where('Sex', 'like', '%' . $Sex . '%');
			}
			if (!empty($Email)) {
				$query->where('Email', 'like', '%' . $Email . '%');
			}
			if (!empty($Address)) {
				$query->where('Address', 'like', '%' . $Address . '%');
			}
			if (!empty($Tel)) {
				$query->where('Tel', 'like', '%' . $Tel . '%');
			}
			if (!empty($betweenTime)) {
				$query->whereBetween('created_at', $betweenTime);
			}
		})
			->tap(function ($query) use (&$result) {
				$result["count"] = $query->count();
			})
			->offset($offset)
			->limit($limit)
			->get();
		Total::json($result);
	}
	//删除
	public function Delete($id) {
		$data = Admin::where('id', $id)->delete();
		if ($data) {
			Total::json('删除成功');
		} else {
			Total::json('删除失败', -1);
		}
	}
}
