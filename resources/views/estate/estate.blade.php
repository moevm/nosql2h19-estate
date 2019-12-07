@extends('layouts.app')

@section('content')
    <h2 style="text-align: center"> Estate</h2>
    <div id="estate" data={{json_encode(Auth::user()->id)}}></div>
    <script src="{{mix('js/app.js')}}" ></script>
@endsection
