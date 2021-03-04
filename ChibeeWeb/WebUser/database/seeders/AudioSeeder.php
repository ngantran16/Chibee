<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class AudioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('audio')->insert([
            'link_audio'=>'Tom Holland',
            'length'=>'USA'    
        ]);
    }
}
