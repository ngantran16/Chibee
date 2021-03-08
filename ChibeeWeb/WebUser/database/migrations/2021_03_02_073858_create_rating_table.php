<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRatingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rating', function (Blueprint $table) {
            $table->integer('id')->autoIncrement();
            $table->integer('id_user');
            $table->foreign('id_user')->references('id')->on('users');
            $table->integer('id_story');
            $table->foreign('id_story')->references('id')->on('stories');
            $table->string('title');
            $table->integer('point');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rating');
    }
}
