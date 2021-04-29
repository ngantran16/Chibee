<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Author;

use App\Models\Rating;
use App\Models\Audio;
use App\Models\Video;
use App\Models\Comment;
use App\Models\Wishlist;
use App\Models\StoryType;
use App\Models\Stories;
use App\Http\Controllers\StoriesController;

class AuthorController extends Controller
{
    public function add(Request $re)
    {
        // // $stories = Stories::all();
        // // return view('home', compact('stories'));
        // $stories=Stories::where("id",$id)->delete();
        //     return "done!";
        $author = Author::create([
            'author_name' => $re->author_name,
            'country' => $re->country
        ]);
        if($author->save()){
            return 'add author done!';
       }else{
           $data = array(
               'Error' => 'Add fail' 
           );
           return response()->json($data, 400);
       }

        
    }

    public function show($id)
    {
        // // $stories = Stories::all();
        // // return view('home', compact('stories'));
        // $stories=Stories::where("id",$id)->delete();
        //     return "done!";
        $author = Author::find($id);
        return $author;
    }

    public function showall()
    {
        $author = Author::all();
        return $author;
    }

    public function edit($id,Request $re)
    {

        $author = Author::find($id);
        $author->author_name = $re->author_name;
        $author->country = $re->country;
        if($author->save()){
             return 'edit author done!';

        }else{
            $data = array(
                'Error' => 'Delete fail' 
            );
            return response()->json($data, 400);
        }
        
    }

   



    public function delete($id)
    {
        $story= Stories::where('id_author',(int)$id)->get();

        foreach ($story as $s){
            $this->deleteS($s->id);
        } 
        $type = Author::where('id', $id)->delete();
        if($type){
            return $type;
        }else{
            $data = array(
                'Error' => 'Delete fail' 
            );
            return response()->json($data, 400);
        }
        
    }
    

    public function deleteS($id)
    {

        $stories = Stories::where("id", $id)->first();
        $video = Video::where("id", $stories->id_video);
        $audio = Audio::where("id", $stories->id_audio);
        $comment = Comment::where("id_story", $id);
        $wishlist = Wishlist::where("id_story", $id);
        $rating = Rating::where("id_story", $id);
        if (!is_null($comment)) {
            $comment->delete();
        }
        if (!is_null($rating)) {
            $rating->delete();
        }
        if (!is_null($wishlist)) {
            $wishlist->delete();
        }
        $stories->delete();
        if (!is_null($video)) {
            $video->delete();
        }
        if (!is_null($audio)) {
            $audio->delete();
        }


    }

}
