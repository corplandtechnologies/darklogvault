import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { paypalData } from "@/data";
import { useState } from "react";

export default function Paypal() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPageItems = paypalData.slice(startIndex, endIndex);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <CardTitle>Paypal Logs</CardTitle>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>BALANCE</TableHead>
              <TableHead>DESCRIPTION</TableHead>
              <TableHead>PRICE</TableHead>
              <TableHead>ACTION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentPageItems.map(({ id, balance, description, price }) => (
              <TableRow key={id}>
                <TableCell>{balance}</TableCell>
                <TableCell>{description}</TableCell>
                <TableCell>{price}</TableCell>
                <TableCell>
                  <Button>Buy now</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-xs text-muted-foreground">
          Showing{" "}
          <strong>
            {currentPage}-{currentPageItems.length}
          </strong>{" "}
          of <strong>{paypalData.length}</strong> items
        </div>
        <div className="flex justify-center mt-4">
          <Button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {"<"}
          </Button>
          <Button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(paypalData.length / itemsPerPage)
            }
          >
            {">"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
