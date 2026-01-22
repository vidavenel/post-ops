<?php

namespace App\Http\Controllers;

use App\Services\NexsisService;
use Inertia\Inertia;

class AlerteController extends Controller
{
    public function __invoke(NexsisService $nexsisService)
    {
        $alertes = $nexsisService->getAlertes();
            
        return Inertia::render('alerte/index', [
            'alertes' => $alertes,
        ]);
    }

    public function show(NexsisService $nexsisService, $numero_alerte)
    {
        $alerte = $nexsisService->getAlerte($numero_alerte);

        return Inertia::render('alerte/show', [
            'alerte' => $alerte,
        ]);
    }
}
