<?php

namespace App\Http\Controllers;

use App\Model\Category;
use App\Total;

class HomeController extends Controller
{
    public function multidata()
    {
        $data['banner']=array("http://shoppingapi.net:3333/swiper/1.png","http://shoppingapi.net:3333/swiper/2.png","http://shoppingapi.net:3333/swiper/3.png","http://shoppingapi.net:3333/swiper/4.png" );
        $data['recommend'] = Category::where('level', '=', '0')->orderByRaw('RAND()')->take(10)->get();
        $result["data"]=$data;
        Total::json($result);
    }
}
