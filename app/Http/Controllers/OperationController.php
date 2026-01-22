<?php

namespace App\Http\Controllers;

use App\Services\NexsisService;
use Inertia\Inertia;

class OperationController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index(NexsisService $nexsisService)
    {
        $operations = $nexsisService->getOperations();

        return Inertia::render('operation/index', [
            'operations' => $operations,
        ]);
    }

    public function show(NexsisService $nexsisService, $id_operation)
    {
        $operation = $nexsisService->getOperation($id_operation);

        $alertes = $nexsisService->getAlertes($operation['numero_affaire'] ?? null);

        $traitement_crss = $nexsisService->getTraitementCrss($operation['numero_affaire'] ?? null);

        return Inertia::render('operation/show', compact('operation', 'alertes', 'traitement_crss'));
    }
}
