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

export default function CashApp() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <CardTitle>CashApp Logs</CardTitle>
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
            <TableRow>
              <TableCell>$13,812.20</TableCell>
              <TableCell>
                Login Credentials + Mail Access + Auth Cookies
              </TableCell>
              <TableCell>$402.00</TableCell>
              <TableCell>
                <Button>Buy now</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>$13,464.92</TableCell>
              <TableCell>
                Login Credentials + Mail Access + IP Location + Auth Cookies
              </TableCell>
              <TableCell>$397.00</TableCell>
              <TableCell>
                <Button>Buy now</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>$18,444.71</TableCell>
              <TableCell>
                Login Credentials + Mail Access + Auth Cookies
              </TableCell>
              <TableCell>$464.00</TableCell>
              <TableCell>
                <Button>Buy now</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>$18,258.40</TableCell>
              <TableCell>
                Login Credentials + Mail Access + IP Location + Auth Cookies
              </TableCell>
              <TableCell>$461.00</TableCell>
              <TableCell>
                <Button>Buy now</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>$18,398.32</TableCell>
              <TableCell>
                Login Credentials + Mail Access + IP Location + Auth Cookies
              </TableCell>
              <TableCell>$463.00</TableCell>
              <TableCell>
                <Button>Buy now</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>$13,597.15</TableCell>
              <TableCell>
                Login Credentials + Mail Access + IP Location + Auth Cookies
              </TableCell>
              <TableCell>$399.00</TableCell>
              <TableCell>
                <Button>Buy now</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> items
        </div>
        <div className="flex justify-center mt-4">
          <Button className="mx-2">{"<"}</Button>
          <Button className="mx-2">{">"}</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
