import { createOrder } from "@/api";
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
import { useAuth } from "@/context/AuthContext";
import { ukBanks, ukBanksData } from "@/data";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function UKBanks() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedBank, setSelectedBank] = useState("");
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const filteredData = ukBanksData.filter(
    (item) => item.bankName === selectedBank || selectedBank === ""
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = filteredData.slice(startIndex, endIndex);

  const handleOrder = async (id: number) => {
    setIsLoading(true);
    try {
      const selectedItem = filteredData.find((item) => item.id === id);
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
        selectedItem.type,
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
        <Filter banks={ukBanks} onBankSelect={setSelectedBank} />
        <CardTitle>
          <CardTitle>UK Bank Logs</CardTitle>
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
              currentPage === Math.ceil(ukBanksData.length / itemsPerPage)
            }
          >
            {">"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
