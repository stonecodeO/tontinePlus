<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserAndRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $member_role = Role::create([
           'name' => 'member',
       ]);
       $editor_role = Role::create([
        'name' => 'editor',
        ]);
       $admin_role = Role::create([
        'name' => 'admin',
       ]);
        $member = User::create([
            "name" => "member",
            "email" => "member@local.dev",
            "password" => Hash::make("member001")
        ]);

        $editor = User::create([
            "name" => "editor",
            "email" => "editor@local.dev",
            "password" => Hash::make("editor001")
        ]);

        $admin = User::create([
            "name" => "admin",
            "email" => "admin@local.dev",
            "password" => Hash::make("admin001")
        ]);

        $member->roles()->attach(1);
        $editor->roles()->attach(2);
        $admin->roles()->attach(3);

        User::factory()
        ->count(30)
        ->create();
    }
}
