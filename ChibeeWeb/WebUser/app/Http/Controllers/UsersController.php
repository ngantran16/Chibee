<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Mailer\PHPMailer\PHPMailer;




use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
// use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Jetstream\Jetstream;
use Illuminate\Routing\Controller;
use Laravel\Jetstream\Http\Controllers\Livewire;
use Mail;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Http\Request;

use Illuminate\Routing\Pipeline;
use Laravel\Fortify\Actions\AttemptToAuthenticate;
use Laravel\Fortify\Actions\EnsureLoginIsNotThrottled;
use Laravel\Fortify\Actions\PrepareAuthenticatedSession;
use Laravel\Fortify\Actions\RedirectIfTwoFactorAuthenticatable;
use Laravel\Fortify\Contracts\LoginResponse;
use Laravel\Fortify\Contracts\LoginViewResponse;
use Laravel\Fortify\Contracts\LogoutResponse;
use Laravel\Fortify\Features;
use Laravel\Fortify\Fortify;
use Laravel\Fortify\Http\Requests\LoginRequest;





use Illuminate\Support\Facades\Auth;


class UsersController extends Controller
{

    public $verifyCode=array(); 
    public function createTearm(Request $input)

    {
        $user =new UserTerm();
        $user->full_name = $input['name'];
        $user->email  =$input['email'] ;
        $user->avatar ="default.png";
        $user->password  = Hash::make($input['password']);
        $user->save();
        $this->checkEmail($input);
        
        return 'done';
        
    }

    public function create(UserTerm $input)

    {
        $user =new User();
        $user->full_name = $input->full_name;
        $user->email  =$input->email ;
        $user->avatar =$input->avatar;
        $user->password  = $input->password ;
        $user->save();
        return 'done';
    }
    
    //check login and give system a token
    public function login(Request $input){

        // return $this->loginPipeline($request)->then(function ($request) {
        //     return app(LoginResponse::class);
        // });


        $data = [
            'email' => $input->email,
            'password' => $input->password,
        ];

        if (Auth::attempt($data)) {
            $user = User::where('email', $input->email)->firstOrFail();
            // $token = $user->createToken('auth_token')->plainTextToken;
            // Auth::guard("users");            
            $token=md5($input->id);
            setcookie('XSRF-TOKEN', $token, time() + (86400 * 30), "/");
            // setcookie('laravel_session',$token,time()+(86400*30),"/");
            return response()->json([
                    'access_token' => $token,
                    'token_type' => 'Bearer',
            ]);
        } else {
            return "false";
        }
    }

   

    public function displayVerifycode(){
        return var_dump($this->verifyCode);
    }


    //give user profile
    public function profile(Request $request){
        return  [
            'request' => $request,
            'user' => $request->user(),
        ];
    }

    public function delete($id){
        $comment= Comment::where('id_user',$id);
        $user= User::find($id)->delete();
        
    }


    public function show(){
        $user = User::all();
        return $user;
    }


    public function logout(){
        
        // if (!Auth::check()) {
        if(isset($_COOKIE['XSRF-TOKEN'])){  
            // $this->guard->logout();

            unset($_COOKIE['XSRF-TOKEN']); 
            setcookie('XSRF-TOKEN', null, -1, '/');
            // unset($_COOKIE['laravel_session']); 
            // setcookie('laravel_session', null, -1, '/');  
            return "logout succecfull";
        } else {
            return "unknow users";
        }
    }
    

    public function checkEmail(Request $input){
        $id=$this->getUserId($input);
        $code = $this->makeCode($id);
        Mail::send('check-login',['user' =>'user','submitCode'=>$code],function ($m) use($input){
            $m->from('chibee.audiobook@gmail.com','ChiBee');
            $m->to($input->email,'visitor')->subject('Check Login!');
        }
        );
    }

