<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StoryType extends Model
{
    use HasFactory;
   
    public $timestamps = true;//set time to false
    
    
    protected $fillable=[
        'id_story','name','description'
    ];

    protected $primarykey ='id';
    protected $table ='story_type';
    public function story()
    {
        return $this->belongsTo('App\Models\Stories','id_story','id');
    }
    
    
}
