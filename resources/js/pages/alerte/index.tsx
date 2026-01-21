import { Head } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import { alerte } from '@/routes';
import { type Alerte, type BreadcrumbItem } from '@/types';
import AlerteTable from './_components/alerte-table';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Alerte',
        href: alerte().url,
    },
];

const alertes: Alerte[] = [
    {
        id: 1,
        name: 'Alerte 1',
        description: 'Description de l\'alerte 1',
        date: '2021-01-01',
        status: 'active',
    },
    {
        id: 2,
        name: 'Alerte 2',
        description: 'Description de l\'alerte 2',
        date: '2021-01-02',
        status: 'inactive',
    },
    {
        id: 3,
        name: 'Alerte 3',
        description: 'Description de l\'alerte 3',
        date: '2021-01-03',
        status: 'active',
    }
]

export default function Alerte() {  
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Alerte" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <AlerteTable alertes={alertes} />
                </div>
            </div>
        </AppLayout>
    );
}
