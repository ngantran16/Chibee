<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rating;

class RatingController extends Controller
{
    public function add(Request $id){
        $rate = Rating::create([
            'id_story' => $id->id_story,
            'id_user' => $id->id_user,
            'point' => $id->point,
            'title' => $id->title
        ]);
        $rate->save();

    }
    public function delete(Request $id){
       return $rate= Rating::where('id',$id->id)->delete();
    }
    public function edit(Request $id){
        $rate= Rating::find($id->id);
        $rate->content= $id->content;
        $rate->save();
     }
    public function showStoryRate(Request $id){
       return $rate= Rating::where('id_story',$id->id)->get();
        
    }
    public function showUsersRate(Request $id){
        
        return $rate= Rating::where('id_user',$id->id)->get();
         
     }
}
