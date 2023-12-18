<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Student;
use App\Models\Lecturer;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class UserManagerController extends Controller
{
    public function index(){
        return Inertia::render('users/index');
    }
    public function getAllRoles(){

        $roles = Role::all();

        return response()->json($roles, 200);
    }

    public function userAnalytic(){
        $userQuery = User::with('roles');
        
        $super_admin = $userQuery->whereHas('roles', function ($query) {
            $query->where('name', 'super admin');
        })->get();
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
    public function getAllUsers(Request $request){
        $userQuery = User::with('roles');
        
        $user = $userQuery->when($request->filled('filters.name') || $request->filled('filters.role'), function ($query) use ($request) {
            $query->where(function ($query) use ($request) {
            
                if ($request->filled('filters.name')) {
                    $query->where('name','like', '%' .  $request->input('filters.name'). '%' );
                }
        
                if($request->filled('filters.role')) {
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

    public function CreateStudent(){

            $roles = ['super_admin', 'admin', 'student', 'lecturer'];
            $user = auth()->user();

            $matricNumber = $this->generateMatricNumber();
            
            Student::create([
                'user_id' => $user->id,
                'matric_number' => $matricNumber,
            ]);

            if($user->hasAnyRole($roles)){
                return response()->json('user has a role', 404);
             }
             else{
                 $user->assignRole("student");
             }
           
            
    }

    public function CreateLecturer(){
        $roles = ['super_admin', 'admin', 'student', 'lecturer'];
        $user = auth()->user();
        
        Lecturer::create([
            'user_id' => $user->id,
        ]);

        if($user->hasAnyRole($roles)){
            return response()->json('user has a role', 404);
         }
         else{
             $user->assignRole("lecturer");
         }
    }
}
