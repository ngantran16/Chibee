<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
        DB::table('author')->insert([
            'author_name'=>'Truyện cổ tích', 
            'country'=>'Việt Nam'    
        ]);
       
    }
}
