<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function add(Request $input)
    {   $id=app('App\Http\Controllers\UsersController')->getIdFromToken($input->token);
        $comment = Comment::create([
            'id_story' => $input->id_story,
            'id_user' => $id,
            'content' => $input->content
        ]);
        $comment->save();
        
    }
    

    public function delete(Request $input, $id)
    {   $id_user=app('App\Http\Controllers\UsersController')->getIdFromToken($input->token);
         $comment = Comment::where('id', $id)->first();
         if($id_user==$comment->id_user){
                $comment->delete();
         }else{
            $data = array(
                'Error' => 'User does not allow to edit this comment!'
            );
            return response()->json($data, 400);
         }
    }

    public function edit(Request $input)
    {   
        $id=app('App\Http\Controllers\UsersController')->getIdFromToken($input->token);

        $comment = Comment::find($input->id_comment);
        if($id==$comment->id_user){
            
            $comment->content = $input->content;
            $comment->save();
            return "edit done!";
        }else{
            $data = array(
                'Error' => 'User does not allow to edit this comment!'
            );
            return response()->json($data, 400);
        }
      
    }



    //show all story comment
    public function showStoryComment($id)
    {
        return $comment = Comment::where('id_story', $id)->get();
    }



    //
    public function showAllComment()
    {
        $comment = Comment::all();
        $output = [];
       

        foreach ($comment as $s) {
            $story = $s->story()->get();
            // echo var_dump($story);

            $user = $s->user()->get();
            $data=$s;
            // echo var_dump($user);
            $data['story'] = $story;
            $data['user'] = $user;
            array_push($output, $data);
        }
        return $output;
    }



    public function showUsersComment($id)
    {
        return $comment = Comment::where('id_user', $id)->get();
    }
}
