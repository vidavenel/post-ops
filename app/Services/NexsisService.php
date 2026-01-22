<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;

class NexsisService
{
    public function getAlertes(?string $numero_affaire): Collection
    {
        $alertes = DB::connection('dwh_nexsis')
            ->table('nexsis_prod.sga_alerte', 'sa')
            ->select('sa.numero_alerte', 'sa.date_creation', 'stl.commune', 'sa.numero_affaire')
            // ->leftJoin('nexsis_prod.sga_traitement as st', 'st.numero_alerte', '=', 'sa.numero_alerte')
            ->leftJoin('nexsis_prod.sga_traitement_localisation as stl', 'stl.numero_alerte', '=', 'sa.numero_alerte')
            ->when($numero_affaire, function ($query) use ($numero_affaire) {
                return $query->where('sa.numero_affaire', '=', $numero_affaire);
            })
            ->take(20)
            ->orderBy('date_creation', 'desc')
            ->get();

        return $alertes;
    }

    public function getAlerte(string $numero_alerte): array
    {
        // TODO: Implement getAlerte() method.
        return [];
    }

    public function getOperations($ascenseur = false): Collection
    {
        $operations = DB::connection('dwh_nexsis')
            ->table('nexsis_prod.sgo_operation', 'so')
            ->select('so.id_operation', 'so.numero', 'so.date_creation', 'so.nature_de_fait_label')
            ->when($ascenseur, function ($query) {
                return $query->where('so.nature_de_fait_code', '=', 'C02.16.04')
                    ->orWhere('so.nature_de_fait_code', 'like', 'C09.06.%');
            })
            ->take(20)
            ->orderBy('date_creation', 'desc')
            ->get();

        return $operations;
    }

    public function getOperation(string $id_operation): array
    {
        // TODO: Implement getOperation() method.
        return [];
    }

    public function getTraitementCrss(?string $numero_affaire): Collection
    {
        $traitement_crss = DB::connection('dwh_nexsis')
            ->table('nexsis_prod.crss_operation', 'co')
            ->select('co.id_operation', 'co.numero_operation', 'co.numero_affaire', 'co.commune', 'co.thematique_principale', 'co.date_debut_operation')
            ->when($numero_affaire, function ($query) use ($numero_affaire) {
                return $query->where('co.numero_affaire', '=', $numero_affaire);
            })
            ->take(20)
            ->orderBy('date_debut_operation', 'desc')
            ->get();

        return $traitement_crss;
    }

    public function getCrss(): Collection
    {
        $crss = DB::connection('dwh_nexsis')
            ->table('nexsis_prod.crss_operation', 'co')
            ->select('co.id_operation', 'co.numero_operation', 'co.numero_affaire', 'co.commune', 'co.thematique_principale', 'co.date_debut_operation')
            ->take(20)
            ->orderBy('date_debut_operation', 'desc')
            ->get();

        return $crss;
    }
}