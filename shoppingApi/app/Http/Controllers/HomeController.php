<?php

namespace App\Http\Controllers;
use App\Total;

class HomeController extends Controller {
    public function multidata(){
        $data['banner']=array("http://shoppingapi.net:3333/swiper/1.1.png","http://shoppingapi.net:3333/swiper/1.1.1.png","http://shoppingapi.net:3333/swiper/1.1.2.png","http://shoppingapi.net:3333/swiper/1.1.3.png" );
        $result["data"]=$data;
        Total::json($result);
    }
}
