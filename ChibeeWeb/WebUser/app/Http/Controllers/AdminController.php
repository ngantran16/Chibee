<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Stories;
use App\Models\Author;
use App\Models\Video;
use App\Models\Audio;
use App\Models\User;
use App\Models\StoryType;
use App\Models\Comment;
use App\Models\Wishlist;


class AdminController extends Controller
{
    // list data from tables

    public function getListUser()
    {
        $user = User::all();
        return $user;
    }

    public function getListAuthor()
    {
        $author = Author::all();
        return $author;
    }

    public function getListStories()
    {
        $stories = Stories::all();
        $output = [];
        foreach ($stories as $s) {
            $author = $s->author()->get();
            $type = $s->type()->get();
            $video = $s->video()->get();
            $audio = $s->audio()->get();
            $data = $s;
            $data['author'] = $author[0]->author_name;
            $data['type'] = $type[0]->name;
            $data['video'] = $video[0]->link_video;
            $data['audio'] = $audio[0]->link_audio;
            array_push($output, $data);
        }
        return $output;
    }

    public function getListTypeStories()
    {
        $type = StoryType::all();
        return $type;
    }

    public function getListComment()
    {
        $comment = Comment::all();
        $output = [];
        foreach ($comment as $comment) {
            $user = $comment->user()->get();
            $story = $comment->story()->get();
            $data = $comment;
            $data['user'] = $user[0]->full_name;
            $data['story'] = $story[0]->story_name;
            array_push($output, $data);
        }
        return $output;
    }

    public function getWishlist()
    {
        $commentt = Wishlist::all();
        return $commentt;
    }



//update profile

    public function updateProfile($id,Request $input)
    {
        $user = User::where("id", $id)->first();
        

        $user->avatar=$input->avatar;
        $user->full_name=$input->full_name;
        $user->phone_number=$input->phone_number;
        $user->email=$input->email;
        $user->save();
     
    }

    // count data to display on dashboard

    public function getCountUser()
    {
        $count_user = User::all()->count();
        return $count_user;
    }

    public function getCountStory()
    {
        $count_story = Stories::all()->count();
        return $count_story;
    }

    public function getCountComment()
    {
        $count_comment = Comment::all()->count();
        return $count_comment;
    }

    public function getCountTypeStories()
    {
        $count_type = StoryType::all()->count();
        return $count_type;
    }

    // Line Chart to display the quantity of stories by month

    public function getLineStoriesChart()
    {
        $story = Stories::select(Stories::raw("TO_CHAR(created_at, 'MON') as month"), Stories::raw('COUNT(id) as sum'))
            ->groupBy('month')->get();
        $storymonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        $armonth=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
        foreach ($story as $story) {          
             for ($i = 0; $i <= 11; $i++) {
                if ($armonth[$i] == $story["month"]) {
                    $storymonth[$i] = $story["sum"];
                }
            }

            // }
        }
        return $storymonth;
    }

    //chart age of user
    public function getLineAgeChart()
    {
        $users = User::all();
        $list = [0, 0, 0];
       
        foreach ($users as $user) {          
             
                if ($user->age<5) {
                    $list[0] = $list[0]+1;
                }elseif($user->age<=10){
                    $list[1] = $list[1]+1;
                }else{
                    $list[2] = $list[2]+1;
                }          
        }
        return $list;
    }

    public function getLineUserChart()
    {
        $story = User::select(User::raw("TO_CHAR(created_at, 'MON') as month"), User::raw('COUNT(id) as sum'))
            ->groupBy('month')->get();
        $storymonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        $armonth=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
        foreach ($story as $story) {

    

           
             for ($i = 0; $i <= 11; $i++) {
                if ($armonth[$i] == $story["month"]) {
                    $storymonth[$i] = $story["sum"];
                }
            }

            // }
        }
        return $storymonth;
    }


    // Pie Chart for favourite stories

    public function storyPieChart()
    {
        $total_quantity = Wishlist::join('stories', Wishlist::raw('id_story'), '=', 'stories.id')
            ->groupBy('id_story', 'stories.story_name')
            ->select('stories.story_name', Wishlist::raw('COUNT(id_story) as total_quantity'))
            ->get();
        return $total_quantity;
    }

    // Add a story

