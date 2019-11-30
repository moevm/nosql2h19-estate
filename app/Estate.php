<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Estate extends Eloquent
{
    protected $collection = 'estates';

    protected $fillable = [
        'City',
        'Address',
        'Country',
        'first_name',
        'second_name',
        'middle_name',
        'number',
        'email',
        'price',
        'year_build',
        'square',
        'type_house'
    ];
}
