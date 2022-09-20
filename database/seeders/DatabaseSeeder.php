<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Role;
use Database\Seeders\UserAndRoleSeeder;
use Illuminate\Database\Seeder;
use Database\Seeders\TontineSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call(UserAndRoleSeeder::class);
        $this->call(TontineSeeder::class);
    }
}
