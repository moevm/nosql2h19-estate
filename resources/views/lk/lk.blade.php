@extends('layouts.app')

@section('content')
    <h2 style="text-align: center"> Personal cabinet</h2>
    <div id="lk" data={{json_encode(Auth::user()->id)}}></div>
    <script src="{{mix('js/app.js')}}" ></script>
@endsection
