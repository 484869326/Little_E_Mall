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
			['Goodid' => 1, 'Userid' => 1, 'type' => '0', 'color' => '0', 'Num' => 1, 'isChecked' => '0', 'isBuy' => 'false'],
			['Goodid' => 2, 'Userid' => 1, 'type' => '0', 'color' => '0', 'Num' => 1, 'isChecked' => '0', 'isBuy' => 'false'],
		];
		DB::table('shopping')->insert($data);
	}
}
