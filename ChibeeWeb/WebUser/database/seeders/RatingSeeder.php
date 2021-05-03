<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RatingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rating')->insert([
            'id_user'=>1, 
            'id_story'=>1,
            'point'=>4,'title'=>"ok"    
        ]);
        
        DB::table('rating')->insert([
            'id_user'=>1, 
            'id_story'=>2,
            'point'=>4,'title'=>"ok"    
        ]);
        
        DB::table('rating')->insert([
            'id_user'=>1, 
            'id_story'=>3,
            'point'=>4,'title'=>"tam tam"    
        ]);
        
        DB::table('rating')->insert([
            'id_user'=>2, 
            'id_story'=>2,
            'point'=>3,'title'=>"hay"    
        ]);
        
        DB::table('rating')->insert([
            'id_user'=>2, 
            'id_story'=>5,
            'point'=>5,'title'=>"tuyet voi"    
        ]);
        
        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>6,
            'point'=>4,'title'=>"do"    
        ]);
        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>6,
            'point'=>3,'title'=>"do"    
        ]);
        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>7,
            'point'=>2,'title'=>"do"    
        ]);
        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>8,
            'point'=>5,'title'=>"do"    
        ]);
        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>8,
            'point'=>3,'title'=>"do"    
        ]);
        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>9,
            'point'=>1,'title'=>"do"    
        ]);
        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>9,
            'point'=>5,'title'=>"do"    
        ]);
        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>10,
            'point'=>3,'title'=>"do"    
        ]);
        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>11,
            'point'=>1,'title'=>"do"    
        ]);
        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>11,
            'point'=>4,'title'=>"do"    
        ]);
        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>11,
            'point'=>3,'title'=>"do"    
        ]);
        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>12,
            'point'=>5,'title'=>"do"    
        ]);
        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>12,
            'point'=>3,'title'=>"do"    
        ]);
        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>13,
            'point'=>4,'title'=>"do"    
        ]);
        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>13,
            'point'=>4,'title'=>"do"    
        ]);
        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>13,
            'point'=>4,'title'=>"do"    
        ]);
        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>14,
            'point'=>4,'title'=>"do"    
        ]);
        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>14,
            'point'=>5,'title'=>"do"    
        ]);
        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>14,
            'point'=>4,'title'=>"do"    
        ]);

        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>14,
            'point'=>3,'title'=>"do"    
        ]);
        DB::table('rating')->insert([
            'id_user'=>3, 
            'id_story'=>15,
            'point'=>5,'title'=>"do"    
        ]);
    }
}
