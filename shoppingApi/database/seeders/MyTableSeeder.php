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
			'nickName' => '吴亦凡',
			'gender' => '0',
			'phone' => '13710411285',
		]];
		DB::table('my')->insert($data);
	}
}
