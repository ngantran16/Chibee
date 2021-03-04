<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    use HasFactory;
   
    public $timestamps = true;//set time to false
    
    
    protected $fillable=[
        'name','email','phone_number'
    ];

    protected $primarykey ='id';
    protected $table ='author';
    public function comment()
    {
        return $this->hasMany('App\Models\Comment','id','id_user');
    }
    public function rating()
    {
        return $this->belongsTo('App\Models\Rating','id','id_user');
    }

}
