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
			$table->string('Sex')->nullable();
			$table->string('Email')->nullable();
			$table->string('Address')->nullable();
			$table->string('adminPwd')->nullable();
			$table->string('Tel')->nullable();
			$table->integer('Status')->nullable();
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
		Schema::dropIfExists('admin');
	}
}
