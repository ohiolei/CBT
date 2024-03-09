<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\collegeController;
use App\Http\Controllers\StudentController;
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
Route::prefix('/user_manager')->middleware(['admin', 'auth'])->name('user_manager.')->group(function(){
    Route::get('/', [UserManagerController::class, 'index'])->name('index');
    Route::get('/get_all_users', [UserManagerController::class, 'getAllUsers'])->name('get_all_users');
    Route::get('/user_analytic', [UserManagerController::class, 'userAnalytic'])->name('user_analytic');
    Route::get('/get_all_roles', [UserManagerController::class, 'getAllRoles'])->name('get_all_roles');
    Route::post('/create_student', [UserManagerController::class, 'CreateStudent'])->name('create_student')->withoutMiddleware('admin');
    Route::post('/create_lecturer', [UserManagerController::class, 'CreateLecturer'])->name('create_lecturer')->withoutMiddleware('admin');
    Route::get('/fetch_student_matric', [UserManagerController::class, 'FetchStudentMatric'])->name('fetch_student_matric')->withoutMiddleware('admin');
});

Route::prefix('college')->middleware(['admin', 'auth'])->name('college.')->group(function(){
    Route::post('/create', [collegeController::class, 'createCollege'])->name('create');
    Route::get('/get_all_college', [collegeController::class, 'getAllCollege'])->name('get_all_college')->withoutMiddleware('admin');
    Route::get('/list_all_college', [collegeController::class, 'allCollegeTable'])->name('list_all_college');
});

Route::prefix('department')->middleware(['admin', 'auth'])->name('department.')->group(function(){
    Route::post('/create_department', [DepartmentController::class, 'createDepartment'])->name('create_department');
    Route::get('/get_department/{id}', [DepartmentController::class, 'getDepartmentForCollege'])->name('get_department')->withoutMiddleware('admin');
    Route::get('/get_department_for_college/{id}', [DepartmentController::class, 'getDepartment'])->name('get_department_for_college')->withoutMiddleware('admin');
    Route::get('/get_all_department', [DepartmentController::class, 'getAllDepartment'])->name('get_all_department')->withoutMiddleware('admin');
});

Route::prefix('lecturer')->middleware(['auth', 'lecturer'])->name('lecturer.')->group(function(){
    Route::get('/get_lecturer', [CourseController::class, 'getLecturer'])->name('get_lecturer');
    
});
Route::prefix('student')->middleware(['auth', 'student'])->name('student.')->group(function(){
    Route::get('/student_department_id', [StudentController::class, 'StudentDepartmentID'])->name('student_department_id');
    Route::get('/fetch_all_department', [StudentController::class, 'GetDepartments'])->name('fetch_all_department');
    Route::get('/fetch_course', [StudentController::class, 'GetCourse'])->name('fetch_course');
    Route::patch('/register_department', [StudentController::class, 'RegisterDepartment'])->name('register_department');
    Route::post('/register_course', [StudentController::class, 'RegisterCourse'])->name('register_course');
    
});

Route::prefix('course')->middleware(['auth', 'lecturer'])->name('course.')->group(function(){
    Route::get('/get_course_page', [CourseController::class, 'courseListPage'])->name('get_course_page');
    Route::get('/coures_for_lecturer', [CourseController::class, 'fetchCourseForLecturer'])->name('coures_for_lecturer');
    Route::get('/get_course/{id}', [CourseController::class, 'courseList'])->name('get_course');
    Route::post('/create_course', [CourseController::class, 'createCourse'])->name('create_course');
    
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
