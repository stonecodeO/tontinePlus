<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    const CREATED_AT = null;
    const UPDATED_AT = null;
    protected $fillable = ['name'];
    /**
     * Get all of the users for the role.
     */
    public function users()
    {
        return $this->morphToMany(User::class, 'roleables');
    }
}
