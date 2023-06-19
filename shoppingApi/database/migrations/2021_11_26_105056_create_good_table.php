<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGoodTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('good', function (Blueprint $table) {
          $table->increments('Goodid');
          $table->string('Goodname');
            $table->integer('Cid')->nullable();
            $table->string('Explain')->nullable();
            $table->string('advertise')->nullable();
            $table->string('price')->nullable();
            $table->string('color')->nullable();
          $table->string('Goodimg')->nullable();
          $table->string('Type')->nullable();
          $table->string('Swiper')->nullable();
          $table->string('Detail')->nullable();
          $table->timestamps();
          $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('good');
    }
}
