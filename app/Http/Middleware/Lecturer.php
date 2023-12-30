<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Lecturer
{
  
    public function handle(Request $request, Closure $next, ...$roles)
    {
        $user = Auth::user();

        if(!$user){
            return redirect('/'); 
        }
        
        if ($user->hasRole('lecturer')) {
            return $next($request);
        }
       
        
        // If the user doesn't have any of the specified roles, redirect them or modify as needed.
        return redirect('/'); // Change this to the desired redirect URL
    }
}
