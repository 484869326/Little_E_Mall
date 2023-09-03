<?php
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
	/**
	 * Seed the application's database.
	 *
	 * @return void
	 */
	public function run() {
		// $this->call(UsersTableSeeder::class);
		$this->call(AdminTableSeeder::class);
		$this->call(CategoryTableSeeder::class);
		$this->call(GoodTableSeeder::class);
		$this->call(MenuTableSeeder::class);
		$this->call(MyTableSeeder::class);
		$this->call(OrderTableSeeder::class);
		$this->call(ShoppingTableSeeder::class);
	}
}
