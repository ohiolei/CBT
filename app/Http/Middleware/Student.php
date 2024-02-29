<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Student
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $user = Auth::user();

        if(!$user){
            return redirect('/'); 
        }
        
        if ($user->hasRole('student')) {
            return $next($request);
        }
       
        
        // If the user doesn't have any of the specified roles, redirect them or modify as needed.
        return redirect('/'); // Change this to the desired redirect URL
    }
}
