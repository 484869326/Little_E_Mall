<?php

use Illuminate\Database\Seeder;

class AdminTableSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        //默认密码都是admin 这是哈希加密的
        $data = [
            ['adminName' => 'admin', 'gender' => '0', 'email' => '1657447830@qq.com', 'address' => '广东广州', 'adminPwd' => '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'tel' => '13410001000', 'status' => '1'],
            ['adminName' => 'admin1', 'gender' => '0', 'email' => '1657447831@qq.com', 'address' => '广东广州', 'adminPwd' => '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'tel' => '13410001001', 'status' => '1'],
           ];
        DB::table('admin')->insert($data);
    }
}
