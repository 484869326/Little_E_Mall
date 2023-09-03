<?php

namespace App\Http\Controllers;
use App\Model\my;
use App\Total;
use Illuminate\Http\Request;

class myController extends Controller {
    public function Login(Request $request) {
        $signature = $request->input('signature');
        $nickName  = $request->input('nickName');
        $gender    = $request->input('gender');
        $avatarUrl = $request->input('avatarUrl');
        $city      = $request->input('city') ? $request->input('city') : "";
        $phone     = $request->input('phone') ? $request->input('phone') : "";
        $result    = My::where('signature', '=', $signature)->first();
        if ($result) {

        } else {
            My::insert([
                'signature' => $signature,
                'nickName'  => $nickName,
                'gender'    => $gender,
                'avatarUrl' => $avatarUrl,
                'city'      => $city,
                'phone'     => $phone,
            ]);
        }
    }
    public function LoginId(Request $request) {
        $signature = $request->input('signature');
        $data      = My::where('signature', '=', $signature)->first();
        Total::json($data);
        // Total::json(200, '获取成功', $data, '');
    }
    public function getSelf(Request $request) {
        $id   = $request->input('dataId');
        $data = My::where('id', $id)->first();
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }
    //更新
    public function Update($id, Request $request) {
        $nickName  = $request->input('nickName');
        $gender    = $request->input('gender');
        $avatarUrl = $request->input('avatarUrl');
        $city      = $request->input('city');
        $phone     = $request->input('phone');
        $Status    = $request->input('Status');
        $data      = My::where('id', '=', $id)->update(
            [
                'nickName'  => $nickName,
                'gender'    => $gender,
                'avatarUrl' => $avatarUrl,
                'city'      => $city,
                'phone'     => $phone,
                'Status'    => $Status,
            ]
        );
        if ($data) {
            Total::json('更新成功');
        } else {
            Total::json('更新失败', -1);
        }
    }
    public function Insert(Request $request) {
        $signature = $request->input('signature');
        $nickName  = $request->input('nickName');
        $gender    = $request->input('gender') === '男' ? 0 : 1;
        $avatarUrl = Total::saveImg($request->file('avatarUrl'), './image/User');
        $city      = $request->input('city') ? $request->input('city') : "";
        $phone     = $request->input('phone') ? $request->input('phone') : "";
        $data      = My::insert(
            [
                'signature' => $signature,
                'nickName'  => $nickName,
                'gender'    => $gender,
                'avatarUrl' => $avatarUrl,
                'city'      => $city,
                'phone'     => $phone,
            ]
        );
    }
    public function likeSelect(Request $request) {
        $page        = $request->input('page');
        $limit       = $request->input('limit');
        $offset      = ($page - 1) * $limit;
        $nickName    = $request->input('nickName') ?: "";
        $gender      = $request->input('gender') ?: "";
        $city        = $request->input('city') ?: "";
        $phone       = $request->input('phone') ?: "";
        $betweenTime = $request->input('betweenTime') ?: "";

        $data["data"] = My::where(function ($query) use ($nickName, $gender, $city, $phone, $betweenTime) {
            if (!empty($nickName)) {
                $query->where('nickName', 'like', '%' . $nickName . '%');
            }
            if (!empty($gender)) {
                $query->where('gender', 'like', '%' . $gender . '%');
            }
            if (!empty($city)) {
                $query->where('city', 'like', '%' . $city . '%');
            }
            if (!empty($phone)) {
                $query->where('phone', 'like', '%' . $phone . '%');
            }
            if (!empty($betweenTime)) {
                $query->whereBetween('created_at', $betweenTime);
            }

        })->tap(function ($query) use (&$data) {
            $data["count"] = $query->count();
        })
            ->offset($offset)
            ->limit($limit)
            ->get();

        foreach ($data["data"] as $key => $model) {
            $img = strpos($model["avatarUrl"], "./image");
            if ($img !== false) {
                $model["avatarUrl"] = env('APP_URL') . substr_replace($model["avatarUrl"], "", 0, 1);
            }
        }

        Total::json($data);
    }

    //删除
    public function Delete($id) {
        $data = My::where('id', $id)->delete();
        if ($data) {
            Total::json('删除成功');
        } else {
            Total::json('删除失败', -1);
        }
    }

}
