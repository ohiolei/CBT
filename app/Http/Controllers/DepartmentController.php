<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\College;
use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function createDepartment(Request $request)
    {

        Department::create([
            'name' => $request->department_name,
            'campus' => $request->campus,
            'college_id' => $request->college_id,
        ]);

        return response()->json(['message' => 'Department Created Successfully'], 200);
    }

    public function getAllDepartment()
    {
        $departments = Department::with('college')->orderBy('college_id')->get();
        
        return response()->json(['data' => $departments], 200);
    }

    public function getDepartmentForCollege(String $id)
    {
        $departments = Department::where('college_id', $id)->with('college')->get();

        return Inertia::render('Components/super_admin/department/list',['departments' => $departments]);
    }

    public function getDepartment(String $id)
    {
        $departments = Department::where('college_id', $id)->with('college')->get();

        return response()->json(['data' => $departments], 200);
    }
}
