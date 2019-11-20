<?php

namespace App\Http\Controllers\Api;

use App\Estate;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EstateSearchApiController extends Controller
{
    public function search(Request $request)
    {
        $city = $request->get('city');
        $country = $request->get('country');
        $layout = $request->get('layout');
        $price = intval($request->get('price'));

        $estates = Estate::where('City', $city)
                            ->where('Country', $country)
                            ->where('layout', $layout)
                            ->where('price', '<', $price)
                            ->get();
        return $estates;
    }

}
