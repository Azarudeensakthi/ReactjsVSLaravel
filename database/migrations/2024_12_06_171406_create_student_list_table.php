<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('students_details', function (Blueprint $table) {
$table->id();
            $table->string('regId');
            $table->string('name');
            $table->string('pno');
            $table->string('email');
            $table->string('education');
            $table->text('address');
            $table->string('aadharno');
            $table->date('joiningDate');
            $table->string('courses');
            $table->string('fees');
            $table->string('mode');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('students_details');
    }
};
            