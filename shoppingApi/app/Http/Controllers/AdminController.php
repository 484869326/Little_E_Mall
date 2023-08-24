<?php

namespace App\Http\Controllers;

use App\Model\Admin;
use App\Total;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class AdminController extends Controller {
	public function login(Request $request) {
		$adminName = $request->input('username');
		$adminPwd = $request->input('password');
		$data = Admin::where('adminName', $adminName)->where('adminPwd', $adminPwd)->first();
		if (is_null($data)) {
			Total::json('登录失败',-1);
		} else {
            $result["data"]=$data;
			Total::json($result);
		}
	}
	public function getSelf(Request $request) {
		$id = $request->input('dataId');
		$admin = Admin::where('id', $id)->first();
        $data["data"]=$admin
        Total::json($data);
		// Total::json(200, '获取成功', $data, '');
	}
	public function Update($id,Request $request) {
        $validator = Validator::make($request->all(), [
            'adminName' => 'required',
            'Sex' => 'required',
          'Email' => ['required', 'regex:/^\S+@\S+\.\S+$/i'],
            'Address' => 'required',
            'adminPwd' => 'required',
            'Tel' => ['required', 'regex:/^1[0-9]{10}$/'],
            'Status' => 'required',
        ]);

        if ($validator->fails()) {
            Total::json('更新失败', -1);
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
                'Status'=>$Status
			]
		);
        if ($data) {
             Total::json('更新成功');
        } else {
            Total::json('更新失败',-1);
        }
	}
	public function Insert(Request $request) {
$validator = Validator::make($request->all(), [
    'adminName' => 'required',
    'Sex' => 'required',
  'Email' => ['required', 'regex:/^\S+@\S+\.\S+$/i'],
    'Address' => 'required',
    'adminPwd' => 'required',
    'Tel' => ['required', 'regex:/^1[0-9]{10}$/'],
    'Status' => 'required',
]);

if ($validator->fails()) {
    Total::json('增加失败', -1);
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
                'Status'=>$Status
			]
		);
		if ($data) {
             Total::json('增加成功');
		} else {
            Total::json('增加失败',-1);
		}
	}
	public function likeSelect(Request $request) {
		$page = $request->input('page');
		$limit = $request->input('limit');
		$offset = ($page - 1) * $limit;
		$id = $request->input('dataId') ?: "";
		$adminName = $request->input('adminName') ?: "";
		$Sex = $request->input('sex') ?: "";
		$Email = $request->input('email') ?: "";
		$Address = $request->input('address') ?: "";
		$Tel = $request->input('telephone') ?: "";
		$betweenTime = $request->input('betweenTime') ?: "";
		$result["data"] = Admin::where(function ($query) use ($id, $adminName, $Sex, $Email, $Address, $Tel, $betweenTime) {
			if (!empty($id)) {
				$query->where('id', 'like', '%' . $id . '%');
			}
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
	public function Delete($id) {
		$data = Admin::where('id', $id)->delete();
		if ($data) {
             Total::json('删除成功');
		} else {
            Total::json('删除失败',-1);
		}
	}
}
