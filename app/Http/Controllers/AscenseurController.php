<?php

namespace App\Http\Controllers;

use App\Services\NexsisService;
use Inertia\Inertia;

class AscenseurController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(NexsisService $nexsisService)
    {
        $operations = $nexsisService->getOperations(true);

        return Inertia::render('ascenseur/index', [
            'operations' => $operations,
        ]);
    }

    // public function getInterventions()
    // {
    //     return
    // }
}
