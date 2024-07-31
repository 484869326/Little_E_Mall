<?php

use Illuminate\Database\Seeder;

class ShoppingTableSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		$data = [
		];
		DB::table('shopping')->insert($data);
	}
}
