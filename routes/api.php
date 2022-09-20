<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\TontineController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(AuthController::class)->group(function(){
    Route::post('register','register')->name('register');
    Route::post('login','login')->name('login');
    Route::get('login','login')->name('login');

});
Route::middleware(['auth:sanctum', 'role:member'])->group(function(){
    Route::resource('tontines', TontineController::class);
});

Route::middleware(['auth:sanctum', 'role:admin'])->group(function(){
    Route::resource('users', AdminController::class);
});
