<?php

namespace App\Http\Controllers;

use App\Models\Courses;
use App\Models\Lecturer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{

    public function getLecturer()
    {

        $auth_user_id = auth()->user()->id;

        $lecturer = Lecturer::where('user_id', $auth_user_id)->first();

        return response()->json(['data' => $lecturer], 200);
    }

    public function createCourse(Request $request)
    {
        $course_count = Courses::where('lecturer_id', $request->lecturer_id)->count();

        if ($course_count <= 4) {
            $course_create = Courses::create([
                'lecturer_id' => $request->lecturer_id,
                'department_id' => $request->department_id,
                'course_code' => $request->course_code,
                'course_title' => $request->course_title,
            ]);
            if ($course_create) {
                return response()->json(['message' => 'Course created successfully'], 200);
            }

            if (!$course_create) {
                return response()->json(['error' => 'Course not created successfully'], 422);
            }

        } else {
            return response()->json(['message' => 'You have met required amount of courses you can take']);
        }
    }

    public function courseListPage()
    {

        return Inertia::render('Components/lecturer/course/List');
    }

    public function courseList(String $id)
    {
        $course = Courses::where('Department_id', $id)->with('lecturer')->get();

        $lecturerIds = $course->pluck('lecturer_id')->toArray();

        if (!empty($lecturerIds)) {
            $user_lecturer = Lecturer::whereIn('id', $lecturerIds)->with('User')->get();
            return response()->json(['lecturer_data' => $user_lecturer, 'course' => $course], 200);
        } else {

            return response()->json(['error' => 'No lecturer IDs found', 'course' => $course], 404);
        }
        // return response()->json(['course' => $course], 200);
    }

    public function fetchCourseForLecturer()
    {
        $authUser = auth()->user();
        $lecturer = Lecturer::where('user_id', $authUser->id)->first();

        $course = Courses::where('lecturer_id', $lecturer->id)->get();

        if ($course) {
            return response()->json(['data' => $course], 200);
        } else {
            return response()->json(['message' => 'You do not have any course assigned to you'], 404);
        }
    }

    public function fetchCourseForCourseForm(Request $request)
    {
        
        
        $course = Courses::with('lecturer')->where('course_title', 'like', '%'.$request->course_name_code.'%')
        ->orWhere('course_code', 'like', '%'.$request->course_name_code.'%')
        ->get();

        if ($course) {
            return response()->json(['data' => $course], 200);
        } else {
            return response()->json(['message' => 'course form not registered'], 404);
        }
    }

}
