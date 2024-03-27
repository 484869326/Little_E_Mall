<?php

use Illuminate\Database\Seeder;

class AdminTableSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        //
        $data = [
            ['adminName' => 'admin', 'gender' => '0', 'email' => '1657447830@qq.com', 'address' => '广东广州', 'adminPwd' => 'admin', 'tel' => '13410001000', 'status' => '1'],
            ['adminName' => 'admin1', 'gender' => '0', 'email' => '1657447831@qq.com', 'address' => '广东广州', 'adminPwd' => 'admin1', 'tel' => '13410001001', 'status' => '1'],
           ];
        DB::table('admin')->insert($data);
    }
}
