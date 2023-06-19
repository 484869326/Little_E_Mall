<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order', function (Blueprint $table) {
           $table->increments('orderid');
           $table->integer('Userid')->nullable();
           $table->string('Goodid')->nullable();
           $table->string('Num')->nullable();
           $table->string('totalPrice')->nullable();
           $table->dateTime('OrderDate')->nullable();
           $table->string('Name')->nullable();
           $table->string('Address')->nullable();
           $table->string('Phone')->nullable();
           $table->string('condition')->nullable();
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
        Schema::dropIfExists('order');
    }
}
