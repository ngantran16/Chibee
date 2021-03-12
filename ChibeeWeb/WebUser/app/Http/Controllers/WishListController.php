<?php

namespace App\Http\Controllers;
use App\Models\WishList;
use Illuminate\Http\Request;

class WishListController extends Controller
{
  
    public function add(Request $id){
        $list = WishList::create([
            'id_story' => $id->id_story,
            'id_user' => $id->id_user
        ]);
        $list->save();

    }
    public function delete(Request $id){
       return $list= WishList::where('id',$id->id)->delete();
    }
    
    
    public function show(Request $id){
        
        return $list= WishList::where('id_user',$id->id)->get();
         
     }


}
