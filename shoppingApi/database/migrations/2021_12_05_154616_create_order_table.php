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
			$table->increments('orderid');
			$table->integer('Userid')->nullable();
			$table->string('Goodid')->nullable();
			$table->string('Num')->nullable();
            $table->string('type')->nullable();
            $table->string('color')->nullable();
			$table->string('totalPrice')->nullable();
			$table->dateTime('OrderDate')->nullable();
			$table->string('Name')->nullable();
			$table->string('Address')->nullable();
			$table->string('Phone')->nullable();
			$table->string('condition')->nullable();
			$table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
			$table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'));
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
