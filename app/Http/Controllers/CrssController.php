<?php

namespace App\Http\Controllers;

use App\Services\NexsisService;
use Inertia\Inertia;

class CrssController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(NexsisService $nexsisService)
    {
        $crss = $nexsisService->getCrss();

        return Inertia::render('crss/index', [
            'crss' => $crss,
        ]);
    }
}
