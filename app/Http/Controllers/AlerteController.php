<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AlerteController extends Controller
{
    public function __invoke()
    {
        $alertes = DB::connection('dwh_nexsis')
            ->table('nexsis_prod.sga_alerte', 'sa')
            ->select('sa.numero_alerte', 'sa.date_creation', 'stl.commune', 'sa.numero_affaire')
            // ->leftJoin('nexsis_prod.sga_traitement as st', 'st.numero_alerte', '=', 'sa.numero_alerte')
            ->leftJoin('nexsis_prod.sga_traitement_localisation as stl', 'stl.numero_alerte', '=', 'sa.numero_alerte')
            ->take(20)
            ->orderBy('date_creation', 'desc')
            ->get();
            
        return Inertia::render('alerte/index', [
            'alertes' => $alertes->toArray(),
        ]);
    }
}
