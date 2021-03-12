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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//users
Route::group(['namespace' => 'App', 'as' => 'api.'], function () {


    Route::post('/signUp', 'Http\Controllers\UsersController@create')->name('Sign Up');
    // Route::get('/login', 'Http\Controllers\UsersController@showLogin')->name('index');

    Route::get('/user', 'Http\Controllers\UsersController@show')->name('login');
    Route::get('/user-pro', 'Http\Controllers\TypeController@profile')->name('show');
    Route::put('/user/{id}', 'Http\Controllers\UsersController@update')->name('update');
    Route::delete('/user/{id}', 'Http\Controllers\UsersController@delete')->name('destroy');
});


//stories
Route::group(['namespace' => 'App', 'as' => 'api.'], function () {
    Route::get('/stories', 'Http\Controllers\StoriesController@storiesList')->name('showList');
    Route::post('/stories', 'Http\Controllers\StoriesController@add')->name('add');
    Route::get('/stories/{id}', 'Http\Controllers\StoriesController@show')->name('show');
    Route::delete('/stories/{id}', 'Http\Controllers\StoriesController@delete')->name('destroy');
});
//commment
Route::group(['namespace' => 'App', 'as' => 'api.'], function () {
    Route::get('/user-comment/{id}', 'Http\Controllers\CommentController@showUsersComment')->name('show');
    Route::get('/story-comment/{id}', 'Http\Controllers\CommentController@showStoryComment')->name('show');
    Route::post('/comment', 'Http\Controllers\CommentController@add')->name('addcomment');
    Route::delete('/comment/{id}', 'Http\Controllers\CommentController@delete')->name('destroy');
});
//wishlist
Route::group(['namespace' => 'App', 'as' => 'api.'], function () {
    Route::get('/wishlist/{id}', 'Http\Controllers\WishListController@show')->name('show');
    Route::post('/wishlist', 'Http\Controllers\WishListController@add')->name('add');
    // Route::get('/story-comment/{id}', 'Http\Controllers\CommentController@show')->name('show');
    Route::delete('/wishlist/{id}', 'Http\Controllers\WishListController@delete')->name('destroy');
});

//storyType
Route::group(['namespace' => 'App\Http\Controllers', 'as' => 'api.'], function () {
    Route::get('/type', 'TypeController@show')->name('show');
    Route::get('/profile', 'TypeController@profile')->name('profile');
    Route::post('/type', 'TypeController@add')->name('add');
    Route::delete('/type/{id}', 'TypeController@delete')->name('destroy');
});
//video
Route::group(['namespace' => 'App\Http\Controllers', 'as' => 'api.'], function () {
    Route::get('/video', 'VideoController@showall')->name('show');
    Route::get('/video/{id}', 'VideoController@show')->name('show');
    Route::put('/video', 'VideoController@edit')->name('update');
    Route::post('/video', 'VideoController@add')->name('add');
    Route::delete('/video/{id}', 'VideoController@delete')->name('destroy');
});
//audio
Route::group(['namespace' => 'App\Http\Controllers', 'as' => 'api.'], function () {
    Route::get('/audio', 'AudioController@showall')->name('show');
    Route::get('/audio/{id}', 'AudioController@show')->name('show');
    Route::put('/audio', 'AudioController@edit')->name('update');
    Route::post('/audio', 'AudioController@add')->name('add');
    Route::delete('/audio/{id}', 'AudioController@delete')->name('destroy');
});
//author
Route::group(['namespace' => 'App\Http\Controllers', 'as' => 'api.'], function () {
    Route::get('/author', 'AuthorController@showall')->name('show');
    Route::get('/author/{id}', 'AuthorController@show')->name('show');
    Route::put('/author', 'AuthorController@edit')->name('update');
    Route::post('/author', 'AudioController@add')->name('add');
    Route::delete('/author/{id}', 'AuthorController@delete')->name('destroy');
});