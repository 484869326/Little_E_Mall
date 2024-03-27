<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMenuTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('menu', function (Blueprint $table) {
            $table->increments('id');
            $table->string('text', 50)->nullable();
            $table->string('icon', 2000)->nullable();
            $table->string('path', 50)->nullable();
            $table->integer('parentId')->nullable()->default(0);
            $table->integer('level')->nullable();
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
        Schema::dropIfExists('menu');
    }
}
