<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoryTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('category', function (Blueprint $table) {
			$table->increments('cid');
			$table->string('cName');
			$table->integer('parentId')->nullable();
			$table->integer('level')->nullable();
			$table->string('cImg')->nullable();
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
		Schema::dropIfExists('category');
	}
}
