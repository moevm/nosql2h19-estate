<?php

namespace App\Http\Controllers;

use App\HelloWorld;

class HelloWorldController extends Controller
{
    public function index()
    {

        return view('start');
    }

    public function get()
    {
        $content = HelloWorld::where('hello', 'I\'m from MongoDB')->first();
        return response()->json($content->hello);
    }
}
