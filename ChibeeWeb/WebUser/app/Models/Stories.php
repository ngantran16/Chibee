<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stories extends Model
{
    use HasFactory;
   
    public $timestamps = true;//set time to false
    
    
    protected $fillable=[
        'id_type','id_video','id_audio','id_author','story_name','description','content','status'
    ];

    protected $primarykey ='id';
    protected $table ='stories';
    public function type()
    {
        return $this->belongsTo('App\Models\StoryType','id_type','id');
    }
    public function video()
    {
        return $this->belongsTo('App\Models\Video','id_video','id');
    }
    public function audio()
    {
        return $this->belongsTo('App\Models\Audio','id_audio','id');
       
    }
  
    public function author()
    {
        return $this->belongsTo('App\Models\Author','id_author','id');
    }
    
}
