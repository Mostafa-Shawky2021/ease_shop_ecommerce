<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Order;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Notification>
 */
class NotificationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'message' => 'user ' . fake()->name . ' has make order',
            'notifiable_id' => Order::factory(),
            'notifiable_type' => Order::class,
            'is_seen' => '0'
        ];
    }
}