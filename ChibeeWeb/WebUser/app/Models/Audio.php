<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Audio extends Model
{
    use HasFactory;
   
    public $timestamps = true;//set time to false
    
    
    protected $fillable=[
        'link_audio','length'
    ];

    protected $primarykey ='id';
    protected $table ='audio';
    public function story()
    {
        return $this->belongsTo('App\Models\Stories','id_audio','id');
    }

   
}
