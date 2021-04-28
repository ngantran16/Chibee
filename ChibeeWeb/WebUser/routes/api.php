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
use App\Http\Controllers\AdminController;
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//users
Route::group(['as' => 'api.'], function () {
    Route::post('/signUp', [UsersController::class,'create'])->name('Sign Up');
    Route::post('/login', [UsersController::class,'login'])->name('index');
    Route::get('/user', [UsersController::class,'show'])->name('show');
    Route::get('/user/{id}', [UsersController::class,'showOne'])->name('show');
    Route::get('/user-pro', [TypeController::class,'profile'])->name('show');
    Route::get('/logout',[UsersController::class,'logout'])->name('logout');
    Route::put('/user', [UsersController::class,'update'])->name('update');
    Route::delete('/user/{id}', [UsersController::class,'delete'])->name('destroy');
    Route::post('/set-password', [UsersController::class,'setPassword'])->name('destroy');
    Route::post('/check_mail', [UsersController::class,'checkEmails'])->name('mail');
    Route::get('/make_code/{id}', [UsersController::class,'makeCode'])->name('code');
    Route::post('/test', [UsersController::class,'checkEmails'])->name('code');
    Route::post('/checkcode', [UsersController::class,'checkCode'])->name('code');
    Route::post('/getuser', [UsersController::class,'getUserId'])->name('code');
    

});


//stories
Route::group(['as' => 'api.'], function () {
    Route::get('/stories', [StoriesController::class,'storiesList'])->name('showList');
    Route::post('/stories', [StoriesController::class,'add'])->name('add');
    Route::get('/stories/search/{id}', [StoriesController::class,'search'])->name('search');
    Route::get('/stories/{id}', [StoriesController::class,'show'])->name('show');
    Route::delete('/stories/{id}', [StoriesController::class,'delete'])->name('destroy');
    Route::post('/getStoriesByType', [StoriesController::class,'getStoriesByType'])->name('code');
});
//commment
Route::group(['as' => 'api.'], function () {
    Route::get('/allcomment', [CommentController::class,'showAllComment'])->name('show');
    Route::get('/user-comment/{id}', [CommentController::class,'showUsersComment'])->name('show');
    Route::get('/story-comment/{id}', [CommentController::class,'showStoryComment'])->name('show');
    Route::post('/comment', [CommentController::class,'add'])->name('addcomment');
    Route::put('/comment', [CommentController::class,'edit'])->name('edit');
    Route::delete('/comment/{id}', [CommentController::class,'delete'])->name('destroy');
});
//wishlist
Route::group(['as' => 'api.'], function () {
    Route::get('/wishlist', [WishListController::class,'showAll'])->name('show');
    Route::get('/wishlist/{id}', [WishListController::class,'show'])->name('show');
    Route::post('/wishlist', [WishListController::class,'add'])->name('add');
    Route::delete('/wishlist/{id}', [WishListController::class,'delete'])->name('destroy');
});

//storyType
Route::group(['as' => 'api.'], function () {
    Route::get('/edit_type/{id}', [TypeController::class,'showId'])->name('show');
    Route::get('/edit_type', [TypeController::class,'show'])->name('show');
    Route::get('/profile', [TypeController::class,'profile'])->name('profile');
    Route::post('/edit_type', [TypeController::class,'add'])->name('add');
    Route::put('/edit_type/{id}',[TypeController::class,'edit'])->name('edit');
    Route::delete('/edit_type/{id}', [TypeController::class,'delete'])->name('destroy');


    Route::get('/type/{id}', [TypeController::class,'showId'])->name('show');
    Route::get('/type', [TypeController::class,'show'])->name('show');
    Route::get('/profile', [TypeController::class,'profile'])->name('profile');
    Route::post('/type', [TypeController::class,'add'])->name('add');
    Route::put('/type/{id}',[TypeController::class,'edit'])->name('edit');
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
    Route::put('/author/{id}', [AuthorController::class,'edit'])->name('update');
    Route::post('/author', [AuthorController::class,'add'])->name('add');
    Route::delete('/author/{id}', [AuthorController::class,'delete'])->name('destroy');
});


// api for admin page
Route::group(['as' => 'api.'], function () {
    Route::get('/admin/user',  [AdminController::class,'getListUser']);
    Route::get('/admin/user/{id}',  [AdminController::class,'showOne']);
    Route::get('/admin/story',  [AdminController::class,'getListStories']);
    Route::get('/admin/type-story',  [AdminController::class,'getListTypeStories']);
    Route::get('/admin/comment',  [AdminController::class,'getListComment']);
    Route::get('/admin/author',  [AdminController::class,'getListAuthor']);
    Route::get('/admin/count-user',  [AdminController::class,'getCountUser']);
    Route::get('/admin/count-story',  [AdminController::class,'getCountStory']);
    Route::get('/admin/count-comment',  [AdminController::class,'getCountComment']);
    Route::get('/admin/count-type-story',  [AdminController::class,'getCountTypeStories']);
    Route::delete('/admin/deleteUser/{id}',  [AdminController::class,'deleteUser']);
    Route::delete('/admin/deleteComment/{id}',  [AdminController::class,'deleteComment']);
    Route::get('/admin/story-line-chart',  [AdminController::class,'getLineStoriesChart']);
    Route::get('/admin/user-line-chart',  [AdminController::class,'getLineUserChart']);
    Route::get('/admin/story-pie-chart',  [AdminController::class,'storyPieChart']);
    Route::post('/admin/add',  [AdminController::class,'addStory']);
    Route::post('/admin/admin/updateProfile/{id}',  [AdminController::class,'updateProfile']);
    Route::get('/admin/update/{id}',  [AdminController::class,'editStory']);
    Route::put('/admin/update/{id}',  [AdminController::class,'updateStory']);
    Route::delete('/admin/deleteStory/{id}',  [AdminController::class,'deleteStory']);
    Route::post('/admin/login',  [AdminController::class,'login']);
    Route::get('/admin/age-line-chart',  [AdminController::class,'getLineAgeChart']);
});

