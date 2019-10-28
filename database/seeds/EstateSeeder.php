<?php

use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EstateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        DB::collection('estates')->update(
            [
                'owner_name' => $faker->name,
                'owner_number' => $faker->e164PhoneNumber,
                'owner_email' => $faker->email,
                'article_name' => $faker->sentence($nbWords = 3),
                'article_description' => $faker->paragraph
            ],
            ['upsert' => true]);
    }
}
