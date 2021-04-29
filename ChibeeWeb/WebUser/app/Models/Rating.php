<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;
   
    public $timestamps = true;//set time to false
    
    
    protected $fillable=[
        'id_user','id_story','point','detail'
    ];

    protected $primarykey ='id';
    protected $table ='rating';
    public function story()
    {
        return $this->belongsTo('App\Models\Stories','id_story','id');
    }
    public function user()
    {
        return $this->hasMany('App\Models\Users','id_user','id');
    }
}
