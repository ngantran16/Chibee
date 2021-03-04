<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    use HasFactory;
   
    public $timestamps = true;//set time to false
    
    
    protected $fillable=[
        'author_name','country'
    ];

    protected $primarykey ='id';
    protected $table ='author';
    public function story()
    {
        return $this->belongsTo('App\Models\Stories','id_author','id');
    }
}
