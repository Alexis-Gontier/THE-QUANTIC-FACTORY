import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn-ui/table";
import { Button } from "../shadcn-ui/button";
import Link from "next/link";
import { Eye, Map } from "lucide-react";

type DataTableProps = {
  searchParams: { [key: string]: string | undefined };
};

export default function DataTable({ searchParams }: DataTableProps) {
  const { place } = searchParams;

  return (
    <div className="rounded-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Adresse</TableHead>
            <TableHead>Arrondissement</TableHead>
            <TableHead>Horraire</TableHead>
            <TableHead>Prix</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Le Meurice</TableCell>
            <TableCell>Restaurant</TableCell>
            <TableCell>228 Rue de Rivoli, 75001 Paris</TableCell>
            <TableCell>1er</TableCell>
            <TableCell>12:00 - 14:30, 19:00 - 22:30</TableCell>
            <TableCell>€€€€</TableCell>
            <TableCell>
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer"
                asChild
              >
                <Link href="">
                  <Map />
                </Link>
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
