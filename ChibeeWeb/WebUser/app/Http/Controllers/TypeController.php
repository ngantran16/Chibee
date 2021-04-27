<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\StoryType;
use App\Models\Stories;
use App\Http\Controllers\StoriesController;
use App\Models\Author;
use App\Models\Rating;
use App\Models\Audio;
use App\Models\Video;
use App\Models\Comment;
use App\Models\Wishlist;


class TypeController extends Controller
{
    public function profile(Request $request)
    {
        return [
            'request' => $request,
            'user' => $request->user(),
        ];
    }

    public function show()
    {
        $type = StoryType::all();
        return $type;
    }


    public function showId($id)
    {
        $type = StoryType::where('id',$id)->get();
        return $type;
    }


    public function edit(Request $input)
    {
        $type = StoryType::find($id);
        $type->name = $input->name;
        $type->description = $input->description;

        if($comment->save()){
            return "done!";
        }else{
            $data = array(
                'Error' => 'Edit fail'
            );
            return response()->json($data, 400);
        }
    }




    public function add(Request $input)
    {
        $type = StoryType::create([
            'name' => $input->name,
            'description' => $input->description
        ]);
        $type->save();
        return "done";
    }

   

    public function delete($id)
    {
        $story= Stories::where('id_type',(int)$id)->get();

        foreach ($story as $s){
            $this->deleteS($s->id);
        } 
        $type = StoryType::where('id', $id)->delete();
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
