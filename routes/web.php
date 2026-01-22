<?php

use App\Http\Controllers\AscenseurController;
use App\Http\Controllers\AlerteController;
use App\Http\Controllers\OperationController;
use App\Http\Controllers\CrssController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('ascenseur', AscenseurController::class)->name('ascenseur');

    Route::get('alerte', AlerteController::class)->name('alerte');

    Route::get('operation', [OperationController::class, 'index'])->name('operation');
    Route::get('operation/{id_operation}', [OperationController::class, 'show'])->name('operation_show');

    Route::get('crss', CrssController::class)->name('crss');
});

require __DIR__.'/settings.php';
