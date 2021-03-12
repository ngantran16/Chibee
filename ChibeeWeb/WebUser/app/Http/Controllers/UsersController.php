<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
// use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Jetstream\Jetstream;
use Illuminate\Routing\Controller;
use Laravel\Jetstream\Http\Controllers\Livewire;



use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class UsersController extends Controller
{
    public function create(Request $input)
    {
        $user =new User();
        $user->full_name = $input['name'];
        $user->email  =$input['email'] ;
        $user->avatar ="default.png";
        $user->password  = Hash::make($input['password']);
        $user->save();
        return 'done';
        
    }

    public function login(Request $input){
        if(Auth::attempt(["email" => $input->email, "password" => $input->password])){
            $users = User::where('email',$input->email )->first();
            // $token = $this->getTokenForRequest();

            // $token = $users->createToken($users)->accessToken;

            $token = $input->user()->createToken($users->id)->plainTextToken;
           


            return JSON.parse($token) ;
        }
    }
    public function profile(Request $request){
        return  [
            'request' => $request,
            'user' => $request->user(),
        ];
    }



}
