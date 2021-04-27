<?php

namespace App\Http\Controllers;

use App\Models\WishList;
use Illuminate\Http\Request;

class WishListController extends Controller
{

    public function add(Request $input)
    {   $id=app('App\Http\Controllers\UsersController')->getIdFromToken($input->token);
        $list = WishList::create([
            'id_story' => $input->id_story,
            'id_user' => $id
        ]);
        $list->save();

    }

    public function delete(Request $input)
    {    $id=app('App\Http\Controllers\UsersController')->getIdFromToken($input->token);
         $list = WishList::where('id', $input->id)->first();
         if($id==$list->id_user){
            $list->delete();
        }else{
            $data = array(
                'Error' => 'User does not allow to delete this wishlist!'
            );
            return response()->json($data, 400);
        }
    }


    public function show(Request $input)
    {

        return $list = WishList::where('id_user', $input->id)->get();

    }
    public function showAll()
    {

        return $list = WishList::all();

    }


}
