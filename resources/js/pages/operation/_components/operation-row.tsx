import { TableCell, TableRow } from "@/components/ui/table";

import { type Operation } from "@/types";

export default function OperationRow(operation: Operation) {
    return <TableRow key={operation.id_operation}>
        <TableCell>{operation.numero}</TableCell>
        <TableCell>{operation.date_creation.toLocaleDateString()}</TableCell>
        <TableCell>{operation.nature_de_fait_label}</TableCell>
    </TableRow>;
}