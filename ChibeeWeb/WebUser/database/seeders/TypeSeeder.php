<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('types')->insert([
            'name_type'=>'Truyện cổ tích'   
        ]);
        DB::table('types')->insert([
            'name_type'=>'Truyện ngụ ngôn'   
        ]);
        DB::table('types')->insert([
            'name_type'=>'Quà tặng cuộc sống'   
        ]);
       
    }
}
