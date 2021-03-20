<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserTerm extends Model
{
    
    use HasFactory;
   
    public $timestamps = true;//set time to false
    
    
    protected $fillable=[
        'full_name',
        'email',
        'password',
        'phone_number'
    ];

    protected $primarykey ='id';
    protected $table ='user_term';
}
