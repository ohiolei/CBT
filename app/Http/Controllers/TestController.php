<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class TestController extends Controller
{
    public function index()
    {
        return Inertia::render('Components/tests/index');
    }

    public function createTest()
    {
        
    }
}
