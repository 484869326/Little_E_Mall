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
            $table->string('nickName')->nullable();
            $table->integer('gender')->nullable();
            $table->string('avatarUrl')->nullable();
            $table->string('city')->default("");
            $table->string('defaultId')->default("");
            $table->string('phone')->default("");
            $table->string('password')->default("");
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
        Schema::dropIfExists('my');
    }
}
