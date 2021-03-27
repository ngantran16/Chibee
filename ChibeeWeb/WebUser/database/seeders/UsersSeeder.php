<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'avatar'=>'default.png', 
            'full_name'=>'My Hieu',
            'email'=>'hieu.ho21@passerellesnumeriques.org',
            'password'=>Hash::make("password"),
            'role'=>'user'
            ,
            'phone_number'=>'0394844753'     
        ]);
        DB::table('users')->insert([
            'avatar'=>'default.png', 
            'full_name'=>'Minh Quoc',
            'email'=>'quoc.le21@passerellesnumeriques.org',
            'password'=>Hash::make("password"),
            'role'=>'user',
            'phone_number'=>'039546412' 
        ]);
        DB::table('users')->insert([
            'avatar'=>'default.png', 
            'full_name'=>'AudioBook',
            'email'=>'chibee.audiobook@gmail.com',
            'password'=>Hash::make("123"),
            'role'=>'admin',
            'phone_number'=>'0394844753'    
        ]);
         DB::table('users')->insert([
            'avatar'=>'default.png', 
            'full_name'=>'Ngan Tran',
            'email'=>'ngan.tran@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'admin',
            'phone_number'=>'0397752689' 
        ]);
        }
}
