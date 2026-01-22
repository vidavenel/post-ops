<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CrssController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $crss = DB::connection('dwh_nexsis')
            ->table('nexsis_prod.crss_operation', 'co')
            ->select(
                'co.id_operation', 
                'co.numero_operation', 
                'co.numero_affaire', 
                'co.commune', 
                'co.thematique_principale',
                'co.date_debut_operation'
                )
            ->take(20)
            ->orderBy('createdAt', 'desc')
            ->get();

        return Inertia::render('crss/index', [
            'crss' => $crss->toArray(),
        ]);
    }
}
