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
			$table->increments('Goodid');
			$table->string('Goodname');
			$table->integer('Cid')->nullable();
			$table->string('Explain')->nullable();
			$table->string('advertise')->nullable();
			$table->string('price')->nullable();
			$table->string('Color')->nullable();
			$table->string('Goodimg')->nullable();
			$table->string('Type')->nullable();
			$table->string('Swiper')->nullable();
			$table->string('Detail')->nullable();
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
		Schema::dropIfExists('good');
	}
}
