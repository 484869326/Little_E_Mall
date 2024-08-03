<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Role;
use App\Models\RoleMenu;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class RoleMenuController extends BaseController
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
    public function getRoleMenu()
    {
        $admin=auth('admin')->user();
        $roleMenus=RoleMenu::with('menu')->where('roleId', '=', $admin['roleId'])->get();
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
        $data=$this->contactParent($firstMenu, $first);
        return $this->response($data);
    }

    public function selectRole()
    {
        $query=Role::paginate();
        $list = $query->items();
        $count=$query->total();;
        $data=['count'=>$count,'list'=>$list];
        return $this->response($data);
    }
    public function likeSelect(Request $request)
    {
        $page = $request->input('page');
        $limit = $request->input('limit');
        $query = Role::with('menus')->paginate($limit);
        $list = $query->items();
        $count=$query->total();
        foreach ($list as $key => &$roleMenu) {
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
            unset($list[$key]['menus']);
        }
        $data=['list'=>$list,'count'=>$count];
        return $this->response($data);
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
                return $this->response(null,'更新成功');
            } else {
                return $this->response(null,'更新失败',400);
            }
        } else {
            return $this->response(null,'更新失败',400);
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
                return $this->response(null,'增加成功');
            } else {
                return $this->response(null,'增加失败',400);
            }
        } else {
            return $this->response(null,'增加失败',400);
        }
    }
    //删除
    public function Delete($id)
    {
        if ($id<4) {
            return $this->response(null,'数据项小于3，不允许删除。如果需要删除，请跟开发者联系',400);
        }
        $hasAdmin=Admin::where('roleId', $id)->first();
        if ($hasAdmin) {
            return $this->response(null,'删除失败',400);
        } else {
            $role = Role::where('id', $id)->delete();
            $rolemenu= RoleMenu::where('roleId', $id)->delete();
            if ($role && $rolemenu) {
                return $this->response(null,'删除成功');
            } else {
                return $this->response(null,'删除失败',400);
            }
        }
    }

    //刷新token
    public function  refresh(){
        dd(JWTAuth::parseToken()->refresh());
    }
}
