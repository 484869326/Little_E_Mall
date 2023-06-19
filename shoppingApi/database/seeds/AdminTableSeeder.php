<?php

use Illuminate\Database\Seeder;

class AdminTableSeeder extends Seeder
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
            ['adminName'=>'admin','Sex'=>'男','Email'=>'1657447830@qq.com','Address'=>'广东汕头','adminPwd'=>'admin','Tel'=>'13415001085']
        ];
        DB::table('admin') ->insert($data);
    }
}
