<?php

namespace App\Http\Controllers;

use App\Model\Category;
use App\Model\Good;
use App\Total;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class GoodController extends Controller
{
    //图表展示，分类商品数量
    public function categoryGoodsCount()
    {
        $counts = Good::select('parentId')
            ->selectRaw('COUNT(*) as count')
            ->fromSub(function ($query) {
                $query->select('parentId AS number')
                    ->from('good')
                    ->join('category', 'good.cid', '=', 'category.cid');
            }, 'subquery')
            ->join('category', 'category.cid', '=', 'subquery.number')
            ->groupBy('subquery.number')
            ->get();
        $categories = Category::where('level', '=', '0')->get(['cid', 'cName']);
        foreach ($categories as $category) {
            $category['count'] = 0;
            foreach ($counts as $count) {
                if ($category['cid'] === $count['parentId']) {
                    $category['count'] = $count['count'];
                }
            }
        }
        $result["data"] = $categories;
        Total::json($result);
    }
    public function gooddetail(Request $request)
    {
        $goodId=$request->input('goodId');
        $data= Good::where('goodId', '=', $goodId)->first();
        $data["goodImg"] =env('APP_URL') . substr_replace($data["goodImg"], "", 0, 1);
        $data["swiper"] = Total::envImg($data["swiper"]);
        $data["detail"] = Total::envImg($data["detail"]);
        $result['data']=$data;
        Total::json($result);
    }
    public function getGoodList($page)
    {
        $offset=($page-1)*10;
        // offset从哪里开始 limit 限制条数
        $result["data"] = Good::offset($offset)->limit(10)->get();
        // 获取总条数
        $result["count"] = Good::count();
        foreach ($result["data"] as $key => $model) {
            $model["goodImg"] = env('APP_URL') . substr_replace($model["goodImg"], "", 0, 1);
        }
        Total::json($result);
    }
    //验证规则
    public function validateData(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'goodName'  => ['required', 'regex:/^[\x{4e00}-\x{9fa5}a-zA-Z0-9]{1,15}$/u',
                function ($attribute, $value, $fail) use ($request, $id) {
                    //判断重复goodName
                    $exists = Good::where('goodName', $request->input('goodName'));
                    if ($id !== null) {
                        $exists->where('goodId', '!=', $id);
                    }
                    $ifExists = $exists->count();
                    if ($ifExists > 0) {
                        $fail('字段重复');
                    }
                },
            ],
            'cid'       => ['required', 'numeric', Rule::exists('category', 'cid')->where('level', 2)],

            'explain'   => ['required', 'regex:/[^,]+/'],
            'advertise' => 'required',
            //数字隔开
            'price'     => ['required', 'regex:/^\d+(?:,\s*\d+)*$/'],
            //中文 ,, 隔开
            'color'     => ['required', 'regex:/^[\x{4e00}-\x{9fa5}]{1,10}(?:,\s*[\x{4e00}-\x{9fa5}]{1,10})*$/u'],
            //4+64
            'type'      => ['required', 'regex:/^\d+\+\d+(,\d+\+\d+)*$/'],
            'goodImg'   => ['required', function ($attribute, $value, $fail) use ($request) {
                if (!preg_match('/\/+/', $value)) {
                    $fail('路径不符合要求');
                }
            }],
            'swiper'    => ['required', 'array'],
            'swiper.*'  => ['required', 'string', 'regex:/^\.?\/[\w\/.-]+\.\w+$/'],
            'detail'    => ['required', 'array'],
            'detail.*'  => ['required', 'string', 'regex:/^\.?\/[\w\/.-]+\.\w+$/'],
        ]);
        return $validator;
    }
    //更新
    public function Update($id, Request $request)
    {
        $validator = $this->validateData($request, $id);
        if ($validator->fails()) {
            Total::json('校验失败', -1);
        }
        $goodName  = $request->input('goodName');
        $cid       = $request->input('cid');
        $explain   = $request->input('explain');
        $advertise = $request->input('advertise');
        $price     = $request->input('price');
        $color     = $request->input('color');
        $type      = $request->input('type');
        $goodImg   = $request->input('goodImg');
        $swiper    = $request->input('swiper');
        $detail    = $request->input('detail');
        $data      = [
            'goodName'  => $goodName,
            'explain'   => $explain,
            'cid'       => $cid,
            'advertise' => $advertise,
            'price'     => $price,
            'type'      => $type,
            'color'     => $color,
            'goodImg'   => $goodImg,
            'swiper'    => implode(',', $swiper),
            'detail'    => implode(',', $detail),
        ];
        $result = Good::where('goodId', $id)->update($data);
        if ($result) {
            Total::json('更新成功');
        } else {
            Total::json('更新失败', -1);
        }
    }
    //增加
    public function Insert(Request $request)
    {
        $validator = $this->validateData($request, null);
        if ($validator->fails()) {
            Total::json('校验失败', -1);
        }
        $goodName  = $request->input('goodName');
        $cName     = $request->input('cName');
        $cid       = $request->input('cid');
        $explain   = $request->input('explain');
        $advertise = $request->input('advertise');
        $price     = $request->input('price');
        $color     = $request->input('color');
        $goodImg   = $request->input("goodImg");
        $type      = $request->input('type');
        $swiper    = $request->input('swiper');
        $detail    = $request->input("detail");
        $data      = [
            'goodName'  => $goodName,
            'explain'   => $explain,
            'cid'       => $cid,
            'advertise' => $advertise,
            'price'     => $price,
            'type'      => $type,
            'color'     => $color,
            'goodImg'   => $goodImg,
            'swiper'    => implode(',', $swiper),
            'detail'    => implode(',', $detail),
        ];
        $result = Good::insert($data);
        if ($result) {
            Total::json('增加成功');
        } else {
            Total::json('增加失败', -1);
        }
    }

    //查找
    public function likeSelect(Request $request)
    {
        $page        = $request->input('page');
        $limit       = $request->input('limit');
        $offset      = ($page - 1) * $limit;
        $goodName    = $request->input('goodName') ?: "";
        $cid         = $request->input('cid') ?: "";
        $price       = $request->input('price') ?: "";
        $color       = $request->input('color') ?: "";
        $betweenTime = $request->input('betweenTime') ?: "";
        $good        = Good::where(function ($query) use ($price, $goodName, $cid, $offset, $limit, $betweenTime, $color) {
            if (!empty($price)) {
                $query->where('price', 'like', '%' . $price . '%');
            }
            if (!empty($goodName)) {
                $query->where('goodName', 'like', '%' . $goodName . '%');
            }
            if (!empty($cid)) {
                $query->whereHas('category', function ($query) use ($cid) {
                    $query->where('cid', 'like', '%' . $cid . '%');
                });
            }
            if (!empty($betweenTime)) {
                $query->whereBetween('createdAt', $betweenTime);
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
            $model["cName"]   = Category::where('cid', $model["cid"])->first()['cName'];
            $model["goodImg"] = env('APP_URL') . substr_replace($model["goodImg"], "", 0, 1);
            // $model["swiper"] = explode(",", $model["swiper"]);
            if ($model["swiper"]) {
                $model["swiper"] = Total::envImg($model["swiper"]);
            }
            if ($model["detail"]) {
                $model["detail"] = Total::envImg($model["detail"]);
            }
            // $model["detail"]=explode(",",$model["detail"]);
        }
        $data["data"] = $good;
        Total::json($data);
    }
    //删除
    public function Delete($id)
    {
        $data = Good::where('goodId', $id)->delete();
        if ($data) {
            Total::json('删除成功');
        } else {
            Total::json('删除失败', -1);
        }
    }
    //查找
    public function Search(Request $request)
    {
        $page        = $request->input('page');
        $limit       = $request->input('limit');
        $offset      = ($page - 1) * $limit;
        $searchValue    = $request->input('searchValue') ?: "";
        $category=Category::where('cName','=',$searchValue)->first();
        $cid=array_map('intval', explode(',', $category['cid']))?:[];
        if($category&&$category['level']===0){
            $sonCategory=Category::where('parentId','=',$cid[0])->get();
            $cid=[];
            foreach ($sonCategory as $key => $model) {
                $grandson=Category::where('parentId','=',$model['cid'])->get();
                 foreach ($grandson as $key2 => $model2) {
                     array_push($cid, $model2['cid']);
                 }
            }
        }
        $good        = Good::where(function ($query) use ($searchValue,$cid) {
            if (!empty($searchValue)) {
                $query->where('goodName', 'like', '%' . $searchValue . '%');
            }
            if (!empty($cid)) {
                $query->orWhereIn('cid',$cid);
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
            $model["goodImg"] = env('APP_URL') . substr_replace($model["goodImg"], "", 0, 1);
        }
        $data["data"] = $good;
        Total::json($data);
    }
}
