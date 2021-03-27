<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        DB::table('comment')->insert([
            'id_user'=>1, 
            'id_story'=>1,
            'content'=>'hay qua'    
        ]);
    }
}
