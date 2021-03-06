<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
//users
Route::group(['namespace' => 'App', 'as' => 'api.'], function () {


    Route::post('/signUp', 'Http\Controllers\UsersController@create')->name('Sign Up');
    // Route::get('/login', 'Http\Controllers\UsersController@showLogin')->name('index');

    Route::post('/login', 'Http\Controllers\UsersController@Login')->name('login');
    // Route::get('/stories/{id}', 'Http\Controllers\StoriesController@show')->name('show');
    // Route::put('/', 'PostController@update')->name('update');
    // Route::delete('/stories/{id}', 'Http\Controllers\StoriesController@delete')->name('destroy');
});


//stories
Route::group(['namespace' => 'App', 'as' => 'api.'], function () {
    Route::get('/stories', 'Http\Controllers\StoriesController@storiesList')->name('index');

    Route::post('/stories', 'Http\Controllers\StoriesController@add')->name('store');
    Route::get('/stories/{id}', 'Http\Controllers\StoriesController@show')->name('show');
    // Route::put('/', 'PostController@update')->name('update');
    Route::delete('/stories/{id}', 'Http\Controllers\StoriesController@delete')->name('destroy');
});