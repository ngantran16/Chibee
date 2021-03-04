<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;
   
    public $timestamps = true;//set time to false
    
    
    protected $fillable=[
        'link_video','length'
    ];

    protected $primarykey ='id';
    protected $table ='video';

    public function story()
    {
        return $this->belongsTo('App\Models\Stories','id_video','id');
    }
}
