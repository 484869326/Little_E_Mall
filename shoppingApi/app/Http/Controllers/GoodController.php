<?php

namespace App\Http\Controllers;
use App\Model\Category;
use App\Model\Good;
use App\Total;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class GoodController extends Controller {
    //图表展示，分类商品数量
    public function categoryGoodsCount() {
        $counts = Good::select('parentID')
            ->selectRaw('COUNT(*) as count')
            ->fromSub(function ($query) {
                $query->select('parentID AS number')
                    ->from('good')
                    ->join('category', 'good.cid', '=', 'category.cid');
            }, 'subquery')
            ->join('category', 'category.cid', '=', 'subquery.number')
            ->groupBy('subquery.number')
            ->get();
        $categories = Category::where('level', '=', '0')->get(['Cid', 'Cname']);
        foreach ($categories as $category) {
            $category['count'] = 0;
            foreach ($counts as $count) {
                if ($category['Cid'] === $count['parentID']) {
                    $category['count'] = $count['count'];
                }
            }
        }
        $result["data"] = $categories;
        Total::json($result);
    }
    //
    public function getGood(Request $request) {
        $id    = $request->input('id');
        $Cid   = $request->input('Cid');
        $value = $request->input('value');
        if ($request->input('value') != null) {
            $data = Good::where('Goodname', 'like', '%' . $value . '%')->get();
        } elseif ($request->input('id') != null) {
            $data = Good::where('Cid', '=', $id)->get();
        } else {
            $Cid  = Category::where('parentID', $Cid)->get(["Cid"]);
            $data = "";
            foreach ($Cid as $key => $model) {
                $CidList = Category::where('parentID', $model["Cid"])->get(["Cid"]);
                foreach ($CidList as $key1 => $model1) {
                    if ($data == "") {
                        $data = Good::where('Cid', $model1["Cid"])->get();
                    } else {
                        $data = $data->merge(Good::where('Cid', $model1["Cid"])->get());
                    }
                }
            }
        }
        Total::json($data, 0, 'Goodimg');
        // Total::json(200, '获取成功', $data, 'Goodimg');
    }
    public function goodDetail($id) {
        $data              = Good::where('Goodid', '=', $id)->get();
        $data[0]["Swiper"] = explode(",", $data[0]["Swiper"]);
        $data[0]["Detail"] = explode(",", $data[0]["Detail"]);
        $data[0]["Swiper"] = Total::change($data[0]["Swiper"]);
        $data[0]["Detail"] = Total::change($data[0]["Detail"]);
        Total::json($data, 0, 'Goodimg');
        // Total::json(200, '获取成功', $data, 'Goodimg');
    }
    public function getGoodList($page) {
        $offset=($page-1)*10;
        // offset从哪里开始 limit 限制条数
        $result["data"] = Good::offset($offset)->limit(10)->get();
        // 获取总条数
        $result["count"] = Good::count();
        foreach ($result["data"] as $key => $model) {
            $model["Goodimg"] = env('APP_URL') . substr_replace($model["Goodimg"], "", 0, 1);
        }
        Total::json($result);
    }
    //验证规则
    public function validateData(Request $request, $id) {
        $validator = Validator::make($request->all(), [
            'Goodname'  => ['required', 'regex:/^[\x{4e00}-\x{9fa5}a-zA-Z0-9]{1,15}$/u',
                function ($attribute, $value, $fail) use ($request, $id) {
                    //判断重复goodname
                    $exists = Good::where('Goodname', $request->input('Goodname'));
                    if ($id !== null) {
                        $exists->where('Goodid', '!=', $id);
                    }
                    $ifExists = $exists->count();
                    if ($ifExists > 0) {
                        $fail('字段重复');
                    }

                },
            ],
            'Cid'       => ['required', 'numeric', Rule::exists('category', 'Cid')->where('level', 2)],

            'Explain'   => ['required', 'regex:/[^,]+/'],
            'advertise' => 'required',
            //数字隔开
            'price'     => ['required', 'regex:/^\d+(?:,\s*\d+)*$/'],
            //中文 ,, 隔开
            'color'     => ['required', 'regex:/^[\x{4e00}-\x{9fa5}]{1,10}(?:,\s*[\x{4e00}-\x{9fa5}]{1,10})*$/u'],
            //4+64
            'Type'      => ['required', 'regex:/^\d+\+\d+(,\d+\+\d+)*$/'],
            'Goodimg'   => ['required', function ($attribute, $value, $fail) use ($request) {
                if (!preg_match('/\/+/', $value)) {
                    $fail('路径不符合要求');
                }
            }],
            'Swiper'    => ['required', 'array'],
            'Swiper.*'  => ['required', 'string', 'regex:/^\.?\/[\w\/.-]+\.\w+$/'],
            'Detail'    => ['required', 'array'],
            'Detail.*'  => ['required', 'string', 'regex:/^\.?\/[\w\/.-]+\.\w+$/'],
        ]);
        return $validator;
    }
    //更新
    public function Update($id, Request $request) {
        $validator = $this->validateData($request, $id);
        if ($validator->fails()) {
            Total::json('校验失败', -1);
        }
        $Goodname  = $request->input('Goodname');
        $Cid       = $request->input('Cid');
        $Explain   = $request->input('Explain');
        $advertise = $request->input('advertise');
        $price     = $request->input('price');
        $color     = $request->input('color');
        $Type      = $request->input('Type');
        $Goodimg   = $request->input('Goodimg');
        $Swiper    = $request->input('Swiper');
        $Detail    = $request->input('Detail');
        $data      = [
            'Goodname'  => $Goodname,
            'Explain'   => $Explain,
            'Cid'       => $Cid,
            'advertise' => $advertise,
            'price'     => $price,
            'type'      => $Type,
            'color'     => $color,
            'Goodimg'   => $Goodimg,
            'Swiper'    => implode(',', $Swiper),
            'Detail'    => implode(',', $Detail),
        ];
        $result = Good::where('Goodid', $id)->update($data);
        if ($result) {
            Total::json('更新成功');
        } else {
            Total::json('更新失败', -1);
        }
    }
    //增加
    public function Insert(Request $request) {
        $validator = $this->validateData($request, null);
        if ($validator->fails()) {
            Total::json('校验失败', -1);
        }
        $Goodname  = $request->input('Goodname');
        $CName     = $request->input('CName');
        $Cid       = $request->input('Cid');
        $Explain   = $request->input('Explain');
        $advertise = $request->input('advertise');
        $price     = $request->input('price');
        $color     = $request->input('color');
        $Goodimg   = $request->input("Goodimg");
        $Type      = $request->input('Type');
        $Swiper    = $request->input('Swiper');
        $Detail    = $request->input("Detail");
        $data      = [
            'Goodname'  => $Goodname,
            'Explain'   => $Explain,
            'Cid'       => $Cid,
            'advertise' => $advertise,
            'price'     => $price,
            'type'      => $Type,
            'color'     => $color,
            'Goodimg'   => $Goodimg,
            'Swiper'    => implode(',', $Swiper),
            'Detail'    => implode(',', $Detail),
        ];
        $result = Good::insert($data);
        if ($result) {
            Total::json('增加成功');
        } else {
            Total::json('增加失败', -1);
        }
    }

    //查找
    public function likeSelect(Request $request) {
        $page        = $request->input('page');
        $limit       = $request->input('limit');
        $offset      = ($page - 1) * $limit;
        $Goodname    = $request->input('Goodname') ?: "";
        $Cid         = $request->input('Cid') ?: "";
        $price       = $request->input('price') ?: "";
        $color       = $request->input('color') ?: "";
        $betweenTime = $request->input('betweenTime') ?: "";
        $good        = Good::where(function ($query) use ($price, $Goodname, $Cid, $offset, $limit, $betweenTime, $color) {
            if (!empty($price)) {
                $query->where('price', 'like', '%' . $price . '%');
            }
            if (!empty($Goodname)) {
                $query->where('Goodname', 'like', '%' . $Goodname . '%');
            }
            if (!empty($Cid)) {
                $query->whereHas('category', function ($query) use ($Cid) {
                    $query->where('cid', 'like', '%' . $Cid . '%');
                });
            }
            if (!empty($betweenTime)) {
                $query->whereBetween('created_at', $betweenTime);
            }
            if (!empty($color)) {
                $query->where('color', 'like', '%' . $color . '%');
            }
        })
            ->with('category')
            ->tap(function ($query) use (&$data) {
                $data["count"] = $query->count();
            })
            ->offset($offset)
            ->limit($limit)
            ->get();

        foreach ($good as $key => $model) {
            $model["Cname"]   = Category::where('Cid', $model["Cid"])->first()['Cname'];
            $model["Goodimg"] = env('APP_URL') . substr_replace($model["Goodimg"], "", 0, 1);
            // $model["Swiper"] = explode(",", $model["Swiper"]);
            if ($model["Swiper"]) {
                $model["Swiper"] = Total::envImg($model["Swiper"]);
            }
            if ($model["Detail"]) {
                $model["Detail"] = Total::envImg($model["Detail"]);
            }
            // $model["Detail"]=explode(",",$model["Detail"]);
        }
        $data["data"] = $good;
        Total::json($data);
    }
    //删除
    public function Delete($id) {
        $data = Good::where('Goodid', $id)->delete();
        if ($data) {
            Total::json('删除成功');
        } else {
            Total::json('删除失败', -1);
        }
    }

}
