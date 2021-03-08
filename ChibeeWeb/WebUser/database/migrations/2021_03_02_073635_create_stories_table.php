<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stories', function (Blueprint $table) {
            $table->integer('id')->autoIncrement();
            $table->integer('id_video');
            $table->foreign('id_video')->references('id')->on('video');
            $table->integer('id_audio');
            $table->foreign('id_audio')->references('id')->on('audio');
            $table->integer('id_type');
            $table->foreign('id_type')->references('id')->on('story_type');
            $table->integer('id_author');
            $table->foreign('id_author')->references('id')->on('author');
            $table->string('story_name');
            $table->string('description');
            $table->text('content');
            $table->string('status');
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
        Schema::dropIfExists('stories');
    }
}
