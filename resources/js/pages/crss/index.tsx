import { Head } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import { crss } from '@/routes';

import CrssTable from './_components/crss-table';

import { type Crss, type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'CRSS',
        href: crss().url,
    },
];

interface CrssProps {
    crss: Crss[];
}

export default function Crss({crss}: CrssProps) {  
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="CRSS" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <CrssTable crss={crss} />
                </div>
            </div>
        </AppLayout>
    );
}