<?php

namespace App\Models;

use App\Models\User;
use App\Models\Wallet;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tontine extends Model
{
    use HasFactory;
    /**
     * the primary key associaote to te table
     * @var string
     */
    protected $primaryKey = 'id';
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = null;
    /**
     * set datetime format when serialezing
     * @var string
     */
    protected $datetime = 'U';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'description', 'startedAt', 'endedAt', 'cotisation'];
    /**
     * The relationships that should always be loaded.
     *
     * @var array
     */
    protected $with = ['users', 'meetings'];
    /**
    * Get all of the members for the tontine.
    */
    public function users()
    {
        return $this->morphToMany(User::class, 'tontineables')->withPivot("wallet","emprunts","dettes");
    }
    /**
    * Get the meetings for the tontine.
    */
    public function meetings()
    {
        return $this->hasMany(Meeting::class);
    }
}
