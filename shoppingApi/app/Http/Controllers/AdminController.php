<?php

namespace App\Http\Controllers;

use App\Model\Admin;
use App\Total;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class AdminController extends Controller
{
    //图表展示：管理员性别
    public function adminGenderCount()
    {
        $counts = Admin::select('gender')
            ->selectRaw('COUNT(*) as count')
            ->groupBy('gender')
            ->get();
        $result["data"] = $counts;
        Total::json($result);
    }
    //登录
    public function login(Request $request)
    {
        $adminName = $request->input('username');
        $adminPwd = hash('sha256', $request->input('password'));
        $data = Admin::where('adminName', $adminName)->where('adminPwd', $adminPwd)->where('status', 1)->first();
        if (is_null($data)) {
            Total::json('登录失败', -1);
        } else {
            $result["data"] = $data;
            Total::json($result);
        }
    }
    public function getSelf(Request $request)
    {
        $id = $request->input('dataId');
        $admin = Admin::where('id', $id)->first();
        $data["data"] = $admin;
        Total::json($data);
        // Total::json(200, '获取成功', $data, '');
    }
    //验证规则
    public function validateData(Request $request, $isInsert = true)
    {
        $rules = [
                'adminName' => ['required', 'regex:/^[a-zA-Z0-9]{5,10}$/'],
                'gender' => ['required', Rule::in([0, 1])],
                'email' => ['required', 'regex:/^\S+@\S+\.\S+$/i'],
                'address' => 'required',
                'tel' => ['required', 'regex:/^1[0-9]{10}$/'],
                'status' => ['required', 'numeric', Rule::in(['0', '1'])],
            ];
        if ($isInsert) {
            $rules['adminPwd'] = ['required', 'regex:/^[a-zA-Z0-9]{5,10}$/'];
        }
        $validator = Validator::make($request->all(), $rules);
        return $validator;
    }
    //更新
    public function Update($id, Request $request)
    {
        $validator = $this->validateData($request, false);
        if ($validator->fails()) {
            Total::json('校验失败', -1);
        }
        $adminName = $request->input('adminName');
        $gender = $request->input('gender');
        $email = $request->input('email');
        $address = $request->input('address');
        $tel = $request->input('tel');
        $status = $request->input('status');
        $roleId = $request->input('roleId');
        $data = Admin::where('id', '=', $id)->update(
            [
                'adminName' => $adminName,
                'gender' => $gender,
                'email' => $email,
                'address' => $address,
                'tel' => $tel,
                'status' => $status,
                'roleId'=>$roleId
            ]
        );
        if ($data) {
            Total::json('更新成功');
        } else {
            Total::json('更新失败', -1);
        }
    }
    //增加
    public function Insert(Request $request)
    {
        $validator = $this->validateData($request);
        if ($validator->fails()) {
            Total::json('校验失败', -1);
        }
        $adminName = $request->input('adminName');
        $gender = $request->input('gender');
        $email = $request->input('email');
        $address = $request->input('address');
        $adminPwd = hash('sha256', $request->input('adminPwd'));
        $tel = $request->input('tel');
        $status = $request->input('status');
        $roleId = $request->input('roleId');
        $data = Admin::insert(
            [
                'adminName' => $adminName,
                'gender' => $gender,
                'email' => $email,
                'address' => $address,
                'adminPwd' => $adminPwd,
                'tel' => $tel,
                'status' => $status,
                'roleId'=>$roleId
            ]
        );
        if ($data) {
            Total::json('增加成功');
        } else {
            Total::json('增加失败', -1);
        }
    }
    //查找
    public function likeSelect(Request $request)
    {
        $page = $request->input('page');
        $limit = $request->input('limit');
        $offset = ($page - 1) * $limit;
        $adminName = $request->input('adminName') ?: "";
        $gender = $request->input('gender');
        $email = $request->input('email') ?: "";
        $address = $request->input('address') ?: "";
        $tel = $request->input('tel') ?: "";
        $roleId=$request->input('roleId');
        $betweenTime = $request->input('betweenTime') ?: "";
        $result["data"] = Admin::with('role')->where(function ($query) use ($adminName, $gender, $email, $address, $tel,$roleId, $betweenTime) {
            if (!empty($adminName)) {
                $query->where('adminName', 'like', '%' . $adminName . '%');
            }
            if (isset($gender)) {
                $query->where('gender', 'like', '%' . $gender . '%');
            }
            if (!empty($email)) {
                $query->where('email', 'like', '%' . $email . '%');
            }
            if (!empty($address)) {
                $query->where('address', 'like', '%' . $address . '%');
            }
            if (!empty($tel)) {
                $query->where('tel', 'like', '%' . $tel . '%');
            }
            if (!empty($roleId)) {
                $query->where('roleId', 'like', '%' . $roleId . '%');
            }
            if (!empty($betweenTime)) {
                $query->whereBetween('createdAt', $betweenTime);
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
    public function Delete($id)
    {
        $data = Admin::where('id', $id)->delete();
        if ($data) {
            Total::json('删除成功');
        } else {
            Total::json('删除失败', -1);
        }
    }
}
