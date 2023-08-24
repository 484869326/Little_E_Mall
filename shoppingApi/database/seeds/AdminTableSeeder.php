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
			['adminName' => 'admin', 'Sex' => '男', 'Email' => '1657447830@qq.com', 'Address' => '广东广州', 'adminPwd' => 'admin', 'Tel' => '13410001000', 'Status' => '1'],
			['adminName' => 'admin', 'Sex' => '男', 'Email' => '1657447830@qq.com', 'Address' => '广东广州', 'adminPwd' => 'admin', 'Tel' => '13410001000', 'Status' => '1'],
			['adminName' => 'admin1', 'Sex' => '男', 'Email' => '1657447830@qq.com', 'Address' => '广东广州', 'adminPwd' => 'admin1', 'Tel' => '13410001000', 'Status' => '1'],
			['adminName' => 'admin2', 'Sex' => '男', 'Email' => '1657447830@qq.com', 'Address' => '广东广州', 'adminPwd' => 'admin2', 'Tel' => '13410001000', 'Status' => '1'],
			['adminName' => 'admin2', 'Sex' => '男', 'Email' => '1657447830@qq.com', 'Address' => '广东广州', 'adminPwd' => 'admin2', 'Tel' => '13410001000', 'Status' => '1'],
			['adminName' => 'admin2', 'Sex' => '男', 'Email' => '1657447830@qq.com', 'Address' => '广东广州', 'adminPwd' => 'admin2', 'Tel' => '13410001000', 'Status' => '1'],
			['adminName' => 'admin2', 'Sex' => '男', 'Email' => '1657447830@qq.com', 'Address' => '广东广州', 'adminPwd' => 'admin2', 'Tel' => '13410001000', 'Status' => '1'],
			['adminName' => 'admin2', 'Sex' => '男', 'Email' => '1657447830@qq.com', 'Address' => '广东广州', 'adminPwd' => 'admin2', 'Tel' => '13410001000', 'Status' => '1'],
		];
		DB::table('admin')->insert($data);
	}
}
