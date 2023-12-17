<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $admin = Role::create(['name' => 'admin']);
        $super_admin = Role::create(['name' => 'super_admin']);
        $lecturer = Role::create(['name' => 'lecturer']);
        $student = Role::create(['name' => 'student']);

        $super_admin_user = User::create([
            'name' => 'Williams Tobi',
            'email' => 'willnagato@gmail.com',
            'password' => Hash::make('12345'),
        ])->assignRole('super_admin');

        $lecturer = User::create([
            'name' => 'Williams Dolapo',
            'email' => 'dolapo@gmail.com',
            'password' => Hash::make('12345'),
        ])->assignRole('lecturer');

        $student = User::create([
            'name' => 'Olatunji Busola',
            'email' => 'busola@gmail.com',
            'password' => Hash::make('12345'),
        ])->assignRole('student');
    }
}
