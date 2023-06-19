<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('my', function (Blueprint $table) {
            $table->increments('id');
            $table->string('signature')->nullable();
            $table->string('nickName')->nullable();
            $table->integer('gender')->nullable();
            $table->string('avatarUrl')->nullable();
            $table->string('city')->default("");
            $table->string('phone')->default("");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('my');
    }
}
