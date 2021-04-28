<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Wishlist;
use App\Models\Comment;
use App\Models\Rating;
use App\Models\Mailer\PHPMailer\PHPMailer;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
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
    public $verifyCode = array();

    public function update(Request $input)
    {
        $id=$this->getIdFromToken($input->token);
        $user = User::where('id', $id)->first();
        $user->full_name = $input['full_name'];
        $user->phone_number = $this->checkPhone($input['phone_number']);
        $user->email = $this->checkEmail($input['email']);
        $user->avatar = "default.png";
        $user->age=$input->age;
        if (isset($input['avatar'])) {
            $user->avatar = $input['avatar'];
        } else {
            $user->avatar = "default.png";
        }
        $user->password = Hash::make($input['password']);
        if (isset($input['role'])) {
            $user->role = $input['role'];
        } else {
            $user->role = "user";
        }
        
        $user->save();

        if($user->save()){
        // $this->checkEmail($input);
        return 'Edit succecfull';
        }else{
            $data =
                array(
                    'Error' => 'Error!'
                );
            return response()->json($data, 400);

        }
    }

    public function create(Request $input)
    {
        $user = new User();
        $user->age = $input->age;
        $user->full_name = $input->full_name;
        $user->phone_number = $this->checkPhone($input->phone_number);
        $user->email = $this->checkEmail($input->email);
        $user->avatar = "default.png";
        if (isset($input->avatar)) {
            $user->avatar = $input->avatar;
        } else {
            $user->avatar = "default.png";
        }
        $user->password = Hash::make($input->password);
        if (isset($input->role)) {
            $user->role = $input->role;
        } else {
            $user->role = "user";
        }
        
        if($user->save()){
            // $this->checkEmail($input);
            return 'Register succecfull';
            }else{
                $data =
                    array(
                        'Error' => 'Error!'
                    );
                return response()->json($data, 400);
    
            }

    }


//verify phone number
    public function checkPhone($phone)
    {
        //set check =0 it mean no problem with phone number
        $check = 0;

        //if in phone number have another character that is not number set check=1
        for ($i = 0; $i < strlen($phone); $i++) {
            if (!preg_match('/[0-9]/', $phone[$i])) {
                $check = 1;
            }
        }
        //if phone number have  leng more than 12 or less than 10 number that are not a phone number
        if (strlen($phone) < 10 || strlen($phone) > 12) {
            $check = 1;
        }
        //verify that have no problem with phone number
        if ($check == 0) {
            return $phone;
        } else {
            $data =array(
                    'Error' => 'Error phone number denie'
                );
            return response()->json($data, 400);
        }

    }


//verify email
    public function checkEmail($email)
    {

        //make sure that email already exist
        $user = User::where('email', $email)->first();
        if (!is_null($user)) {
            $data =
                array(
                    'Error' => 'Error email aready exist'
                );
            return response()->json($data, 400);
        }
        //check email format
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $data =
                array(
                    'Error' => 'Invalid email format'
                );
            return response()->json($data, 400);
        } else {
            return $email;
        }
    }


//login
    public function login(Request $input)
    {
        //get email and password
        $data = [
            'email' => $input->email,
            'password' => $input->password,
        ];
        //verify password and email
        if (Auth::attempt($data)) {
            //if this true return token and set cookie
            $user = User::where('email', $input->email)->firstOrFail();
            // $token = $user->createToken('auth_token')->plainTextToken;
            // Auth::guard("users");
            // setcookie('laravel_session',$token,time()+(86400*30),"/");
            $token = md5($input->id);
            // create cookie name 'XSRF-TOKEN' with value =$token in on day
            setcookie('XSRF-TOKEN', $token, time() + (86400 * 30), "/");
            return response()->json([
                'access_token' => $token,
                'token_type' => 'Bearer',
            ]);
        } else {
            $data = array(
                'Error' => 'Some thing wrong'
            );
            return response()->json($data, 400);
        }
    }



    // public function displayVerifycode(){
    //     return var_dump($this->verifyCode);
    // }


