<?php

namespace App\Http\Controllers;

use App\Model\Menu;
use App\Total;
use Illuminate\Http\Request;

class MenuController extends Controller {
	public function likeSelect(Request $request) {
		$menu = Menu::whereNull('parent_id')->get();
		foreach ($menu as $key => $children) {
			$parentID = $children["id"];
			$children["children"] = Menu::where('parent_id', '=', $parentID)->get();
		}
		$data["data"] = $menu;
		Total::json($data);
	}
}
