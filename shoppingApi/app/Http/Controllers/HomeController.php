<?php

namespace App\Http\Controllers;

use App\Models\Category;

class HomeController extends BaseController
{
    public function multidata()
    {
        $banner=array("/image/swiper/1.jpg","/image/swiper/2.jpg","/image/swiper/3.jpg","/image/swiper/4.jpg" );
        foreach($banner as $key=>$model){
            $banner[$key]=env('APP_URL').$model;
        }
        $recommend = Category::where('level', '=', '0')->orderByRaw('RAND()')->take(10)->get();
        foreach ($recommend as  $key =>$model) {
            $model['cImg']=env('APP_URL') . substr_replace($model["cImg"], "", 0, 1);
        }
        $data['recommend'] =$recommend;
        $data['banner']=$banner;
        return $this->response($data);
    }
    public function mySwiper()
    {
        $data=array("/image/swiper/my1.png","/image/swiper/my2.png","/image/swiper/my3.png","/image/swiper/my4.png");
        foreach($data as $key=>$model){
            $data[$key]=env('APP_URL').$model;
        }
        return $this->response($data);
    }
}
