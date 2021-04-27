<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Stories;
use App\Models\Author;
use App\Models\Rating;
use App\Models\Audio;
use App\Models\Video;
use App\Models\Comment;
use App\Models\Wishlist;


class StoriesController extends Controller
{
    public function index()
    {
        $stories = Stories::all();
        $output = [];
        foreach ($stories as $s) {

            $author = $s->author()->get();
            $type = $s->type()->get();
            $video = $s->video()->get();
            $audio = $s->audio()->get();
            $data = $s;
            $data['author'] = $author;
            $data['type'] = $type;
            $data['video'] = $video;
            $data['audio'] = $audio;
            array_push($output, $data);
        }
        return $output;
    }

//show all stories list
    public function storiesList()
    {
        $stories = Stories::all();
        $output = [];
        foreach ($stories as $s) {
            $author = $s->author()->get();
            $type = $s->type()->get();
            $video = $s->video()->get();
            $audio = $s->audio()->get();
            $image = $s->image;
            $data = $s;
            $data['author'] = $author;
            $data['type'] = $type;
            $data['video'] = $video;
            $data['audio'] = $audio;
            $data['rating'] = $this->caculatRating($s->id);
            $data['number_rating'] = $this->numberRating($s->id);
            array_push($output, $data);
        }
        return $output;
    }

//caculating rate of a stories
    public function caculatRating($id)
    {
        $stories = Rating::where("id_story", $id)->get();
        $sum = 0;
        for ($i = 0; $i < count($stories); $i++) {
            $sum = $sum + $stories[0]->point;
        }
        if ($sum == 0 || count($stories) == 0) {
            return 0;
        } else {
            return $sum / count($stories);
        }
    }

    public function numberRating($id)
    {
        $stories = Rating::where("id_story", $id)->get();
        return count($stories);
    }

//show a stories
    public function show($id)
    {
        // $stories = Stories::all();
        // return view('home', compact('stories'));
        $stories = Stories::where("id", $id)->first();
        $output = [];


        $author = $stories->author()->get();
        $type = $stories->type()->get();
        $video = $stories->video()->get();
        $audio = $stories->audio()->get();
        $rating=
        $data = $stories;
        $data['author'] = $author;
        $data['type'] = $type;
        $data['video'] = $video;
        $data['audio'] = $audio;
        $data['rating'] = $this->caculatRating($stories->id);
        $data['number_rating'] = $this->numberRating($stories->id);
        array_push($output, $data);
        return $output;

    }

//get stories by type
    public function getStoriesByType(Request $input)
    {
        $input->id;
        $stories = Stories::where('id_type', $input->id)->get();
        if (!is_null($stories)) {
            return $stories;
        } else {
            $data = array(
                'Error' => 'Type dosent exist!'
            );
            return response()->json($data, 400);
        }
    }

//delete story
    public function delete($id)
    {

        $stories = Stories::where("id", $id);

        $video = Video::where("id", $stories->id_video);
        $audio = Audio::where("id", $stories->id_audio);
        $comment = Comment::where("id_story", $id);
        $wishlist = Wishlist::where("id_story", $id);
        $rating = Rating::where("id_story", $id);
        if (!is_null($comment)) {
            $comment->delete();
        }
        if (!is_null($video)) {
            $video->delete();
        }
        if (!is_null($audio)) {
            $audio->delete();
        }
        if (!is_null($rating)) {
            $rating->delete();
        }
        if (!is_null($wishlist)) {
            $wishlist->delete();
        }
        return $stories->delete();


    }

//add a story
    public function add(Request $re)
    {
        // // $stories = Stories::all();
        // // return view('home', compact('stories'));
        // $stories=Stories::where("id",$id)->delete();
        //     return "done!";

        $story = Stories::create([
            'id_author' => $re->author,
            'id_video' => $re->video,
            'id_audio' => $re->audio,
            'id_type' => $re->type,
            'story_name' => $re->name,
            'description' => $re->des,
            'content' => $re->content,
            'status' => $re->status
        ]);
        $story->save();
        return true;

    }

//search
    public function search(string $id)
    {
        $output = Stories::where('story_name', 'like', "%$id%")->get();

        if (!is_null($output)) {
            return $output;
        } else {

        }

    }
}
