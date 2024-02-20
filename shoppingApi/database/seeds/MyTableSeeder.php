<?php

use Illuminate\Database\Seeder;

class MyTableSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		//
		$data = [[
			'signature' => '1',
			'nickName' => '吴亦凡',
			'gender' => '男',
			'city' => '广东广州',
			'phone' => '13710411285',
			'Status' => '1',
		]];
		DB::table('my')->insert($data);
	}
}
