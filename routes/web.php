<?php

use Illuminate\Support\Facades\Route;




use App\Http\Controllers\CourseController;
use App\Http\Controllers\StudentDetailController;

// Wep
Route::get('/api/courses', [CourseController::class, 'index']);

Route::post('/api/students', [StudentDetailController::class, 'store']);

Route::get('/api/students', [StudentDetailController::class, 'index']);

Route::delete('api/students/{regId}', [StudentDetailController::class, 'delete']);



Route::get('/', function () {
    return view('welcome');
});
