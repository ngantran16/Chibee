<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class WishlistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('wishlist')->insert([
            'id_user'=>2, 
            'id_story'=>1
        ]);
        DB::table('wishlist')->insert([
            'id_user'=>2, 
            'id_story'=>3    
        ]);
        DB::table('wishlist')->insert([
            'id_user'=>2, 
            'id_story'=>2  
        ]);
        DB::table('wishlist')->insert([
            'id_user'=>1, 
            'id_story'=>2  
        ]);
        DB::table('wishlist')->insert([
            'id_user'=>1, 
            'id_story'=>13  
        ]);
    }
}
