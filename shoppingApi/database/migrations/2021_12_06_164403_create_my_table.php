<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMyTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('my', function (Blueprint $table) {
            $table->increments('id');
            $table->string('signature')->nullable();
            $table->string('nickName')->nullable();
            $table->string('gender')->nullable();
            $table->string('avatarUrl')->nullable();
            $table->string('city')->default("");
            $table->string('phone')->default("");
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
        Schema::dropIfExists('my');
    }
}
