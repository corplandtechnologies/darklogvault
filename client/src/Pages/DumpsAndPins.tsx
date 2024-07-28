import { createOrder } from "@/api";
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
import { useAuth } from "@/context/AuthContext";
import { dumpsAndPinsData } from "@/data";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function DumpsAndPins() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPageItems = dumpsAndPinsData.slice(startIndex, endIndex);

  const handleOrder = async (id: number) => {
    // Set loading to true before starting any asynchronous operation
    setIsLoading(true);

    try {
      const selectedItem = dumpsAndPinsData.find((item) => item.id === id);
      if (!selectedItem) {
        throw new Error("Item not found");
      }

      if (selectedItem.price > currentUser?.wallet) {
        toast.error("Insufficient balance! Please make a deposit.");
        navigate("/deposit");
        return;
      }

      const { data } = await createOrder(
        selectedItem.balance,
        selectedItem.description,
        currentUser?._id,
        selectedItem.price
      );

      if (data) {
        setIsLoading(false); // Ensure this is outside the try block but still within the success path
        toast.success("Order successful!");
        navigate("/orders");
        window.location.reload();
      }
    } catch (error) {
      console.error("Order failed:", error);
      toast.error("Order failed. Please check your selection.");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

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
            {currentPageItems.map(({ id, balance, description, price }) => (
              <TableRow key={id}>
                <TableCell>{balance}</TableCell>
                <TableCell>{description}</TableCell>
                <TableCell>${Number(price).toFixed(2)}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      handleOrder(id);
                    }}
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : " Buy now"}
                  </Button>
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
          of <strong>{dumpsAndPinsData.length}</strong> items
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
              currentPage === Math.ceil(dumpsAndPinsData.length / itemsPerPage)
            }
          >
            {">"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
