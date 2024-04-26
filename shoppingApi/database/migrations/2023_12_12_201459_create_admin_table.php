<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('admin', function (Blueprint $table) {
			$table->increments('id');
			$table->string('adminName')->nullable();
			$table->integer('gender')->nullable();
			$table->string('email')->nullable();
			$table->string('address')->nullable();
			$table->string('adminPwd')->nullable();
			$table->string('tel')->nullable();
			$table->integer('status')->nullable();
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
		Schema::dropIfExists('admin');
	}
}
