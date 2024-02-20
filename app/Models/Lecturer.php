<?php

namespace App\Models;

use App\Models\Courses;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Lecturer extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'department_id',
        'name',
    ];

    public function User(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function courses()
    {
        return $this->hasMany(Courses::class);
    }
}
