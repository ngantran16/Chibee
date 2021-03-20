<?php

namespace App\Http\Controllers;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function add(Request $id){
        $comment = Comment::create([
            'id_story' => $id->id_story,
            'id_user' => $id->id_user,
            'content' => $id->content
        ]);
        $comment->save();

    }
    public function delete(Request $id){
       return $comment= Comment::where('id',$id->id)->delete();
    }
    public function edit(Request $id){
        return $comment= Comment::find($id->id);
        $comment->content= $id->content;
        $comment->save();
     }
    public function showStoryComment($id){
       return $comment= Comment::where('id_story',$id)->get();
        
    }
    public function showUsersComment($id){
        return $comment= Comment::where('id_user',$id)->get();
     }
}
