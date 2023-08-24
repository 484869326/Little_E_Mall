<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShoppingTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('shopping', function (Blueprint $table) {
			$table->increments('shoppingid');
			$table->integer('Goodid')->nullable();
			$table->integer('Userid')->nullable();
			$table->string('type')->nullable();
			$table->string('color')->nullable();
			$table->integer('Num')->nullable();
			$table->integer('isChecked')->nullable();
			$table->string('isBuy')->nullable();
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::dropIfExists('shopping');
	}
}
