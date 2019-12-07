<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LkApiController extends Controller
{
    public function isAdmin(Request $request)
    {
        $user = User::find(str_replace('"', '', $request->get('user_id')));
        if ($user->role == "admin") {
            return 'true';
        }
        else {
            return 'false';
        }
    }
}
