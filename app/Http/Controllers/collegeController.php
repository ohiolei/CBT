<?php

namespace App\Http\Controllers;

use App\Models\College;
use Illuminate\Http\Request;

class collegeController extends Controller
{
    public function createCollege(Request $request)
    {
        $college = College::create([
            'college_name' => $request->college_name,
            'college_code'=> $request->college_code,
            'campus'=> $request->campus,
        ]);

        return response()->json(['message' => 'College Created Successfully'], 200);
    }

    public function getAllCollege(){
        $college = College::all();

        return response()->json(['data' =>$college], 200);
    }
}