    public function resetPass(Request $input,String $id){
        $code = $this->makeCode($id);
        Mail::send('reset-password',['user' =>'user','submitCode'=>$code],function ($m) use($input){
            $m->from('chibee.audiobook@gmail.com','ChiBee');
            $m->to($input->email,'visitor')->subject('Check Login!');
        }
        );
    }
    public function refreshVerifyCode(String $id){
        $verifyCode=array();
        if(isset($_COOKIE['VRF_code'])){
            $verifyCode=json_decode($_COOKIE['VRF_code']);
            foreach($verifyCode as $i=>$item){ 
                if(isset($verifyCode[$i])){
                    if(substr($verifyCode[$i],4)==(string)$id){
                        $verifyCode[$i]="";
                     }
                }            
            }
        }
        return $verifyCode;
    }
    

    public function makeCode($id){
        $verifyCode=$this->refreshVerifyCode($id);
        $min=0;
        $max=9;
        $t1=(string)random_int($min, $max);
        $t2=(string)random_int($min, $max);
        $t3=(string)random_int($min, $max);
        $t4=(string)random_int($min, $max);
        $code=$t1.''.$t2.''.$t3.''.$t4.''.$id;  
        if(isset($verifyCode[$id])){
            $verifyCode[$id]=$code;
        }else{
            array_push($verifyCode,$code);
        }        
        setcookie('VRF_code', json_encode($verifyCode), time() + (86400 * 30), "/");
        return $code;
    }



    public function makeReCode($id){
        $this->refreshVerifyCode();
        $min=0;
        $max=9;
        $t1=(string)random_int($min, $max);
        $t2=(string)random_int($min, $max);
        $t3=(string)random_int($min, $max);
        $t4=(string)random_int($min, $max);
        $t5=(string)random_int($min, $max);
        $code=$t1.''.$t2.''.$t3.''.$t4.''.$t5.''.$id;  
        if(isset($verifyCode[$id])){
            $verifyCode[$id]=$code;
        }else{
            array_push($verifyCode,$code);
        }        
        setcookie('VRF_code', json_encode($verifyCode), time() + (86400 * 30), "/");
        return $code;
    }



    public function verify(String $input){
        $verifyCode=json_decode($_COOKIE['VRF_code']);
        foreach($verifyCode as $i => $item){
        if($verifyCode[$i]==$input)
        {   if(count($input)==6){
                //this is repasswork code

            }elseif(count($input)==5){
                //this is check login code
                
                $user=UserTerm::find(substr($verifyCode[$i],4));
                $this->create($user);
            }
   
        }else{
            return "your code incorret";
        }
        }
        

    }



    public function getUserId(Request $input){
        $user = User::where('email', $input->email)->first();
        return $user->id;
    }


    function generateRandomString($length = 4) {
        $characters = 'abcdefghijklmnopqrstuvwxyz';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    public function test(Request $dd){
       
        for($i=0;$i<100000;$i++){

        $toLow=$this->generateRandomString();
        
        $s1=$this->getFirstCh($toLow);
        $s2=$this->getSecondCh($toLow);

        if($s1==$s2){
            echo "<pre>".$toLow."</pre>" ;
            echo("true");

        }
          
        }     
    }
    public function getFirstCh(String $input){
        $i=floor(strlen($input)/2);
        $term=strrev($input); 
        return  $this->sumOfString(substr($term,$i));
    }
    public function getSecondCh(String $input){
        $i=floor(strlen($input)/2);
        return  $this->sumOfString(substr($input,$i));
    }
    public function sumOfString(String $input){
        $sum=0;
        for ($i=0; $i<strlen($input); $i++) {
            $sum=$sum+$this->getNumber($input[$i]);
        }
        return $sum;
    }
    public function getNumber(String $ch){
       return ord($ch)-96;
    }








    public function setPassword(String $id){
        $user=User::find($id);
        $user->password = Hash::make('00000000');
        $user->save();
        return true;
    }

}
