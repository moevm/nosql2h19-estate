<?php

namespace App\Imports;

use App\Estate;
use App\Article;
use http\Client\Curl\User;
use Jenssegers\Mongodb\Eloquent\Model;
use Maatwebsite\Excel\Concerns\ToModel;

class CsvImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return Model|null
    */
    public function model(array $row)
    {
        $Estate = Estate::create([
            'City' => $row[0],
            'Address' => $row[1],
            'Country' => $row[2],
            'first_name' => $row[3],
            'second_name' => $row[4],
            'middle_name' => $row[5],
            'number' => $row[6],
            'email' => $row[7],
            'price' => $row[8],
            'year_build' => $row[9],
            'square' => $row[10],
            'type_house' => $row[11],
            'is_primary' => $row[12],
            'layout' => $row[13]
        ]);

        $Article = Article::create([
            'Name' => $row[14],
            'Description' => $row[15],
            'Placement_date' => $row[16],
            'Estate_id' => $Estate->_id
        ]);

        $Estate->article_id = $Article->_id;
        $Estate->save();

        return null;
    }
}
