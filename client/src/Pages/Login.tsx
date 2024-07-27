import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "@/api";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const { data } = await loginUser(email, password); // Assuming the API call returns a response with a data property containing user and token
    toast("Login successful! Redirecting...");
    localStorage.setItem("token", data?.token); // Store token
    localStorage.setItem("user", JSON.stringify(data?.user)); // Store user object
    navigate("/");
  } catch (error) {
    console.error("Login failed:", error);
    toast("Login failed. Please check your credentials.");
  }
};
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-login">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
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
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                className="w-full">
                Login
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="underline cursor-pointer">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
