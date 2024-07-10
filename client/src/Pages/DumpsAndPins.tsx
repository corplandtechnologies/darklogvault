import React from 'react';
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
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

const DumpsAndPins = () => {
  // Dummy data
  const data = [
    { balance: "$11,314.89", description: "Missouri, US, Track 2, Pin, Address", price: "$329.00" },
    { balance: "$16,053.75", description: "Ohio, US, Track 1, Pin, Address", price: "$379.00" },
    // Add more data objects here
  ];

  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Dumps + Pins</CardTitle>
        <CardDescription>Latest available dumps and pins.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>BALANCE</TableHead>
              <TableHead className="hidden sm:table-cell">DESCRIPTION</TableHead>
              <TableHead className="hidden sm:table-cell">PRICE</TableHead>
              <TableHead className="hidden md:table-cell">ACTION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.balance}</TableCell>
                <TableCell className="hidden sm:table-cell">{item.description}</TableCell>
                <TableCell className="hidden sm:table-cell">{item.price}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <Badge className="text-xs" variant="secondary">
                    Buy now
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-center mt-4">
          {/* Pagination Component */}
          <Pagination />
        </div>
      </CardContent>
    </Card>
  );
};

// Simple Pagination Component
const Pagination = () => {
  return (
    <div className="flex space-x-1">
      {[...Array(50)].map((_, i) => (
        <span key={i} className="cursor-pointer bg-gray-800 text-white px-2 py-1 rounded hover:bg-gray-700">{i + 1}</span>
      ))}
    </div>
  );
};

export default DumpsAndPins;