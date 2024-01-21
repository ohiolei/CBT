<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\collegeController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\UserManagerController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [IndexController::class, 'index']);
Route::prefix('/user_manager')->middleware('admin')->name('user_manager.')->group(function(){
    Route::get('/', [UserManagerController::class, 'index'])->name('index');
    Route::get('/get_all_users', [UserManagerController::class, 'getAllUsers'])->name('get_all_users');
    Route::get('/user_analytic', [UserManagerController::class, 'userAnalytic'])->name('user_analytic');
    Route::get('/get_all_roles', [UserManagerController::class, 'getAllRoles'])->name('get_all_roles');
    Route::post('/create_student', [UserManagerController::class, 'CreateStudent'])->name('create_student')->withoutMiddleware('admin');
    Route::post('/create_lecturer', [UserManagerController::class, 'CreateLecturer'])->name('create_lecturer')->withoutMiddleware('admin');
    Route::get('/fetch_student_matric', [UserManagerController::class, 'FetchStudentMatric'])->name('fetch_student_matric')->withoutMiddleware('admin');
});

Route::prefix('college')->middleware('admin')->name('college.')->group(function(){
    Route::post('/create', [collegeController::class, 'createCollege'])->name('create');
    Route::get('/get_all_college', [collegeController::class, 'getAllCollege'])->name('get_all_college');
    Route::get('/list_all_college', [collegeController::class, 'allCollegeTable'])->name('list_all_college');
});

Route::prefix('department')->middleware('admin')->name('department.')->group(function(){
    Route::post('/create_department', [DepartmentController::class, 'createDepartment'])->name('create_department');
    Route::get('/get_department/{id}', [DepartmentController::class, 'getCollegeForDepartment'])->name('get_department');
    Route::get('/get_all_department', [DepartmentController::class, 'getAllDepartment'])->name('get_all_department');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
