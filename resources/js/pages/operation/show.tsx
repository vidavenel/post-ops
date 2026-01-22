import { Head } from "@inertiajs/react";

import AppLayout from "@/layouts/app-layout";
import { operation as operationRoute, operation_show } from "@/routes";
import { type Alerte, type BreadcrumbItem, type Operation } from "@/types";

import AlertTable from "../alerte/_components/alerte-table";

function getBreadcrumbs(operation: Operation): BreadcrumbItem[] {
    return [
        {
            title: 'Operations',
            href: operationRoute().url,
        },
        {
            title: operation.numero,
            href: operation_show({ id_operation: operation.id_operation }).url,
        },
    ];
}

export default function OperationShow({ operation, alertes }: { operation: Operation, alertes: Alerte[] }) {
    const breadcrumbs = getBreadcrumbs(operation);
    
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Operation Show" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    {operation.numero} - {operation.date_creation} - {operation.nature_de_fait_label}
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <AlertTable alertes={alertes} />
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <CrssTraitementTable crss={crss} />
                </div>
            </div>
        </AppLayout>
    );
}