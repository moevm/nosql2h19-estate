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

        Log::info('This is some useful information.');

        $estates = Estate::where('City', $city);
        if (!empty($country)) $estates->where('Country', $country);
        if (!empty($layout)) $estates->where('layout', $layout);
        if ($price > 0) $estates->where('price', '<', $price);

        return $estates->get();
    }

}
