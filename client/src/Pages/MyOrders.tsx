import { getUserOrders } from "@/api";
import { PaymentDialog } from "@/components/PaymentDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const { data } = await getUserOrders(currentUser?._id);
        setIsLoading(false);
        setOrders(data);
      } catch (error) {
        console.error("Order failed:", error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, [currentUser]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <CardTitle>My Orders</CardTitle>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>BALANCE</TableHead>
              <TableHead>TYPE</TableHead>
              {orders.length > 0 && (
                <>
                  <TableHead>EXTRACTION PRICE</TableHead>
                  <TableHead>EXTRACT</TableHead>
                </>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {!isLoading ? (
              <>
                {orders.length > 0 ? (
                  <>
                    {orders?.map(
                      ({
                        _id,
                        balance,
                        type,
                        extractionPrice,
                        isExtracted,
                      }) => (
                        <TableRow key={_id}>
                          <TableCell>{balance}</TableCell>
                          <TableCell>{type}</TableCell>
                          <TableCell>
                            ${Number(extractionPrice).toFixed(2)}
                          </TableCell>
                          <TableCell>
                            {isExtracted ? (
                              <>
                                <Button disabled={isLoading}>
                                  {isLoading ? "Loading..." : " Extracted"}
                                </Button>
                              </>
                            ) : (
                              <>
                                <PaymentDialog />
                              </>
                            )}
                          </TableCell>
                        </TableRow>
                      )
                    )}
                  </>
                ) : (
                  <>
                    <TableRow>
                      <TableCell
                        className="text-center font-bold text-2xl"
                        colSpan={4}
                      >
                        No orders yet
                      </TableCell>
                    </TableRow>
                  </>
                )}
              </>
            ) : (
              <>
                <TableRow>
                  <TableCell
                    className="text-center font-bold text-2xl"
                    colSpan={4}
                  >
                    Loading...
                  </TableCell>
                </TableRow>
              </>
            )}
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
