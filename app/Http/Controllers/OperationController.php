<?php

namespace App\Http\Controllers;

use App\Services\NexsisService;
use Inertia\Inertia;

class OperationController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(NexsisService $nexsisService)
    {
        $operations = $nexsisService->getOperations();

        return Inertia::render('operation/index', [
            'operations' => $operations,
        ]);
    }
}
