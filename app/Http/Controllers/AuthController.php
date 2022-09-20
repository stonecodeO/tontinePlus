<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
   public function register(Request $request){
       $post_data = $request->validate([
            'name'=>'required|string',
            'email'=>'required|string|email|unique:users',
            'password'=>'required|min:8',
       ]);
       $new_user = User::create([
              'name'=>$post_data['name'],
              'email'=>$post_data['email'],
              'password'=>Hash::make($post_data['password']),
       ]);
       $new_user->roles()->attach(1);
       $token = $new_user->createToken('autToken')->plainTextToken;

       return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
       ]);
   }

    public function write_to_console($data) {
        $console = $data;
        if (is_array($console))
        $console = implode(',', $console);

        echo "<script>console.log('Console: " . $console . "' );</script>";
    }
   public function login(Request $request){
       if (!Auth::attempt($request->only('email', 'password'))){
            return response()->json([
                'message' => 'Login failed'
            ], 401);
        }
    $connectedUser = User::where('email', $request['email'])->firstOrFail();
    $token = $connectedUser->createToken('authToken')->plainTextToken;
    return response()->json([
        'access_token' =>$token,
        'token_type' => 'Bearer',
    ]);
   }
}
