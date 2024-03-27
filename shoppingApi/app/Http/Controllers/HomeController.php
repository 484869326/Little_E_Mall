<?php

namespace App\Http\Controllers;

use App\Model\Category;
use App\Total;

class HomeController extends Controller
{
    public function multidata()
    {
        $banner=array("/swiper/1.jpg","/swiper/2.jpg","/swiper/3.jpg","/swiper/4.jpg" );
        foreach($banner as $key=>$model){
            $banner[$key]=env('APP_URL').$model;
        }
        $recommend = Category::where('level', '=', '0')->orderByRaw('RAND()')->take(10)->get();
        foreach ($recommend as  $key =>$model) {
            $model['cImg']=env('APP_URL') . substr_replace($model["cImg"], "", 0, 1);
        }
        $data['recommend'] =$recommend;
        $data['banner']=$banner;
        $result["data"]=$data;
        Total::json($result);
    }
    public function mySwiper()
    {
        $data=array("/swiper/my1.png","/swiper/my2.png","/swiper/my3.png","/swiper/my4.png");
        foreach($data as $key=>$model){
            $data[$key]=env('APP_URL').$model;
        }
        $result["data"]=$data;
        Total::json($result);
    }
}
