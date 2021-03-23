<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AudioController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\StoriesController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\WishListController;
use App\Http\Controllers\TypeController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//users
Route::group(['as' => 'api.'], function () {
    Route::post('/signUp', [UsersController::class,'create'])->name('Sign Up');
    Route::post('/login', [UsersController::class,'login'])->name('index');
    Route::get('/user', [UsersController::class,'showall'])->name('show');
    Route::get('/user-pro', [TypeController::class,'profile'])->name('show');
    Route::get('/logout',[UsersController::class,'logout'])->name('logout');
    Route::put('/user/{id}', [UsersController::class,'update'])->name('update');
    Route::delete('/user/{id}', [UsersController::class,'delete'])->name('destroy');
    Route::post('/set-password', [UsersController::class,'setPassword'])->name('destroy');
    Route::post('/check_mail', [UsersController::class,'checkEmail'])->name('mail');
    Route::get('/make_code/{id}', [UsersController::class,'makeCode'])->name('code');
    Route::post('/test', [UsersController::class,'test'])->name('code');
    Route::post('/getuser', [UsersController::class,'getUserId'])->name('code');
});


//stories
Route::group(['as' => 'api.'], function () {
    Route::get('/stories', [StoriesController::class,'storiesList'])->name('showList');
    Route::post('/stories', [StoriesController::class,'add'])->name('add');
    Route::post('/stories/search', [StoriesController::class,'search'])->name('search');
    Route::get('/stories/{id}', [StoriesController::class,'show'])->name('show');
    Route::delete('/stories/{id}', [StoriesController::class,'delete'])->name('destroy');
});
//commment
Route::group(['as' => 'api.'], function () {
    Route::get('/user-comment/{id}', [CommentController::class,'showUsersComment'])->name('show');
    Route::get('/story-comment/{id}', [CommentController::class,'showStoryComment'])->name('show');
    Route::post('/comment', [CommentController::class,'add'])->name('addcomment');
    Route::delete('/comment/{id}', [CommentController::class,'delete'])->name('destroy');
});
//wishlist
Route::group(['as' => 'api.'], function () {
    Route::get('/wishlist/{id}', [WishListController::class,'show'])->name('show');
    Route::post('/wishlist', [WishListController::class,'add'])->name('add');
    Route::delete('/wishlist/{id}', [WishListController::class,'delete'])->name('destroy');
});

//storyType
Route::group(['as' => 'api.'], function () {
    Route::get('/type', [TypeController::class,'show'])->name('show');
    Route::get('/profile', [TypeController::class,'profile'])->name('profile');
    Route::post('/type', [TypeController::class,'add'])->name('add');
    Route::delete('/type/{id}', [TypeController::class,'delete'])->name('destroy');
});
//video
Route::group(['as' => 'api.'], function () {
    Route::get('/video', [VideoController::class,'showall'])->name('show');
    Route::get('/video/{id}', [VideoController::class,'show'])->name('show');
    Route::put('/video', [VideoController::class,'edit'])->name('update');
    Route::post('/video', [VideoController::class,'add'])->name('add');
    Route::delete('/video/{id}', [VideoController::class,'delete'])->name('destroy');
});
//audio
Route::group(['as' => 'api.'], function () {
    Route::get('/audio', [AudioController::class,'showall'])->name('show');
    Route::get('/audio/{id}', [AudioController::class,'show'])->name('show');
    Route::put('/audio', [AudioController::class,'edit'])->name('update');
    Route::post('/audio', [AudioController::class,'add'])->name('add');
    Route::delete('/audio/{id}', [AudioController::class,'delete'])->name('destroy');
});
//author
Route::group(['as' => 'api.'], function () {
    Route::get('/author', [AuthorController::class,'showall'])->name('show');
    Route::get('/author/{id}', [AuthorController::class,'show'])->name('show');
    Route::put('/author', [AuthorController::class,'edit'])->name('update');
    Route::post('/author', [AudioController::class,'add'])->name('add');
    Route::delete('/author/{id}', [AuthorController::class,'delete'])->name('destroy');
});


// api for admin page
Route::get('/admin/account', 'App\Http\Controllers\AdminController@getListAccount');
Route::get('/admin/user', 'App\Http\Controllers\AdminController@getListUser');
Route::get('/admin/story', 'App\Http\Controllers\AdminController@getListStories');
Route::get('/admin/type-story', 'App\Http\Controllers\AdminController@getListTypeStories');
Route::get('/admin/comment', 'App\Http\Controllers\AdminController@getListComment');


Route::get('/admin/count-account', 'App\Http\Controllers\AdminController@getCountAccount');
Route::get('/admin/count-story', 'App\Http\Controllers\AdminController@getCountStory');
Route::get('/admin/count-comment', 'App\Http\Controllers\AdminController@getCountComment');
Route::get('/admin/count-type-story', 'App\Http\Controllers\AdminController@getCountTypeStories');

Route::delete('/admin/deleteUser/{id}', 'App\Http\Controllers\AdminController@deleteUser');
Route::delete('/admin/deleteComment/{id}', 'App\Http\Controllers\AdminController@deleteComment');

Route::get('/admin/story-line-chart', 'App\Http\Controllers\AdminController@getLineStoriesChart');
Route::get('/admin/story-pie-chart', 'App\Http\Controllers\AdminController@storyPieChart');

//.......
Route::post('/admin/add', 'App\Http\Controllers\AdminController@add'); 
Route::get('/admin/update/{id}', 'App\Http\Controllers\AdminController@edit'); 
Route::post('/admin/update/{id}', 'App\Http\Controllers\AdminController@update'); 
Route::delete('/admin/deleteStory/{id}', 'App\Http\Controllers\AdminController@deleteStory');