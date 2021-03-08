<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('story_type')->insert([
            'name'=>'Truyện cổ tích',
            'description'=>'Demo'      
        ]);
        DB::table('story_type')->insert([
            'name'=>'Truyện ngụ ngôn',
            'description'=>'Demo'      
        ]);
        DB::table('story_type')->insert([
            'name'=>'Quà tặng cuộc sống',
            'description'=>'Demo'   
        ]);
       
    }
}
