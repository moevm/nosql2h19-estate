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

//Route::get('articles', 'Api\ArticleApiController@index');
//Route::get('articles/{article}', 'Api\ArticleApiController@show');
//Route::post('articles', 'Api\ArticleApiController@store');
//Route::put('articles/{article}', 'Api\ArticleApiController@update');
//Route::delete('articles/{article}', 'Api\ArticleApiController@delete');

Route::get('estates', 'Api\EstateApiController@index');
Route::get('estates/{estate}', 'Api\EstateApiController@show');
Route::post('estates', 'Api\EstateApiController@store');
Route::put('estates/{estate}', 'Api\EstateApiController@update');
Route::delete('estates/{estate}', 'Api\EstateApiController@delete');
