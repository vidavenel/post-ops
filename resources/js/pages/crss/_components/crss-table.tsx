import { Table, TableHeader, TableRow, TableHead, TableBody } from "@/components/ui/table";

import CrssRow from "./crss-row";

import { type Crss } from "@/types";

interface CrssTableProps {
    crss: Crss[];
}

export default function CrssTable({ crss }: CrssTableProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Numero Operation</TableHead>
                    <TableHead>Numero Affaire</TableHead>
                    <TableHead>Commune</TableHead>
                    <TableHead>Thematique Principale</TableHead>
                    <TableHead>Date Debut Operation</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {crss.map((crss: Crss) => CrssRow(crss))}
            </TableBody>
        </Table>
    );
}