<?php

namespace App\Http\Controllers;

use App\Models\Courses;
use App\Models\Student;
use App\Models\Department;
use Illuminate\Http\Request;

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

    public function RegisterDepartment(Request $request)
    {
        $user = auth()->user();

        $student = Student::where('user_id', $user->id)->update([
            'department_id' => $request->department_id,
        ]);

        if($student){
           return response()->json(['message' => 'Department Registered Succesfully'], 200);
        }
        
    }

    public function GetCourse(){

        $user_id = auth()->user()->id;
        $student = Student::where('user_id', $user_id)->first();
        $studentDepartment = Department::where('id', $student->department_id)->first();
        
      
        $courses = Courses::where('Department_id', $studentDepartment->id)->with('lecturer')->get();

        return response()->json(['data' => $courses], 200);
        
    }

    public function RegisterCourse(){

        $user_id = auth()->user()->id;
        $student = Student::where('user_id', $user_id)->first();
       
    }
}
