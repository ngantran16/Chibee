<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;


use App\Models\Stories;
use App\Models\Author;

use App\Models\User;
use App\Models\StoriesType;

use App\Models\Comment;
use App\Models\Wishlist;


class AdminController extends Controller
{
    // Get list form tables
    // public function getListAccount(){
    //     $account = Account::all();
    // return $account;
    // }    
    public function getListUser(){
        $user = User::all();
        return $user;
    }

    public function getListStories(){
        $stories = Stories::all();
        return $stories;
    } 

    public function getListTypeStories(){
        $type = StoryType::all();  
        return $type;
    } 



    public function getListComment(){
        $comment = Comment::all();
        return $comment;
    }

    public function getWishlist(){
        $commentt = Wishlist::all();
        return $commentt;
    } 
    // count in dashboard
    // public function getCountAccount(){
    //     $count_account= Account::all()->count(); 
    //     return $count_account;
    // } 

    public function getCountStory(){
        $count_story=Stories::all()->count();
        return $count_story;
    } 

    public function getCountComment(){
        $count_comment=Comment::all()->count();
        return $count_comment;
    } 

    public function getCountTypeStories(){
        $count_type=StoryType::all()->count();
        return $count_type;
    } 

    
    public function deleteComment($id)
    {   
        
        $comment = Comment::find($id);
        $comment->delete(); 
        return "comment deleted";
    }

    // function ni chua xong nghe, viet gium di
    public function deleteUser($id)
    {  
        
        $user = User::find($id);
        $comment = Comment::where('id_user',$id)->delete();
        $user->delete(); 
        return "user deleted";
    }

    // Line Chart  


    public function getLineStoriesChart(){
        $story = Stories::select(Stories::raw('MONTH(created_at) as month'),Stories::raw('COUNT(id) as sum'))
        ->groupBy('month')->get(); 
        $storymonth=[0,0,0,0,0,0,0,0,0,0,0,0];
        foreach($story as $story){
        for($i=1;$i<=12;$i++){
          if($i==$story["month"]){
            $storymonth[$i-1]=$story["sum"];
          }
        } 
        }   
        return $storymonth;
    } 
    
    // Pie Chart for favourite stories
    public function storyPieChart(){
        $total_quantity = Wishlist::join('stories', Wishlist::raw('id_story'),'=','stories.id')  
        ->groupBy('id_story','stories.story_name')  
        ->select('stories.story_name',Wishlist::raw('COUNT(id_story) as total_quantity'))
        ->get();
        return $total_quantity;
    }

// add story
public function add(Request $re)
    {   
        echo $re->story_name;
        echo $re->description;
        
        $story =new Stories();
        $story->id=5;
        $story->id_author=1;
        $story->id_video=1;
        $story->id_audio=1;
        $story->id_type=1;
        $story->story_name=$re->story_name;
        $story->description=$re->description;
        $story->content="hahaah";
        $story->status="hahaah";
        $story->save();
        return $story;
        
        $story = Stories::create([
            'id_author' => $re->author,
            'id_video' => $re->video,
            'id_audio' => $re->audio,
            'id_type' => $re->type,
            'story_name' => $re->story_name,
            'description' => $re->description,
            'content' => $re->content,
            'status' => $re->status
        ]);
        $story->save();

        return true;


    } 
// update story
public function edit($id)
    {
        $story =Stories::find($id);
        return $story;
    }
public function update(Request $request, $id)
    {
        $story =Stories::find($id);
        $story->story_name=$request->story_name;
        $story->description=$request->description;
        $story->save();
    return $story;
    }

    public function deleteStory($id)
    {
        $story =Stories::find($id);
        $story->delete();

        return $story;
    }
}
