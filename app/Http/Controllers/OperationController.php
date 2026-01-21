<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class OperationController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $operations = DB::connection('dwh_nexsis')
            ->table('nexsis_prod.sgo_operation', 'so')
            ->select('so.numero', 'so.date_creation', 'so.nature_de_fait_label')
            ->take(20)
            ->orderBy('date_creation', 'desc')
            ->get();
        dd($operations);
        return Inertia::render('operation/index');
    }
}
