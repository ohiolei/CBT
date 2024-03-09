<?php

namespace App\Models;

use App\Models\StudentCourses;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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

    public function studentCourses()
    {
        return $this->hasOne(StudentCourses::class);
    }

    public function getCoursesAttribute()
    {
        return json_decode($this->studentCourse->courses, true);
    }

}
