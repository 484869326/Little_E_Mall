<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use DOMDocument;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MenuController extends BaseController
{
    //验证是不是svg标签
    public function isValidSvg($value)
    {
        $dom = new DOMDocument();
        // 禁用错误报告，避免 DOM 解析错误输出到屏幕
        libxml_use_internal_errors(true);
        // 添加一个根元素，将 SVG 字符串包装为一个完整的 XML 文档
        $svgString = $value;
        // 加载 SVG 字符串到 DOM 文档
        $loaded = $dom->loadXML($svgString);
        // 启用错误报告
        libxml_use_internal_errors(false);
        // 验证 DOM 解析是否成功，且根元素是否为 <svg>
        return $loaded && $dom->documentElement->tagName === 'svg';
    }
    //验证规则
    public function validateData($request, $id)
    {
        $validator = Validator::make($request->all(), [
            'level' => 'required|numeric|in:1,2,3',
            'text' => 'required_if:level,0|max:10',
            'icon' => [
                'required_if:level,1',
                function ($attribute, $value, $fail) use ($request) {
                    if ($request->input('level')===1) {
                        if (!$this->isValidSvg($value)) {
                            $fail('不是svg图像');
                        }
                    }
                },
            ],
            'path' => ['required_if:level,2', function ($attribute, $value, $fail) use ($request) {
                if ($request->input('level')===2) {
                    if (!preg_match('/\/+/', $value)) {
                        $fail('路径不符合要求');
                    }
                }
            }],
            'parentId' => ['required_unless:level,1', function ($attribute, $value, $fail) use ($request, $id) {
                if ($request->input('level')>1) {
                    if (!is_numeric($value)) {
                        $fail('parentId 必须是数字');
                    } elseif ($id == $value) {
                        $fail('父亲ID不能和自身相同');
                    }
                }
            }],
            'permission' => 'required_if:level,3'
        ]);
        return $validator;
    }
    //更新
    public function Update($id, Request $request)
    {
        $validator = $this->validateData($request, $id);
        if ($validator->fails()) {
            return $this->response(null,'校验失败',400);
        }
        $text = $request->input('text');
        $icon = $request->input('icon');
        $level = $request->input('level');
        $path = $request->input('path');
        $parentId = $request->input('parentId');
        $permission=$request->input('permission');
        //分层级再进行验证
        if ($level === 1) {
            $parentId = 0;
        } elseif ($parentId === 0) {
            return $this->response(null,'上级菜单错误',400);
        } else {
            $hasChildren = Menu::where('parentId', '=', $id)->count();
            if ($hasChildren > 0) {
                return $this->response(null,'父节点有子节点',400);
            }
            $hasParentId = Menu::where('id', '=', $parentId)->where('level', '=', $level-1)->count();
            if ($hasParentId === 0) {
                return $this->response(null,'上级菜单不存在',400);
            }
        }

        $data = [
            'text' => $text,
            'icon' => $level===1?$icon:null,
            'path' => $level===3?null:$path,
            'level' => $level,
            'parentId' => $parentId,
            'permission'=>$level===3?$permission:null
        ];
        $result = Menu::where('id', $id)->update($data);
        if ($result) {
            return $this->response(null,'更新成功');
        } else {
            return $this->response(null,'更新失败',400);
        }
    }
    //增加
    public function Insert(Request $request)
    {
        $validator = $this->validateData($request, null);
        if ($validator->fails()) {
            return $this->response(null,'校验失败',400);
        }
        $text = $request->input('text');
        $icon = $request->input('icon');
        $path = $request->input('path');
        $level = $request->input('level');
        $parentId = $request->input('parentId');
        $permission=$request->input('permission');
        //分层级再进行验证
        if ($level === 1) {
            $parentId = 0;
        } elseif ($parentId === 0) {
            return $this->response(null,'上级菜单错误',400);
        } else {
            $icon = null;
        }
         $delete=true;
        if($parentId){
           if($level===3){
               $sonMenu=Menu::where('id',$parentId)->first();
               $grandSonMenu=Menu::where('id',$sonMenu['parentId'])->first();
               $delete=RoleMenu::where('menuId',$grandSonMenu['id'])->delete();
           }else{
               $delete=RoleMenu::where('menuId',$parentId)->delete();
           }
        }
        $data = [
            'text' => $text,
            'icon' => $level===1?$icon:null,
            'path' => $level===3?null:$path,
            'level' => $level,
            'parentId' => $parentId,
            'permission'=>$level===3?$permission:null
        ];
        $result = Menu::insert($data);
        if ($result&&$delete) {
            return $this->response(null,'增加成功');
        } else {
            return $this->response(null,'增加失败',400);
        }
    }
    //查找
    public function likeSelect(Request $request)
    {
        $list = Menu::where('level', '=', '1')->get();
        foreach ($list as $key => $children) {
            $parentId = $children["id"];
            $children["children"] = Menu::where('parentId', '=', $parentId)->get();
            foreach ($children["children"] as $key2 => $grandson) {
                $parentId = $grandson["id"];
                $grandson["children"] = Menu::where('parentId', '=', $parentId)->get();
            }
        }
        $data=['list'=>$list];
        return $this->response($data);
    }
    //删除
    public function Delete($id)
    {
        $sonMenu=Menu::where('parentId', $id)->first();
        if ($sonMenu) {
            return $this->response(null,'无法删除该菜单，因为它具有下级菜单。',400);
        }
        $deletedRows  = Menu::where('id', $id)->delete();
        if ($deletedRows) {
            return $this->response(null,'删除成功');
        } else {
            return $this->response(null,'删除失败',400);
        }
    }
}
