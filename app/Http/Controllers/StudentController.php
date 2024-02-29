<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Student;

class StudentController extends Controller
{
    public function StudentDepartmentID()
    {
        $user_id = auth()->user()->id;
        $student = Student::where('user_id', $user_id)->first();

        return response()->json(['student_department_id' => $student->department_id]);
    }

    public function GetDepartments()
    {
        $departments = Department::all();
    
        return response()->json(['departmets' => $departments], 200);
    }

    public function RegisterDepartment()
    {
        $user = auth()->user();

        $student = Student::where('user_id', $user->id)->update([
            
        ]);


    }
}
