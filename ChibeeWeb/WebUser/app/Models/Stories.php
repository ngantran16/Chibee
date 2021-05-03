<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stories extends Model
{
    use HasFactory;
   
    public $timestamps = true;//set time to false
    
    
    protected $fillable=[
        'id_type','id_video','id_audio','id_author','id_image','story_name','description','content','status','rating','number_rating'
    ];

    protected $primarykey ='id';
    protected $table ='stories';
    public function type()
    {
        return $this->belongsTo('App\Models\StoryType','id_type','id');
    }
    public function video()
    {
        return $this->hasMany('App\Models\Video','id','id_video');
    }
    public function audio()
    {
        return $this->hasMany('App\Models\Audio','id','id_audio');
       
    }
    public function image()
    {
        return $this->hasMany('App\Models\Image','id_image','id');
       
    }
    public function comment()
    {
        return $this->hasMany('App\Models\Comment','id','id_user');
    }
    public function rating()
    {
        return $this->hasMany('App\Models\Rating','id','id_user');
    }
    public function wishlist()
    {
        return $this->hasMany('App\Models\Wishlist','id','id_user');
    }
    
  
    public function author()
    {
        return $this->belongsTo('App\Models\Author','id_author','id');
    }
    
}
