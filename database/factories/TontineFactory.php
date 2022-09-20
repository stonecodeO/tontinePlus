<?php

namespace Database\Factories;

use App\Models\Tontine;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tontine>
 */
class TontineFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "name" => $this->faker->name(),
            "description" => $this->faker->text(),
            "createdAt" => $this->faker->date(),
            "startedAt" => $this->faker->date(),
            "endedAt" => $this->faker->date(),
            "cotisation" => $this->faker->randomFloat(2,500,50000),
        ];
    }
}
