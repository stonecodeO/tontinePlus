<?php

use App\Models\User;
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
        Schema::create('tontineables', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("user_id");
            $table->integer("tontineables_id");
            $table->string("tontineables_type");
            $table->Float("wallet");
            $table->Float("emprunts");
            $table->Float("dettes");

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tontineables');
    }
};
