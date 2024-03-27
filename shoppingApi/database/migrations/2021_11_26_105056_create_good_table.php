<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGoodTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('good', function (Blueprint $table) {
			$table->increments('goodId');
			$table->string('goodName');
			$table->integer('cid')->nullable();
			$table->string('explain')->nullable();
			$table->string('advertise')->nullable();
			$table->string('price')->nullable();
			$table->string('color')->nullable();
			$table->string('goodImg')->nullable();
			$table->string('type')->nullable();
			$table->string('swiper')->nullable();
			$table->string('detail')->nullable();
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
		Schema::dropIfExists('good');
	}
}
