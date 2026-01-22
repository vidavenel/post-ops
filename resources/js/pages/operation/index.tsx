import { Head } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import { operation } from '@/routes';

import OperationTable from './_components/operation-table';

import { type Operation, type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Operations',
        href: operation().url,
    },
];

interface OperationProps {
    operations: Operation[];
}

export default function Operation({operations}: OperationProps) {  
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Operations" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <OperationTable operations={operations} />
                </div>
            </div>
        </AppLayout>
    );
}