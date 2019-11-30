@extends('layouts.app')

@section('content')
    <h2 style="text-align: center"> Add new estate</h2>
    <div id="estateAdd" data={{json_encode(Auth::user()->id)}}></div>
    <script src="{{mix('js/app.js')}}" ></script>
@endsection
