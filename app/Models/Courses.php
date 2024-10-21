<?php

namespace App\Models;

use App\Models\Lecturer;
use App\Models\Test;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Courses extends Model
{
    use HasFactory;

    protected $fillable = [
        'lecturer_id',
        'department_id',
        'course_code',
        'course_title',
    ];

    public function lecturer()
    {
        return $this->belongsTo(Lecturer::class);
    }

    public function test()
    {
        return $this->hasMany(Test::class);
    }

    

}
