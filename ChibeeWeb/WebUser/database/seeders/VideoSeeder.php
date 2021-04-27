<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    
        DB::table('video')->insert([
            'link_video'=>'https://docs.google.com/uc?export=download&id=1V-mPVHTx0b6hdSi761tPsUMoivGOQrOn',
            'length'=>'7:58'    
        ]);
        DB::table('video')->insert([
            'link_video'=>'https://docs.google.com/uc?export=download&id=1RzKOqjO5Gl_7F5wXP5pNYLAxJmhO9jic',
            'length'=>'9:12'    
        ]);
        DB::table('video')->insert([
            'link_video'=>'https://docs.google.com/uc?export=download&id=1AWKZwqqmX8KUwVEOzFBffb4tklA-ual6',
            'length'=>'6:46'    
        ]);
        DB::table('video')->insert([
            'link_video'=>'https://docs.google.com/uc?export=download&id=1Dk7zdov70df9_xvzYrjTkLaZ51UuzYYs',
            'length'=>'4:33'    
        ]);
        DB::table('video')->insert([
            'link_video'=>'https://docs.google.com/uc?export=download&id=1CuUVkWk1lh_x7ygB3F2WMhAmHfpp5kQ9',
            'length'=>'7:41'    
        ]);
        DB::table('video')->insert([
            'link_video'=>'https://docs.google.com/uc?export=download&id=13t7-K1LyukavWYYobNvNR6lssAf74wtZ',
            'length'=>'8:01'    
        ]);
        DB::table('video')->insert([
            'link_video'=>'https://docs.google.com/uc?export=download&id=1B8xBTgJ_9w1UY26t9NqNBya_vZciJpOY',
            'length'=>'5:44'    
        ]);
        DB::table('video')->insert([
            'link_video'=>'https://docs.google.com/uc?export=download&id=10G7VMl6VoCbk1wh1y-oABM1SJ9Xx9ASC',
            'length'=>'4:50'    
        ]);
        DB::table('video')->insert([
            'link_video'=>'https://docs.google.com/uc?export=download&id=1CorgHjVNXSrNnkBqy1rm33qC_BX_V2wl',
            'length'=>'8:58'    
        ]);
        DB::table('video')->insert([
            'link_video'=>'https://docs.google.com/uc?export=download&id=1PUwRMrSuEuSdrCQXSW2QdhF9V4Y0r4Ap',
            'length'=>'3:46'    
        ]);
        DB::table('video')->insert([
            'link_video'=>'https://docs.google.com/uc?export=download&id=1aDiSQF6rwD54Zx1E50A53LYBODXwqFWF',
            'length'=>'8:05'    
        ]);
        DB::table('video')->insert([
            'link_video'=>'https://docs.google.com/uc?export=download&id=1qDhQRLuSwEVy16yIOo-t6curAbkJPZ0c',
            'length'=>'8:22'    
        ]);
        DB::table('video')->insert([
            'link_video'=>'https://docs.google.com/uc?export=download&id=1E2Y4ouTGDsI12tiHlWZeyjtR2KnWn1pe',
            'length'=>'9:33'    
        ]);
        DB::table('video')->insert([
            'link_video'=>'https://docs.google.com/uc?export=download&id=1SxiY2dTquBcjlwPa5a8v4ScjiGROA7KX',
            'length'=>'10:01'    
        ]);
        DB::table('video')->insert([
            'link_video'=>'https://docs.google.com/uc?export=download&id=1JnIcjreuVyRQyTiVtwYCde2tKO6wUw1Y',
            'length'=>'9:49'    
        ]);

    }
}
