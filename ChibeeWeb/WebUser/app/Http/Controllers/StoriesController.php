<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Stories;
use App\Models\Author;



class StoriesController extends Controller
{
    public function storiesList()
    {   
      
        $stories=Stories::all();
        $output=[];
        foreach ($stories as $s) {

            $author= $s->author()->get();
            $type= $s->type()->get();
            $video= $s->video()->get();
            $audio= $s->audio()->get();
            $data = $s;
            $data['author'] =$author;
            $data['type'] =$type;
            $data['video'] =$video;
            $data['audio'] = $audio;
            array_push($output, $data);
        }
       
        
            return $output;
        
    }
    public function show($id)
    {   
        // $stories = Stories::all();
        // return view('home', compact('stories'));
        $stories=Stories::where("id",$id)->first();
        $output=[];
        

            $author= $stories->author()->get();
            $type= $stories->type()->get();
            $video= $stories->video()->get();
            $audio= $stories->audio()->get();
            $data = $stories;
            $data['author'] =$author;
            $data['type'] =$type;
            $data['video'] =$video;
            $data['audio'] = $audio;
            array_push($output, $data);
        
       
        
            return $output;
        
    }
    public function delete($id)
    {   
        // $stories = Stories::all();
        // return view('home', compact('stories'));    
            return $stories=Stories::where("id",$id->id)->delete();
        
    }
    
    
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

        return "saved!";
    }
}
