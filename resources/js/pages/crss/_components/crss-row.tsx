import { TableCell, TableRow } from "@/components/ui/table";

import { type Crss } from "@/types";

export default function CrssRow(crss: Crss) {
    return <TableRow key={crss.id_operation}>
        <TableCell>{crss.numero_operation}</TableCell>
        <TableCell>{crss.numero_affaire}</TableCell>
        <TableCell>{crss.commune}</TableCell>
        <TableCell>{crss.thematique_principale}</TableCell>
        <TableCell>{crss.date_debut_operation}</TableCell>
    </TableRow>;
}