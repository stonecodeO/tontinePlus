<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Profile;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
    * Get the parent userable model (profile or account).
    */
    public function userable()
    {
        return $this->morphTo();
    }
    /**
     * Get all of the tontines that are assigned this user.
     */
    public function tontines()
    {
        return $this->morphedByMany(Tontine::class, 'tontineables')->withPivot('wallet','emprunts', 'dettes');
    }

    /**
     * Get all of the roles that are assigned this user.
     */
    public function roles()
    {
        return $this->morphedByMany(Role::class, 'roleables');
    }
}
