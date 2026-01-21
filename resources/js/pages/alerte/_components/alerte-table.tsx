import { Table, TableHeader, TableRow, TableHead, TableBody } from "@/components/ui/table";
import { type Alerte } from "@/types";
import AlerteRow from "./alerte-row";

interface AlerteTableProps {
    alertes: Alerte[];
}

export default function AlerteTable({ alertes }: AlerteTableProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {alertes.map((alerte: Alerte) => AlerteRow(alerte))}
            </TableBody>
        </Table>
    );
}