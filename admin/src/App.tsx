import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { addBalance } from "./api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState<any>("");
  const [isLoading, setIsLoading] = useState(false);
  console.log(amount, email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await addBalance(email, amount);
      toast.success("Balance Added successfully!");
      setIsLoading(false);
      window.location.reload();
    } catch (error) {
      const { message }: any = error;
      console.error("something went wrong!", error);
      toast.error(message || "Something Went Wrong!");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Toaster />
      <div className="flex flex-col justify-center items-center h-[100vh] bg-login">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Add Balance</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                {/* Email Input */}
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* Password Input */}
                <div className="grid gap-2">
                  <Label htmlFor="password">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    required
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                </div>
                <Button type="submit" className="w-full">
                  {isLoading ? "Loading..." : "Submit"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
