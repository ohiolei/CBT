<?php

// app/Http/Middleware/CheckRole.php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Admin
{
    public function handle(Request $request, Closure $next, ...$roles)
    {
        $user = Auth::user();

        if(!$user){
            return redirect('/'); 
        }
        
        if ($user->hasRole('admin') || $user->hasRole('super_admin')) {
            return $next($request);
        }
       
        
        // If the user doesn't have any of the specified roles, redirect them or modify as needed.
        return redirect('/'); // Change this to the desired redirect URL
    }
}
