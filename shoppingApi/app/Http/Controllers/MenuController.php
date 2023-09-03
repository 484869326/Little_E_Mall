<?php

namespace App\Http\Controllers;

use App\Model\Menu;
use App\Total;
use Illuminate\Http\Request;

class MenuController extends Controller {
	public function Insert(Request $request) {
		$text = $request->input('text');
		$icon = $request->input('icon') ?: "";
		$path = $request->input('path') ?: "";
		$level = $request->input('level');
		$parentID = $request->input('parentID') ?: 0;
		$data = [
			'text' => $text,
			'icon' => $icon,
			'path' => $path,
			'level' => $level,
			'parentID' => $parentID,
		];
		$result = Menu::insert($data);
		if ($result) {
			Total::json('增加成功');
		} else {
			Total::json('增加失败', -1);
		}
	}
	public function likeSelect(Request $request) {
		$menu = Menu::where('level', '=', '0')->get();
		foreach ($menu as $key => $children) {
			$parentID = $children["id"];
			$children["children"] = Menu::where('parentID', '=', $parentID)->get();
		}
		$data["data"] = $menu;
		Total::json($data);
	}
	public function Delete($id) {
		$data = Menu::where('id', $id)->delete();
		if ($data) {
			Total::json('删除成功');
		} else {
			Total::json('删除失败', -1);
		}
	}
	public function Update($id, Request $request) {
		$text = $request->input('text');
		$icon = $request->input('icon');
		$path = $request->input('path');
		$level = $request->input('level');
		$parentID = $request->input('parentID');
		if (!$level) {
			$parentID = 0;
			$path = '';
		} else {
			if ($parentID == $id) {
				Total::json('更新失败', -1);
			}
			return;
		}
		$data = [
			'text' => $text,
			'icon' => $icon,
			'path' => $path,
			'level' => $level,
			'parentID' => $parentID,
		];
		$result = Menu::where('id', $id)->update($data);
		if ($result) {
			Total::json('更新成功');
		} else {
			Total::json('更新失败', -1);
		}
	}
}
