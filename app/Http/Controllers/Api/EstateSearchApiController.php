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
        $priceUp = intval($request->get('priceUp'));
        $priceDown = intval($request->get('priceDown'));

        $estates = Estate::where('City', $city)
                            ->where('Country', $country)
                            ->where('layout', $layout)
                            ->where('price', '<=', $priceDown)
                            ->where('price', '>=', $priceUp)
                            ->get();
        return $estates;
    }

}
