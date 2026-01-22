import { Table, TableHeader, TableRow, TableHead, TableBody } from "@/components/ui/table";

import OperationRow from "./operation-row";

import { type Operation } from "@/types";

interface OperationTableProps {
    operations: Operation[];
}

export default function OperationTable({ operations }: OperationTableProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Numero</TableHead>
                    <TableHead>Date Creation</TableHead>
                    <TableHead>Nature de Fait</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {operations.map((operation: Operation) => OperationRow(operation))}
            </TableBody>
        </Table>
    );
}