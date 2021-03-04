<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('stories')->insert([
            'id_video'=>1, 
            'id_type'=>1, 
            'id_author'=>1, 
            'story_name'=>'Tom Holland', 
            'description'=>'Tom Holland', 
            'content'=>"Once upon a time, in the forest, all species lived together in harmony. But one afternoon, Nai wandered off to find food. It went to that wasteland, the deer waited to pick up the figs. But there was no strong wind, and it didn't fall. The deer looked at the ripe red fig on the branch and craved. The deer took a step back, bored. Suddenly there was a voice:

                - Don't rush, Mr. Nai! There was no one around, bewildered by the deer. When he looked up at the tree hole on the high branch, he saw Owl. Deer hesitated: - Did you call me? - Yes, do you want a fig fruit? - Yes.
                 
                The owl puffed out his stomach, his eyes half asleep:
                 
                - Well, I ate it too much so I don't want to take any more steps. If only you had come early, I would have picked some.
                 
                Actually, Cu did not want to let Nai come to eat. He wants all the figs on the tree and the fruits on the ground, so he tries to chase away Nai guy. In a friendly manner, Cu said:
                 
                - Please go to find food elsewhere. Tomorrow morning, you come here very early, I will shake the branches to let the figs fall. From the moment I said ‘Kidnap, kidnap’.
                 
                Nai thanked Cu and left, silently happy to have a full meal tomorrow.
                 
                The darkness has not melted yet, the fog is thick, it is bone-cold, everything is still asleep. Owl cried out: ‘Kidnapping, kidnapping’ immediately. Nai awakened, rushed forward with three legs and four legs.
                 
                Misty shadows, cold winds shake reeds and reeds. The sound of the Owl is still pouring in. When the deer arrived, he was still bewildered, when suddenly Owl changed his voice ‘hok hot! Hok hot! ‘ repeatedly. (hok Jacuzzi means: Knife stabbed, spear poked).
                 
                The deer turned pale, threw his neck to run away. It stumbled and knocked over the black sesame tree, the sesame seeds splashed into the eyes of the wild chicken to eat nearby. Chicken was scratched by eye dust, destroying the whole nest of fire ants. The ants lost their nests, ran wild, and met the Squirrel, who was eating immediately and lit a bag of dust. Squirrel cries out painfully and bites on skewers, bites off a string of squash, which is as big as a fall and hit the back of Buffalo grazing. Buffaloes are both in pain and panicking up and running, unfortunately stepping on Miss Crab. Miss Crab almost crushed to death, very disgusted, Cua decided to sue then sue.
                 
                Then open the court to sue, call Buffalo up. Buffalo says:
                 
                - Because squash made me so hurt, I was startled to run away.
                 
                Squash was called and sobbed:
                 
                - Squirrels had bitten off the cord, so my head was cut off like this.
                 
                The squirrel was chanted, it was warm:
                 
                - Because Kien stings me so much, I bite all around.
                 
                Then frustrated:
                 
                - Wow, that's too bad! They really fly, so where is the Ant?
                 
                Ants are Generalized:
                 
                - Why are you burning Squirrels?
                 
                Answer:
                 
                - Our nest was destroyed by the Chicken, so we made a mess.
                 
                Chicken turn, Chicken thin:
                 
                - I don't want to do that, because Vung shot me in the eye.
                 
                Sesame:
                 
                - I do not want like that. In Nai, I crushed.
                 
                The deer was called, and it leisurely entered:
                 
                - The evil Old Owl deceived me. It called me to pick up the fig fruit and then called him to take a knife to stab it. While running away in panic, I ran for my life so I ran into Uncle Vung.
                 
                Then startled:
                 
                - Well, so everything is in Cu.
                 
                The tied owl led to expose your wicked face, greed for you, it received the proper punishment.
                 
                The owl's eyes were yellow from that day because he was nailed, his neck was broken so he was always deviated. Because of being ashamed of his friends, Owl did not dare to go for food during the day. Since then until now, Owl only goes to eat at night, meets Owl everyone hates and thinks that Owl brings all kinds of things to stir.
                 
                Meaning of the owls and cats
                 
                The Cat-owl legend explains why owls only go nocturnal. Through the fairy tales that they see, owls and cats are greedy and selfish, so they have to receive the appropriate punishment. Out of embarrassment, from then on, the owl only dared to forage at night
                
                ", 
            'status'=>'Tom Holland', 
            'id_audio'=>1   
        ]);
    }
}
