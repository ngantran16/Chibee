<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

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
            'link_audio'=>' https://docs.google.com/uc?export=download&id=1jiTccVQ5tgPwCYxhwV4lUvKmk4bD5Cxo', 
            'length'=>'7:58'    
        ]);
        DB::table('audio')->insert([
            'link_audio'=>'https://docs.google.com/uc?export=download&id=1vEdVkMAlDTRJbL1xCnnna_U3Z4esbRWY', 
            'length'=>'9:12'    
        ]);
       
        DB::table('audio')->insert([
            'link_audio'=>'https://docs.google.com/uc?export=download&id=16zjlkfh0rCWwI4BIH-KpTRLUGNYNPtxy', 
            'length'=>'4:33'    
        ]);
        DB::table('audio')->insert([
            'link_audio'=>'https://docs.google.com/uc?export=download&id=1JCES5m82929JkmzgGf-5tUOHM1xTOtvw', 
            'length'=>'7:41'    
        ]);
        DB::table('audio')->insert([
            'link_audio'=>'https://docs.google.com/uc?export=download&id=17fSjXsfZlyx_kTE0rzNBdMb2JnB_-cu1', 
            'length'=>'8:01'    
        ]);
        DB::table('audio')->insert([
            'link_audio'=>'https://docs.google.com/uc?export=download&id=1pkvlspkq89v0bp6XrkE8FqqxiFC4Ex40', 
            'length'=>'5:44'    
        ]);
        DB::table('audio')->insert([
            'link_audio'=>'https://docs.google.com/uc?export=download&id=1I5BfrA89rvV3dfWBDosQb29o-jhOkmhW', 
            'length'=>'4:50'    
        ]);
        DB::table('audio')->insert([
            'link_audio'=>'https://docs.google.com/uc?export=download&id=1dC2Q2yMccD22mVUDX7wIfoFolucZTTKA', 
            'length'=>'8:58'    
        ]);
        DB::table('audio')->insert([
            'link_audio'=>'https://docs.google.com/uc?export=download&id=1KsT4nMDjOY7qnN9WS4HKjMmV7w0O7gcb', 
            'length'=>'3:46'    
        ]);
        DB::table('audio')->insert([
            'link_audio'=>'https://docs.google.com/uc?export=download&id=1JDeyd_WyI39MH1WpryJpfZRWl5DNGtyS', 
            'length'=>'8:05'    
        ]);
        DB::table('audio')->insert([
            'link_audio'=>'https://docs.google.com/uc?export=download&id=1dMbKdkFrDhaHHmbzw8urpRqa6oY7DoWk', 
            'length'=>'8:20'    
        ]);
        DB::table('audio')->insert([
            'link_audio'=>'https://docs.google.com/uc?export=download&id=1rx6vbeIUTXxLoNieqdaQ7x5WhR6rHIEb', 
            'length'=>'9:33'    
        ]);
        DB::table('audio')->insert([
            'link_audio'=>'https://docs.google.com/uc?export=download&id=1ostXa77hE9nuUb4dyfOsNEkERYaOuMIk', 
            'length'=>'10:01'    
        ]);
        DB::table('audio')->insert([
            'link_audio'=>'https://docs.google.com/uc?export=download&id=1qDhQRLuSwEVy16yIOo-t6curAbkJPZ0c', 
            'length'=>'9:49'    
        ]);
        DB::table('audio')->insert([
            'link_audio'=>'https://docs.google.com/uc?export=download&id=1z4MZU06RBrzXb0zlaqIKXJlNMuwx5qDy', 
            'length'=>'9:46'    
        ]);
        
    }

}

