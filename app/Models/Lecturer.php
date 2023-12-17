<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Lecturer extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'matric_number',
        'department_id',
    ];

    public function User(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
