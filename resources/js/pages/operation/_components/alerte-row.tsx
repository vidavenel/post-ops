import { TableCell, TableRow } from "@/components/ui/table";
import { type Alerte } from "@/types";

export default function AlerteRow(alerte: Alerte) {
    return <TableRow key={alerte.numero_alerte}>
        <TableCell>{alerte.numero_alerte}</TableCell>
        <TableCell>{alerte.date_creation}</TableCell>
        <TableCell>{alerte.commune}</TableCell>
        <TableCell>{alerte.numero_affaire}</TableCell>
    </TableRow>;
}