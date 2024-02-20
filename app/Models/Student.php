<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'matric_number',
        'department_id',
        'name',
    ];

    public function User(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
