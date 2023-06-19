<?php

use Illuminate\Database\Seeder;

class OrderTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $data=[
           ['Userid'=>'1','Goodid'=>'19','Num'=>'2','totalPrice'=>'1000','OrderDate'=>date("Y-m-d  H:i:s a "),'Name'=>'吴亦凡','Address'=>'我的地址','Phone'=>'13415001085','condition'=>'购买成功'],
        ];
         DB::table('order') ->insert($data);
    }
}
