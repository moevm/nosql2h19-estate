<?php

namespace App\Http\Controllers\Api;

use App\Estate;
use App\Article;
use App\User;
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
        $userId = $request->get('user_id');
        $user = User::find(str_replace('"', '', $userId));
        $estate = Estate::create([
            'City' => $request->get('City'),
            'Address' => $request->get('Address'),
            'Country' => $request->get('Country'),
            'first_name' => $user->name,
            'second_name' => $user->name,
            'middle_name' => $user->name,
            'number' => $request->get('number'),
            'email' => $request->get('email'),
            'price' => intval($request->get('price')),
            'year_build' => $request->get('year_build'),
            'square' => intval($request->get('square')),
            'type_house' => $request->get('type_house')
        ]);
        $article = Article::create([
            'Name' => $request->get('Name'),
            'Description' => $request->get('Description'),
            'Placement_date' => $request->get('Placement_date'),
            'Estate_id' => $estate->_id
        ]);
        $estate->article_id = $article->_id;
        $estate->save();
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

    public function getCityPriceArr()
    {
        $estates = Estate::all();
        $citiesArr = $estates->pluck('City')->all();
        $citiesArr = array_count_values($citiesArr);

        $citiesPricesArr = [];
        $estatesArr = $estates->toArray();

        foreach ($citiesArr as $city => $count) {
            $sumPrice = 0;
            foreach ($estatesArr as $key => $estate) {
                if ($estate['City'] === $city) {
                    $sumPrice = $sumPrice + $estate['price'];
                }
            }
            $avgPrice = ceil($sumPrice / $count);
            $citiesPricesArr[$city] = $avgPrice;
        }
        return $citiesPricesArr;
    }

    public function getSquarePriceArr()
    {
        $estates = Estate::all();
        $squareArr = $estates->pluck('square')->all();
        $squareArr = array_count_values($squareArr);

        $squarePricesArr = [];
        $estatesArr = $estates->toArray();

        foreach ($squareArr as $square => $count) {
            $sumPrice = 0;
            foreach ($estatesArr as $key => $estate) {
                if ($estate['square'] === $square) {
                    $sumPrice = $sumPrice + $estate['price'];
                }
            }
            $avgPrice = ceil($sumPrice / $count);
            $squarePricesArr[$square] = $avgPrice;
        }
        return $squarePricesArr;
    }

    public function getSellerCustomerArr()
    {
        $estates = Estate::all();
        $lengthSellerArr = count($estates->toArray());

        $users = User::all();
        $lengthCustomersArr = count($users->toArray());

        return [$lengthSellerArr, $lengthCustomersArr];
    }
}
