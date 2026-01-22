import { Head } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import { alerte } from '@/routes';

import AlerteTable from './_components/alerte-table';

import { type Alerte, type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Alerte',
        href: alerte().url,
    },
];

interface AlerteProps {
    alertes: Alerte[];
}

export default function Alerte({alertes}: AlerteProps) {  
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
