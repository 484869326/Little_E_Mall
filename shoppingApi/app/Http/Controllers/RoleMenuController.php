<?php

namespace App\Http\Controllers;

use App\Model\RoleMenu;
use App\Model\Role;
use App\Total;
use Illuminate\Http\Request;

class RoleMenuController extends Controller
{
    public function contactParent($one, $two)
    {
        foreach ($one as $key1 => &$parent) {
            $parent = json_decode($parent, true);
            foreach ($two as $key2 => $children) {
                if ($children['parentId'] === $parent['id']) {
                    $parent['children'][] = $children;
                }
            }
        }
        return $one;
    }
    public function getRoleMenu(Request $request)
    {
        $roleId = $request->input('roleId');
        $roleMenus=RoleMenu::with('menu')->where('roleId', '=', $roleId)->get();
        $menu=$roleMenus->pluck('menu')->sortBy('id');
        $firstMenu=[];
        $secondMenu=[];
        $thirdMenu=[];
        foreach ($menu as $key => $children) {
            if ($children['level']===1) {
                array_push($firstMenu, $children);
            } elseif ($children['level']===2) {
                array_push($secondMenu, $children);
            } else {
                array_push($thirdMenu, $children);
            }
        }
        $first=$this->contactParent($secondMenu, $thirdMenu);
        $data['data']=$this->contactParent($firstMenu, $first);
        Total::json($data);
    }

    public function selectRole()
    {
        $data['data']=Role::get();
        Total::json($data);
    }
    public function likeSelect(Request $request)
    {
        $page = $request->input('page');
        $limit = $request->input('limit');
        $offset = ($page - 1) * $limit;
        $roleMenus = Role::with('menus')->tap(function ($query) use (&$result) {
            $result["count"] = $query->count();
        })
            ->offset($offset)
            ->limit($limit)
            ->get();
        foreach ($roleMenus as $key => &$roleMenu) {
            $menus=&$roleMenu['menus'];
            $firstMenu=[];
            $secondMenu=[];
            $thirdMenu=[];
            foreach ($menus as $key2 => $menu) {
                if ($menu['level']===1) {
                    array_push($firstMenu, $menu);
                } elseif ($menu['level']===2) {
                    array_push($secondMenu, $menu);
                } else {
                    array_push($thirdMenu, $menu);
                }
            }
            $first=$this->contactParent($secondMenu, $thirdMenu);
            $roleMenu['rolemenus']=$this->contactParent($firstMenu, $first);
            unset($roleMenus[$key]['menus']);
        }
        $data['data']=$roleMenus;
        Total::json($data);
    }
    //更新
    public function Update($id, Request $request)
    {
        $name = $request->input('name');
        $intro = $request->input('intro');
        $menuIds = $request->input('menuIds');
        if ($menuIds) {
            $data = Role::where('id', '=', $id)->update(
                [
                    'name' => $name,
                    'intro' => $intro
                ]
            );
            $delete=RoleMenu::where('roleId', '=', $id)->delete();
            foreach ($menuIds as $menuId) {
                RoleMenu::create([
                    'roleId' => $id,
                    'menuId' => $menuId
                ]);
            }
            if ($data&&$delete) {
                Total::json('更新成功');
            } else {
                Total::json('更新失败', -1);
            }
        } else {
            Total::json('更新失败', -1);
        }
    }
    public function Insert(Request $request)
    {
        $name = $request->input('name');
        $intro = $request->input('intro');
        $menuIds = $request->input('menuIds');
        if ($menuIds) {
            $roleId = Role::insertGetId(
                [
                    'name' => $name,
                    'intro' => $intro,
                ]
            );
            foreach ($menuIds as $menuId) {
                RoleMenu::create([
                    'roleId' => $roleId,
                    'menuId' => $menuId
                ]);
            }
            if ($roleId) {
                Total::json('增加成功');
            } else {
                Total::json('增加失败', -1);
            }
        } else {
            Total::json('增加失败', -1);
        }
    }
    //删除
    public function Delete($id)
    {
        if ($id<3) {
            Total::json('数据项小于3，不允许删除。如果需要删除，请跟开发者联系');
            return;
        }
        $role = Role::where('id', $id)->delete();
        $rolemenu= RoleMenu::where('roleId', $id)->delete();
        if ($role && $rolemenu) {
            Total::json('删除成功');
        } else {
            Total::json('删除失败', -1);
        }
    }
}
