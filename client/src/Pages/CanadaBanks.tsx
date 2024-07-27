import Filter from "@/components/Filter";
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
import { canadaBanks, canadaBanksData } from "@/data";
import { useState } from "react";

export default function CanadaBanks() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedBank, setSelectedBank] = useState("");

  const filteredData = canadaBanksData.filter(
    (item) => item.bankName === selectedBank || selectedBank === ""
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = filteredData.slice(startIndex, endIndex);

  return (
    <Card>
      <CardHeader>
        <Filter banks={canadaBanks} onBankSelect={setSelectedBank} />
        <CardTitle>
          <CardTitle>Canada Bank Logs</CardTitle>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>BANK</TableHead>
              <TableHead>BALANCE</TableHead>
              <TableHead>TYPE</TableHead>
              <TableHead>INFO</TableHead>
              <TableHead>STATE</TableHead>
              <TableHead>GENDER</TableHead>
              <TableHead>D.O.B</TableHead>
              <TableHead>PRICE</TableHead>
              <TableHead>ACTION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map(
              ({
                id,
                bankName,
                balance,
                type,
                info,
                state,
                gender,
                dob,
                price,
              }) => (
                <TableRow key={id}>
                  <TableCell>{bankName}</TableCell>
                  <TableCell>{balance}</TableCell>
                  <TableCell>{type}</TableCell>
                  <TableCell>{info}</TableCell>
                  <TableCell>{state}</TableCell>
                  <TableCell>{gender}</TableCell>
                  <TableCell>{dob}</TableCell>
                  <TableCell>{price}</TableCell>
                  <TableCell>
                    <Button>Buy now</Button>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-xs text-muted-foreground">
          Showing{" "}
          <strong>
            {currentPage}-{currentPageItems.length}
          </strong>{" "}
          of <strong>{filteredData.length}</strong> items
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
              currentPage === Math.ceil(filteredData.length / itemsPerPage)
            }
          >
            {">"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
