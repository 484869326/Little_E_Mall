<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('order', function (Blueprint $table) {
			$table->increments('orderId');
			$table->integer('userId')->nullable();
			$table->string('goodId')->nullable();
			$table->string('num')->nullable();
            $table->string('type')->nullable();
            $table->string('color')->nullable();
			$table->string('totalPrice')->nullable();
			$table->string('name')->nullable();
			$table->string('address')->nullable();
			$table->string('phone')->nullable();
			$table->string('condition')->nullable();
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
		Schema::dropIfExists('order');
	}
}
