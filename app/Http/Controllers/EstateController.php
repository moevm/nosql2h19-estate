<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EstateController extends Controller
{
    public function index()
    {
        return view('estate\estates');
    }

    public function show()
    {
        return view('estate\estate');
    }
}
