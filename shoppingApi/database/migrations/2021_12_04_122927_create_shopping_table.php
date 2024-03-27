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
			$table->increments('shoppingId');
			$table->integer('goodId')->nullable();
			$table->integer('userId')->nullable();
			$table->string('type')->nullable();
			$table->string('color')->nullable();
			$table->integer('num')->nullable();
			$table->integer('isChecked')->nullable();
			$table->string('isBuy')->nullable();
			$table->timestamp('createdAt')->default(DB::raw('CURRENT_TIMESTAMP'));
			$table->timestamp('updatedAt')->default(DB::raw('CURRENT_TIMESTAMP'));
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
