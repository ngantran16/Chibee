<?php

namespace App\Http\Controllers;

use App\Models\Stories;

use Illuminate\Http\Request;

class StoriesController extends Controller
{
    public function index()
    {   
        // $stories = Stories::all();
        // return view('home', compact('stories'));
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
}
