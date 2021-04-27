<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {  $this->call([
        AudioSeeder::class,
        TypeSeeder::class,
        VideoSeeder::class,
        AuthorSeeder::class,
        UsersSeeder::class,
        StoriesSeeder::class,
        WishlistSeeder::class,
        CommentSeeder::class
    ]);
        

    }

  
}
