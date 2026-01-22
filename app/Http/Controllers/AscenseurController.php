<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class AscenseurController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $operations = DB::connection('dwh_nexsis')
            ->table('nexsis_prod.sgo_operation', 'so')
            ->select('so.id_operation', 'so.numero', 'so.date_creation', 'so.nature_de_fait_label')
            ->where('so.nature_de_fait_code', '=', 'C02.16.04')
            ->orWhere('so.nature_de_fait_code', 'like', 'C09.06.%')
            ->take(20)
            ->orderBy('date_creation', 'desc')
            ->get();

        return Inertia::render('ascenseur/index', [
            'operations' => $operations->toArray(),
        ]);
    }

    // public function getInterventions()
    // {
    //     return
    // }
}
