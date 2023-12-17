<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
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
}
