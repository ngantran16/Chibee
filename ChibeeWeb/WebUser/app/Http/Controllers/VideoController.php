<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Video;

class VideoController extends Controller
{
    public function add(Request $re)
    {
        // // $stories = Stories::all();
        // // return view('home', compact('stories'));
        // $stories=Stories::where("id",$id)->delete();
        //     return "done!";
        $video = Video::create([
            'link_video' => $re->link,
            'length' => $re->length
        ]);
        $video->save();
        return "saved!";
    }

    public function show($id)
    {
        // // $stories = Stories::all();
        // // return view('home', compact('stories'));
        // $stories=Stories::where("id",$id)->delete();
        //     return "done!";
        $video = Video::find($id);

        return $video;
    }

    public function showall()
    {
        $video = Video::all();
        return $video;
    }

    public function edit(Request $id)
    {
        $video = Video::find($id->id);
        $video->link_video = $id->link;
        $video->length = $id->length;
        $video->save();
    }

    public function delete($id)
    {
        $video = Video::find($id)->delete();
    }

}
