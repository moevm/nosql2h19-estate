<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// estate
Route::get('estates', 'Api\EstateApiController@index');
Route::get('estates/{estate}', 'Api\EstateApiController@show');
Route::get('estate/search', 'Api\EstateSearchApiController@search');
Route::get('estate/city-price-get', 'Api\EstateApiController@getCityPriceArr');
Route::get('estate/square-price-get', 'Api\EstateApiController@getSquarePriceArr');
Route::get('estate/sellers-customers', 'Api\EstateApiController@getSellerCustomerArr');
Route::post('estates', 'Api\EstateApiController@store');

//Route::put('estates/{estate}', 'Api\EstateApiController@update');
//Route::delete('estates/{estate}', 'Api\EstateApiController@delete');

Route::post('get-articles', 'Api\ArticleApiController@getArticlesForUser');
Route::get('articles/{article}', 'Api\ArticleApiController@show');
Route::post('articles', 'Api\ArticleApiController@addArticleForUser');