//give user profile
    public function profile(Request $request)
    {
        return [
            'request' => $request,
            'user' => $request->user(),
        ];
    }

//delete

    public function delete($token)
    {   $id=$this->getIdFromToken($token);
        $comment = Comment::where('id_user', $id);
        $wishlist = Wishlist::where('id_user', $id);
        $rating = Rating::where('id_user', $id);
        $user = User::where("id", $id);
        if (!is_null($comment)) {
            $comment->delete();
        }
        if (!is_null($wishlist)) {
            $wishlist->delete();
        }
        if (!is_null($rating)) {
            $rating->delete();
        }
        if (!is_null($user)) {
            $user = User::where("id", $id)->delete();
            return "user deleted!";
        }
    }

//show all user
    public function show()
    {
        $user = User::all();
        return $user;
    }

//show a user
    public function showOne($id)
    {
        $user = User::where("id", $id)->first();

        if (is_null($user)) {
            return "Error your request null";
            die();
        } else {
            return $user;
        }
    }

//logout

    public function logout()
    {
        if (isset($_COOKIE['XSRF-TOKEN'])) {
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


    public function checkEmails(Request $input)
    {
        $id = $this->getUserId($input);
        $code = $this->makeCode($id);
        // echo (var_dump(json_decode($_COOKIE['VRF_code'])));
        Mail::send('reset-password', ['user' => 'user', 'submitCode' => $code], function ($m) use ($input) {
            $m->from('chibee.audiobook@gmail.com', 'ChiBee');
            $m->to($input->email, 'visitor')->subject('Check Login!');
        });
    }

    public function checkCode(Request $input)
    {
        $id = substr($input->code, 4);
        $verifyCode = json_decode($_COOKIE['VRF_code']);

        foreach ($verifyCode as $i => $item) {
            if ($verifyCode[$i] == $input->code) {
                $verifyCode[$i] = " ";
                setcookie('VRF_code', json_encode($verifyCode), time() + (86400 * 30), "/");
                return "Check code successfull";
                die();
            }
        }

        $data = array(
            'Error' => 'OTP dosent exist!'
        );
        return response()->json($data, 400);
    }


    public function getIdFromToken($token){
        for ($i=0;$i<1000000;$i++){
            if(md5($i)==$token){
                return $i;
                die();
            }
        }
        
        $data = array(
            'Error' => 'User does not exist!'
        );
        return response()->json($data, 400);
        
    }

//
    // public function resetPass(Request $input,String $id){
    //     $code = $this->makeCode($id);
    //     Mail::send('reset-password',['user' =>'user','submitCode'=>$code],function ($m) use($input){
    //         $m->from('chibee.audiobook@gmail.com','ChiBee');
    //         $m->to($input->email,'visitor')->subject('Check Login!');
    //     }
    //     );
    // }
    public function refreshVerifyCode(string $id)
    {
        $verifyCode = array();
        if (isset($_COOKIE['VRF_code'])) {
            $verifyCode = json_decode($_COOKIE['VRF_code']);
            foreach ($verifyCode as $i => $item) {

                if (isset($verifyCode[$i])) {
                    if (substr($verifyCode[$i], 4) == (string)$id) {
                        $verifyCode[$i] = "";
                    }
                }
            }
        }
        return $verifyCode;
    }


    public function makeCode($id)
    {
        $check = 0;
        $verifyCode = $this->refreshVerifyCode($id);
        $min = 0;
        $max = 9;
        $t1 = (string)random_int($min, $max);
        $t2 = (string)random_int($min, $max);
        $t3 = (string)random_int($min, $max);
        $t4 = (string)random_int($min, $max);
        $code = $t1 . '' . $t2 . '' . $t3 . '' . $t4 . '' . $id;

        if ($id < count($verifyCode)) {
            $verifyCode[$id] = $code;
        } else {
            array_push($verifyCode, $code);
        }
        // if(isset($verifyCode[$id])){
        //     $verifyCode[$id]=$code;
        // }
        setcookie('VRF_code', json_encode($verifyCode), time() + (86400 * 30), "/");
        return $code;
    }


    public function makeReCode($id)
    {
        $this->refreshVerifyCode();
        $min = 0;
        $max = 9;
        $t1 = (string)random_int($min, $max);
        $t2 = (string)random_int($min, $max);
        $t3 = (string)random_int($min, $max);
        $t4 = (string)random_int($min, $max);
        $t5 = (string)random_int($min, $max);
        $code = $t1 . '' . $t2 . '' . $t3 . '' . $t4 . '' . $t5 . '' . $id;
        if (isset($verifyCode[$id])) {
            $verifyCode[$id] = $code;
        } else {
            array_push($verifyCode, $code);
        }
        setcookie('VRF_code', json_encode($verifyCode), time() + (86400 * 30), "/");
        return $code;
    }





    // public function verify(String $input){
    //     $verifyCode=json_decode($_COOKIE['VRF_code']);
    //     foreach($verifyCode as $i => $item){
    //     if($verifyCode[$i]==$input)
    //     {   if(count($input)==6){
    //             //this is repasswork code

    //         }elseif(count($input)==5){
    //             //this is check login code

    //             $user=UserTerm::find(substr($verifyCode[$i],4));
    //             $this->create($user);
    //         }

    //     }else{
    //         return "your code incorret";
    //     }
    //     }


    // }


    public function getUserId(Request $input)
    {
        $user = User::where('email', $input->email)->first();
        if (!is_null($user)) {
            echo $user->id;
            return $user->id;
        } else {
            $data = array(
                'Error' => 'User does not exist!'
            );
            return response()->json($data, 400);
            die();
        }
    }

    public function setPassword(Request $input)
    {
        $id=$this->getIdFromToken($input->token);
        $user = User::find($id);
        $user->password = Hash::make($input->new_password);
        
        
        if ($user->save()) {
           
            return "set password complete";
        } else {
            $data = array(
                'Error' => 'Set password fail'
            );
            return response()->json($data, 400);
            die();
        }
    }


    function generateRandomString($length = 4)
    {
        $characters = 'abcdefghijklmnopqrstuvwxyz';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    public function test(Request $dd)
    {
        $code = "000";
        try {
            Mail::send('check-login', ['user' => 'user', 'submitCode' => $code], function ($m) use ($dd) {
                $m->from('chibee.audiobook@gmail.com', 'ChiBee');
                $m->to($dd->email, 'visitor')->subject('Check Login!');
            });
        } catch (Exception $e) {
            return back()->withError($e->getMessage())->withInput();
        }
    }


    // try {
    //     $user = User::findOrFail($request->input('user_id'));
    // } catch (ModelNotFoundException $exception) {
    //     return back()->withError($exception->getMessage())->withInput();
    // }


    // for($i=0;$i<100000;$i++){

    // $toLow=$this->generateRandomString();

    // $s1=$this->getFirstCh($toLow);
    // $s2=$this->getSecondCh($toLow);

    // if($s1==$s2){
    //     echo "<pre>".$toLow."</pre>" ;
    //     echo("true");

    // }

    // }

    public function getFirstCh(string $input)
    {
        $i = floor(strlen($input) / 2);
        $term = strrev($input);
        return $this->sumOfString(substr($term, $i));
    }

    public function getSecondCh(string $input)
    {
        $i = floor(strlen($input) / 2);
        return $this->sumOfString(substr($input, $i));
    }

    public function sumOfString(string $input)
    {
        $sum = 0;
        for ($i = 0; $i < strlen($input); $i++) {
            $sum = $sum + $this->getNumber($input[$i]);
        }
        return $sum;
    }

    public function getNumber(string $ch)
    {
        return ord($ch) - 96;
    }


}
