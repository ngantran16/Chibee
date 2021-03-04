<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wishlist extends Model
{
    use HasFactory;
   
    public $timestamps = true;//set time to false
    
    
    protected $fillable=[
        'id_user','id_story'
    ];

    protected $primarykey ='id';
    protected $table ='audio';

    public function story()
    {
        return $this->belongsTo('App\Models\Stories','id_story','id');
    }
    public function user()
    {
        return $this->belongsTo('App\Models\Stories','id_user','id');
    }
}
