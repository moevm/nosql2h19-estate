<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class HelloWorld extends Eloquent
{
    //
    protected $collection = 'hello_world';
//    protected $fillable = ['hello'];
}
