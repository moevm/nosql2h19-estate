<?php

namespace App\Http\Controllers\Api;

use App\Article;
use App\Estate;
use App\User;
use App\Http\Controllers\Controller;
use App\Exports\CsvExport;
use App\Imports\CsvImport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ImportExportApiController extends Controller
{
    public function csvExport()
    {
        return Excel::download(new CsvExport, 'sample.csv');
    }

    public function csvImport(Request $request)
    {
        $fileData = $request->get('file');
        if ($fileData) {
            $file = str_replace('data:application/vnd.ms-excel;base64,', '', $fileData);
            $file = str_replace(' ', '+', $file);
            file_put_contents(storage_path() . "/app/importCSV.csv", base64_decode($file));
            Excel::import(new CsvImport, storage_path() . '/app/importCSV.csv');
            return 'Файл успешно заимпортирован.';
        }
        else {
            return 'Ошибка импорта файла';
        }
    }
}
