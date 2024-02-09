<?php

namespace App\Http\Controllers;

use App\Model\Category;
use App\Total;

class HomeController extends Controller
{
    public function multidata()
    {
        $data['banner']=array("http://192.168.31.83:3333/swiper/1.jpg","http://192.168.31.83:3333/swiper/2.jpg","http://192.168.31.83:3333/swiper/3.jpg","http://192.168.31.83:3333/swiper/4.jpg" );
        $recommend = Category::where('level', '=', '0')->orderByRaw('RAND()')->take(10)->get();
        foreach ($recommend as  $key =>$model) {
            $model['Cimg']=env('APP_URL') . substr_replace($model["Cimg"], "", 0, 1);
        }
        $data['recommend'] =$recommend;
        $result["data"]=$data;
        Total::json($result);
    }
    public function mySwiper()
    {
        $data=array("http://192.168.31.83:3333/swiper/my1.png","http://192.168.31.83:3333/swiper/my2.png","http://192.168.31.83:3333/swiper/my3.png","http://192.168.31.83:3333/swiper/my4.png");
        $result["data"]=$data;
        Total::json($result);
    }
}
