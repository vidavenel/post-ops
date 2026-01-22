<?php

namespace App\Services;

use Illuminate\Support\Collection;

class FakeNexsisService extends NexsisService
{
    public function getAlertes(): Collection
    {
        return collect([
            [
                'numero_alerte' => '1234567890',
                'date_creation' => '2026-01-01',
                'commune' => 'Paris',
                'numero_affaire' => '1234567890',
            ],
            [
                'numero_alerte' => '1234567890',
                'date_creation' => '2026-01-01',
                'commune' => 'Paris',
                'numero_affaire' => '1234567890',
            ],
            [
                'numero_alerte' => '1234567890',
                'date_creation' => '2026-01-01',
                'commune' => 'Paris',
                'numero_affaire' => '1234567890',
            ],
        ]);
    }

    public function getAlerte(string $numero_alerte): array
    {
        return [
            'numero_alerte' => '1234567890',
            'date_creation' => '2026-01-01',
            'commune' => 'Paris',
            'numero_affaire' => '1234567890',
        ];
    }

    public function getOperations($ascenseur = false): Collection
    {
        if ($ascenseur) {
            return collect([
                [
                    'id_operation' => '1234567890',
                    'numero' => '1234567890',
                    'date_creation' => '2026-01-01',
                    'nature_de_fait_label' => 'Paris',
                ],
            ]);
        }
        return collect([
            [
                'id_operation' => '1234567890',
                'numero' => '1234567890',
                'date_creation' => '2026-01-01',
                'nature_de_fait_label' => 'Paris',
            ],
        ]);
    }

    public function getOperation(string $numero_operation): array
    {
        return [
            'id_operation' => '1234567890',
            'numero' => '1234567890',
            'date_creation' => '2026-01-01',
            'nature_de_fait_label' => 'Paris',
        ];
    }

    public function getCrss(): Collection
    {
        return collect([
            [
                'id_operation' => '1234567890',
                'numero_operation' => '1234567890',
                'numero_affaire' => '1234567890',
                'commune' => 'Paris',
                'thematique_principale' => 'Paris',
                'date_debut_operation' => '2026-01-01',
            ],
        ]);
    }
}