import { TableCell, TableRow } from "@/components/ui/table";
import { type Alerte } from "@/types";

export default function AlerteRow(alerte: Alerte) {
    return <TableRow key={alerte.id}>
        <TableCell>{alerte.name}</TableCell>
        <TableCell>{alerte.description}</TableCell>
        <TableCell>{alerte.date}</TableCell>
        <TableCell>{alerte.status}</TableCell>
    </TableRow>;
}