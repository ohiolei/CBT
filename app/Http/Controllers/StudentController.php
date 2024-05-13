<?php

namespace App\Http\Controllers;

use App\Models\Courses;
use App\Models\Department;
use App\Models\Student;
use App\Models\StudentCourses;
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

        if ($student) {
            return response()->json(['message' => 'Department Registered Succesfully'], 200);
        }

    }

    public function GetCourse()
    {

        $user_id = auth()->user()->id;
        $student = Student::where('user_id', $user_id)->first();
        $studentDepartment = Department::where('id', $student->department_id)->first();

        $courses = Courses::where('Department_id', $studentDepartment->id)->with('lecturer')->get();

        return response()->json(['data' => $courses], 200);

    }

    public function RegisterCourse(Request $request)
    {

        $user_id = auth()->user()->id;
        $student = Student::where('user_id', $user_id)->first();
        $student_id = $student->id;
        $existing_student = StudentCourses::where('student_id', $student_id)->first();
        if ($existing_student) {
            return response()->json(['error' => 'Student course already registered'], 404);

        } else {
            $cours_register = StudentCourses::create([
                'courses' => $request->courses,
                'student_id' => $student->id,
            ]);
        }

        if ($cours_register) {
            return response()->json(['message' => 'Course registered successfuly'], 200);
        } else {
            return response()->json(['error' => 'Course not registered'], 404);
        }

    }

    public function FetchStudentCourse()
    {
        $user_id = auth()->user()->id;
        $student = Student::where('user_id', $user_id)->first();

        $student_course = StudentCourses::where('student_id', $student->id)->first();
        $data = json_decode($student_course->courses);
        
        if($student_course){
            return response()->json(['courses' => $data], 200);
        }
    }

    public function UpdateStudentCourse(Request $request)
    {
        $user_id = auth()->user()->id;
        $student = Student::where('user_id', $user_id)->first();

        $student_course= StudentCourses::where('student_id', $student->id)->update([
            'courses' => $request->courses,
        ]);

        if ($student_course) {
            return response()->json(['data' => $student_course], 200);
        } else {
            return response()->json(['message' => 'course form not updated'], 404);
        }
       

    }
}
