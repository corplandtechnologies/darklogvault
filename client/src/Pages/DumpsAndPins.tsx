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

export default function DumpsAndPins() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dumps + Pins</CardTitle>
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
              <TableCell>$11,314.89</TableCell>
              <TableCell>Missouri, US, Track 2, Pin, Address</TableCell>
              <TableCell>$314.89</TableCell>
              <TableCell>
                <Button>Buy now</Button>
              </TableCell>
            </TableRow>
            {/* Repeat the above TableRow pattern for each item */}
            <TableRow>
              <TableCell>$17,995.28</TableCell>
              <TableCell>Nebraska, US, Track 2, Pin, Address</TableCell>
              <TableCell>$1314.89</TableCell>
              <TableCell>
                <Button>Buy now</Button>
              </TableCell>
            </TableRow>
            {/* Add more TableRow components as needed */}
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
