import { Table, TableHeader, TableRow, TableHead, TableBody } from "@/components/ui/table";

import AlerteRow from "./alerte-row";

import { type Alerte } from "@/types";

interface AlerteTableProps {
    alertes: Alerte[];
}

export default function AlerteTable({ alertes }: AlerteTableProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Numero Alerte</TableHead>
                    <TableHead>Date Creation</TableHead>
                    <TableHead>Commune</TableHead>
                    <TableHead>Numero Affaire</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {alertes.map((alerte: Alerte) => AlerteRow(alerte))}
            </TableBody>
        </Table>
    );
}