<?php

namespace App\Http\Controllers;

use App\Models\Lecturer;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserManagerController extends Controller
{
    public function index()
    {
        return Inertia::render('users/index');
    }
    public function getAllRoles()
    {

        $roles = Role::all();

        return response()->json($roles, 200);
    }

    public function userAnalytic()
    {
        $userQuery = User::with('roles');

        $super_admin = $userQuery->whereHas('roles', function ($query) {
            $query->where('name', 'super admin');
        })->count();
        dd($super_admin);
        $admin = $userQuery->whereHas('roles', function ($query) {
            $query->where('name', 'admin');
        })->count();

        $student = $userQuery->whereHas('roles', function ($query) {
            $query->where('name', 'student');
        })->count();

        $lecturer = $userQuery->whereHas('roles', function ($query) {
            $query->where('name', 'lecturer');
        })->count();

        return response()->json([
            'super_admin' => $super_admin,
            'admin' => $admin,
            'student' => $student,
            'lecturer' => $lecturer,
        ], 200);

    }
    public function getAllUsers(Request $request)
    {
        $userQuery = User::with('roles');

        $user = $userQuery->when($request->filled('filters.name') || $request->filled('filters.role'), function ($query) use ($request) {
            $query->where(function ($query) use ($request) {

                if ($request->filled('filters.name')) {
                    $query->where('name', 'like', '%' . $request->input('filters.name') . '%');
                }

                if ($request->filled('filters.role')) {
                    $query->orWhereHas('roles', function ($roleQuery) use ($request) {
                        $roleQuery->where('name', $request->input('filters.role'));
                    });
                }
            });
        })->paginate(10);
        return response()->json($user, 200);
    }

    public function generateMatricNumber($length = 8)
    {
        // Define the characters that can be used in the matriculation number
        $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        // Get the total number of characters
        $charLength = strlen($characters);

        // Initialize the matriculation number
        $matricNumber = '';

        // Generate a random alphanumeric string
        for ($i = 0; $i < $length; $i++) {
            $randomChar = $characters[rand(0, $charLength - 1)];
            $matricNumber .= $randomChar;
        }

        return $matricNumber;
    }

    public function CreateStudent()
    {

        $roles = ['super_admin', 'admin', 'student', 'lecturer'];
        $userId = auth()->user()->id;
        $user = User::findOrFail($userId);
        $existingStudent = Student::where('user_id', $userId)->first();
        $existingLecturer = Lecturer::where('user_id', $userId)->first();
        $user->assignRole("student");
        if($existingStudent || $existingLecturer){
            return response()->json(['error' => 'Student record already exists for this user'], 422);
        }   
        $matricNumber = $this->generateMatricNumber();

        if(!$existingStudent || !$existingLecturer){
            Student::create([
                'user_id' => $user->id,
                'matric_number' => $matricNumber,
            ]);
            
            return response()->json(['message' => 'Student record created succesfully'], 200);
        }
       
        

    }

    public function CreateLecturer(Request $request)
    {
        $roles = ['super_admin', 'admin', 'student', 'lecturer'];
        $userId = auth()->user()->id;
        $user = User::findOrFail($userId);
        $existingLecturer = Lecturer::where('user_id', $userId)->first();
        $existingStudent = Student::where('user_id', $userId)->first();
        $user->assignRole("lecturer");
        if($existingLecturer || $existingStudent){
            return response()->json(['error' => 'Lecturer record already exists for this user'], 422);
        }    
        if (!$existingLecturer || !$existingStudent) {
            Lecturer::create([
                'user_id' => $user->id,
            ]);
            
            return response()->json(['message' => 'Lecturer record created succesfully'], 200);
            
        }
    }
    public function FetchStudentMatric()
    {
       // fetch matric number
        $userId = auth()->user()->id;
        $matricNumber = Student::where('user_id', $userId)->first();
        return response()->json(['data' => $matricNumber], 200);
        

    }
}
