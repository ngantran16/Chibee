<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\StoryType;


class TypeController extends Controller
{
    public function profile(Request $request){
        return  [
            'request' => $request,
            'user' => $request->user(),
        ];
    }
    public function show(){
       $type= StoryType::all();
       return $type;
    }

    public function add(Request $input){
        $type= StoryType::create([
    
            'name'=>$input->name,
            'description'=>$input->description
        ]);
        return $type->save();
     }
     public function delete(Request $id){
        $type= StoryType::where('id',$id->id)->delete();
        return $type;
     }
}
