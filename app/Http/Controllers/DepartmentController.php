<?php

namespace App\Http\Controllers;

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
        $departments = Department::with('college')->get();

        return response()->json(['data' => $departments]);
    }
}
