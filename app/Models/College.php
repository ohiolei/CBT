<?php

namespace App\Models;

use App\Models\Department;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class College extends Model
{
    use HasFactory;

    protected $fillable = [
        'college_name',
        'college_code',
        'campus',
    ];

    public function department()
    {
        return $this->hasMany(Department::class);
    }
}
