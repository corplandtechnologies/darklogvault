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

export default function Dashboard() {
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
    <>
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
      </Card>
      <div className="text-center text-lg">
        <h1 className="font-extrabold text-red-500">STORE INFO</h1>
        <p className="font-bold">
          Our store embodies a self-written engine, anti-DDoS system and a
          bulletproof server. Logs are re-checked and updated after each
          occurrence of issuing bulk purchases. Please do not hesitate to
          contact the support team if you encounter any issue. Please take the
          time to read through our policies. The store disclaims any
          responsibility for any additional actions you take with the purchased
          log in your possession. Funds sent to the store will be allocated to
          the user after two confirmations. Get in touch with the SUPPORT TEAM,
          in case of any queries or inquiries. A token would be issued to any
          account after three instant purchases or a deposit of more than $1000.
          Accounts that have been inactive for six months will be deactivated.
        </p>
      </div>
    </>
  );
}
