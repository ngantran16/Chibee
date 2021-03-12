<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
   
    public $timestamps = false;//set time to false
    
    
    protected $fillable=[
        'id_user','id_story','content'
    ];

    protected $primarykey ='id';
    protected $table ='comment';
    public function story()
    {
        return $this->belongsTo('App\Models\Stories','id_story','id');
    }
    public function user()
    {
        return $this->hasMany('App\Models\Users','id_user','id');
    }
}