    public function addStory(Request $re)
    {
        $story = new Stories();
        $story->id_author = $re->author;
        $videos = Video::all();
        $check = 0;
        foreach ($videos as $videos) {
            if ($re->video == $videos->link_video) {
                $check = $videos->id;
            }
        }
        if ($check != 0) {
            $story->id_video = $check;
        } else {
            $video = new Video();
            $video->link_video = $re->video;
            $video->length = "";
            $video->save();
            $story->id_video = $video->id;
        }
        $audios = Audio::all();
        $checkAudio = 0;
        foreach ($audios as $audios) {
            if ($re->audio == $audios->link_audio) {
                $checkAudio = $audios->id;
            }
        }
        if ($checkAudio != 0) {
            $story->id_audio = $checkAudio;
        } else {
            $audio = new Audio();
            $audio->link_audio = $re->audio;
            $audio->length = "";
            $audio->save();
            $story->id_audio = $audio->id;
        }
        $story->id_type = $re->type;
        $story->story_name = $re->story_name;
        $story->description = $re->description;
        $story->content = $re->content;
        $story->status = $re->status;
        $story->save();
        return $story;
    }

    // Display a story to update

    public function editStory($id)
    {
        $stories = Stories::find($id);
        $output = [];
        $author = $stories->author()->get();
        $type = $stories->type()->get();
        $video = $stories->video()->get();
        $audio = $stories->audio()->get();
        $data = $stories;
        $data['author'] = $author[0]->author_name;
        $data['type'] = $type[0]->name;
        $data['video'] = $video[0]->link_video;
        $data['audio'] = $audio[0]->link_audio;
        array_push($output, $data);
        return $output;
    }

    // Update a story

    public function updateStory(Request $re, $id)
    {
        $story = Stories::find($id);
        $story->id_author = $re->author;
        $videos = Video::all();
        $check = 0;
        foreach ($videos as $videos) {
            if ($re->video == $videos->link_video) {
                $check = $videos->id;
            }
        }
        if ($check != 0) {
            $story->id_video = $check;
        } else {
            $video = new Video();
            $video->link_video = $re->video;
            $video->length = "";
            $video->save();
            $story->id_video = $video->id;
        }
        $audios = Audio::all();
        $checkAudio = 0;
        foreach ($audios as $audios) {
            if ($re->audio == $audios->link_audio) {
                $checkAudio = $audios->id;
            }
        }
        if ($checkAudio != 0) {
            $story->id_audio = $checkAudio;
        } else {
            $audio = new Audio();
            $audio->link_audio = $re->audio;
            $audio->length = "";
            $audio->save();
            $story->id_audio = $audio->id;
        }
        $story->id_type = $re->type;
        $story->story_name = $re->story_name;
        $story->description = $re->description;
        $story->content = $re->content;
        $story->status = $re->status;
        $story->save();
        return $story;
    }

    // Delete a story

    public function deleteStory($id)
    {
        $story = Stories::find($id);
        $comment = Comment::where('id_story', $id)->delete();
        $wishlist = Wishlist::all();
        for ($i = 0; $i < count($wishlist); $i++) {
            if ($wishlist[$i]->id_story == $id) {
                unset($wishlist[$i]);
            }
        }
        $story->delete();
        return $story;
    }

    // Delete a comment

    public function deleteComment($id)
    {
        $comment = Comment::find($id);
        $comment->delete();
        return "comment deleted";
    }

    // Delete an user

    public function deleteUser($id)
    {
        $user = User::find($id);
        $comment = Comment::where('id_user', $id)->delete();
        $user->delete();
        return "user deleted";
    }


//Login
    public function login(Request $input)
    {
        //get email and password
        $data = [
            'email' => $input->email,
            'password' => $input->password,
        ];
        //verify password and email
        if (Auth::attempt($data)) {
            //if this true return token and set cookie
            $user = User::where('email', $input->email)->firstOrFail();
            if ($user->role == "admin") {
                $token = md5($user->id);
                // create cookie name 'XSRF-TOKEN' with value =$token in on day
                setcookie('XSRF-TOKEN', $token, time() + (86400 * 30), "/");
                return response()->json([
                    'access_token' => $token,
                    'token_type' => 'Bearer',
                    'id' => $user->id
                ]);
            }else{
            $data = array(
                'Error' => 'WARNING ACCESS DENIED!(you are not Admin)'
            );
            return response()->json($data, 400);
        }

        } else {
            $data = array(
                'Error' => 'Some thing wrong'
            );
            return response()->json($data, 400);
        }
    }

// show a user
    public function showOne($id)
    {
        $user = User::where("id", $id)->first();

        if (is_null($user)) {
            return "Error your request null";
            die();
        } else {
            return $user;
        }
    }


}
