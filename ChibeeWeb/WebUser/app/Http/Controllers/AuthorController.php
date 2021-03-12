<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Author;

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
        $author->save();
        return "saved!";
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
    public function edit(Request $id){
         $author= Author::find($id->id);
        $author->author_name= $id->author_name;
        $author->country= $id->country;
        $author->save();
     }
    public function delete($id){
        $author= Author::find($id)->delete();
    }
    
}
