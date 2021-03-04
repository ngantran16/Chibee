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





Route::group(['namespace' => 'App', 'as' => 'api.'], function () {
    Route::get('/ip', 'Http\Controllers\StoriesController@index')->name('index');
    // Route::post('/', 'PostController@store')->name('store');
    // Route::get('/{id}', 'PostController@show')->name('show');
    // Route::put('/', 'PostController@update')->name('update');
    // Route::delete('/{id}', 'PostController@destroy')->name('destroy');
});