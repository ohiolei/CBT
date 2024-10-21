<?php

namespace App\Models;

use App\Models\Courses;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    use HasFactory;

    protected $fillable = [
        'courses_id',
        'title',
        'time_length',
        'mark',
    ];


    public function course()
    {
        return $this->belongsTo(Courses::class);
    }

}
