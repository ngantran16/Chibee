<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

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
            'name'=>'Truyện cổ tích', 
            'country'=>'Việt Nam'    
        ]);
       
    }
}
