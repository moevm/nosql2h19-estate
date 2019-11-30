<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Article extends Eloquent
{
    protected $connection = 'mongodb';

    protected $fillable = [
        'Name',
        'Description',
        'Placement_date',
        'Estate_id'
    ];
}
