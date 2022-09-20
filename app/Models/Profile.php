<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Profile extends Model
{
    use HasFactory;
    /**
    * Get the profile's user.
    */
    public function user()
    {
        return $this->morphOne(User::class, "userable");
    }
}
