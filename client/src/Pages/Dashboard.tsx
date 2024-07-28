import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Dashboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <CardTitle>Dashboard</CardTitle>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>BALANCE</TableHead>
              <TableHead>TYPE</TableHead>
              <TableHead>EXTRACTION PRICE</TableHead>
              <TableHead>EXTRACT</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-center font-bold text-2xl" colSpan={4}>
                No orders yet
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      {/* <CardFooter className="flex justify-between">
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> items
        </div>
        <div className="flex justify-center mt-4">
          <Button className="mx-2">{"<"}</Button>
          <Button className="mx-2">{">"}</Button>
        </div>
      </CardFooter> */}
    </Card>
  );
}
