<?php

use Illuminate\Database\Seeder;

class OrderTableSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		//
		$data = [
		];
		DB::table('order')->insert($data);
	}
}
