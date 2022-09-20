<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;
    /**
     * Get the account's user
     */
    public function user (){
        return $this->morphOne(User::class,'userable');
    }
}
