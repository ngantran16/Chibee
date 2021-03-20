<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Audio;

class AudioController extends Controller
{
    public function add(Request $re)
    {   
        // // $stories = Stories::all();
        // // return view('home', compact('stories'));
        // $stories=Stories::where("id",$id)->delete();
        //     return "done!";

       

                $audio = audio::create([
                    'link_audio' => $re->link,
                    'length' => $re->length
                    ]);
                $audio->save();
                return true;
        

    }
    public function show($id)
    {   
      
        $audio = Audio::find($id);
        return $audio;
       

    }
    public function showall()
    {   
        $audio = Audio::all(); 
        return $audio;
    }
    public function edit(Request $id){
         $audio= Audio::find($id->id);
        $audio->link_audio= $id->link;
        $audio->length= $id->length;
        $audio->save();
     }
    public function delete($id){
        $audio= Audio::find($id)->delete();
    }
    
}
