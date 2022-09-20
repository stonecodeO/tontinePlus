<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tontines', function (Blueprint $table) {
            $table->id('id');
            $table->string('name');
            $table->text('description');
            $table->date('createdAt');
            $table->date('startedAt');
            $table->date('endedAt');
            $table->float('cotisation');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tontines');
    }
};
