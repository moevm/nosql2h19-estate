<?php

use App\HelloWorld;
use Illuminate\Database\Seeder;

class HelloWorldSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        HelloWorld::create([
            'hello' => 'I\'m from MongoDB'
        ]);
    }
}
