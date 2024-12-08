<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\StudentDetailController;

// Define the API route
Route::get('/courses', [CourseController::class, 'index']);



    Route::get('/students', [StudentDetailController::class, 'index']);
    Route::post('/students', [StudentDetailController::class, 'store']);


    Route::delete('/students/{regId}', [StudentDetailController::class, 'delete']);



Route::get('/test', function() {
    return 'Test route works!';
});
