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
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'My Hieu',
            'email'=>'hieu.ho21@passerellesnumeriques.org',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>4 ,
            'phone_number'=>'0394844753',
            'created_at' => date('2021-01-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')     
        ]);
        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Minh Quoc',
            'email'=>'quoc.le21@passerellesnumeriques.org',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>2 ,
            'phone_number'=>'039546412',
            'created_at' => date('2021-01-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);
        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'AudioBook',
            'email'=>'chibee.audiobook@gmail.com',
            'password'=>Hash::make("123"),
            'role'=>'admin', 'age'=>3 ,
            'phone_number'=>'0394844753',
            'created_at' => date('2021-01-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);
         DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Ngan Tran',
            'email'=>'ngan.tran@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'admin', 'age'=>5 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-02-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);
        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Ngoc Vy',
            'email'=>'vy.nguyen@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>7 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-03-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]); 
        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Nhu ngoc',
            'email'=>'ngoc.pham@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>10 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-03-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);
        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Hong Phong',
            'email'=>'phong.tran@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>6 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-03-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);
        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Nguyen Dung',
            'email'=>'dung.nguyen@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>11 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-04-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);
        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Nguyen Diem',
            'email'=>'diem.nguyen@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>13 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-05-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);
        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Nhat Phung',
            'email'=>'phung.le@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>12 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-05-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);
        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Van Nhang',
            'email'=>'nhang.nguyen@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>5 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-05-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);
        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Van Hung',
            'email'=>'hung.nguyen@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>3 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-05-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);
        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Loan Nguyen',
            'email'=>'loan.nguyen@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>6 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-05-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);
        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Kim Nhat',
            'email'=>'nhat.le@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>4 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-06-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);
        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Kim Phung',
            'email'=>'phung.pham@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>8 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-06-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);
        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Peter',
            'email'=>'peter@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>11 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-07-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);
        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Wiliam',
            'email'=>'wi@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>10 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-07-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);
        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Hong Nhung',
            'email'=>'nhung.nguyen@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>3 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-09-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);
        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Ben Lumley',
            'email'=>'ben@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>7 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-10-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);

        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Kim Le',
            'email'=>'le.kim@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>8 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-10-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);
        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Hong Phuong',
            'email'=>'phuong.tran@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>7 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-10-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);
        
        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Alita',
            'email'=>'alita2000@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>514 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-11-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);    DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Alice Zuberg',
            'email'=>'zuberg@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>13 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-11-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);    DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Lanselot',
            'email'=>'lanse@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>7 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-11-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);    DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Joan of Arc',
            'email'=>'arc.joan@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>6 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-11-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);    DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Maria',
            'email'=>'maria@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>8 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-11-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);
        DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Charlemagne',
            'email'=>'charlemagne@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>10 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-12-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);    DB::table('users')->insert([
            'avatar'=>'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg', 
            'full_name'=>'Arthur',
            'email'=>'arthuraube@gmail.com',
            'password'=>Hash::make("password"),
            'role'=>'user', 'age'=>13 ,
            'phone_number'=>'0397752689',
            'created_at' => date('2021-12-1 12:00:00'),
            'updated_at'=> date('2021-01-1 12:02:00')    
        ]);
        }
}
