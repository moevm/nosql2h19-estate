<?php

namespace App\Http\Controllers\Api;

use App\Estate;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EstateApiController extends Controller
{
    public function index()
    {
        $estates = Estate::paginate(5);
        return $estates;
    }

    public function show(Estate $estate)
    {
        return $estate;
    }

    public function store(Request $request)
    {
        $estate = Estate::create($request->all());

        return response()->json($estate, 201);
    }

    public function update(Request $request, Estate $estate)
    {
        $estate->update($request->all());

        return response()->json($estate, 200);
    }

    public function delete(Estate $estate)
    {
        $estate->delete();

        return response()->json(null, 204);
    }
}
