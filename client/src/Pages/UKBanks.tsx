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
import { ukbanks } from "@/data";

export default function UKBanks() {
  return (
    <Card>
      <CardHeader>
        <Filter banks={ukbanks} />
        <CardTitle>
          <CardTitle>UK Bank Logs</CardTitle>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
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
            <TableRow>
              <TableCell>$11,729.06</TableCell>
              <TableCell>Saving + Checking</TableCell>
              <TableCell>Bank + Mail Access + Billing</TableCell>
              <TableCell>KS</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>27/3/1965</TableCell>
              <TableCell>$375.00</TableCell>
              <TableCell>
                <Button>Buy now</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>$11,562.80</TableCell>
              <TableCell>Saving + Checking</TableCell>
              <TableCell>Bank + Mail Access + Billing</TableCell>
              <TableCell>MI</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>16/5/1979</TableCell>
              <TableCell>$372.00</TableCell>
              <TableCell>
                <Button>Buy now</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>$8,500.69</TableCell>
              <TableCell>Saving + Checking</TableCell>
              <TableCell>Bank + Mail Access + Billing</TableCell>
              <TableCell>AZ</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>26/2/1990</TableCell>
              <TableCell>$313.00</TableCell>
              <TableCell>
                <Button>Buy now</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>$10,460.44</TableCell>
              <TableCell>Saving + Checking</TableCell>
              <TableCell>Bank + Mail Access + Billing + Cookies</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Male</TableCell>
              <TableCell>12/3/1994</TableCell>
              <TableCell>$351.00</TableCell>
              <TableCell>
                <Button>Buy now</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-5</strong> of <strong>32</strong> items
        </div>
        <div className="flex justify-center mt-4">
          <Button className="mx-2">{"<"}</Button>
          <Button className="mx-2">{">"}</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
