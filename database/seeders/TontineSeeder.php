<?php

namespace Database\Seeders;

use App\Models\Meeting;
use App\Models\Role;
use App\Models\User;
use App\Models\Tontine;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class TontineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

       $tontines = Tontine::factory()
                ->count(20)
                ->hasMeetings(
                    Meeting::factory()->count(12),
                )
                ->create();
        foreach ($tontines as $tontine){
            $users = User::all()->random(10);
                foreach ($users as $user){
                    $tontine->users()->attach($user->id,[
                        "wallet" => 0,
                        "emprunts" => 0,
                        "dettes" => 0
                    ]);
                }

        }
    }
}
