<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    use HasFactory;
    /**
    * Get the tontine that owns the comment.
    */
    public function tontine()
    {
        return $this->belongsTo(Tontine::class);
    }
}
