import { CircleUser, Menu, Package2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card } from "./ui/card";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          to="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link
          to="/"
          className="text-foreground transition-colors hover:text-foreground"
        >
          Dashboard
        </Link>
        <Link
          to="/deposit"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Deposit
        </Link>
        <Link
          to="/dumps"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Dumps + Pins
        </Link>
        <Link
          to="/banks/us"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          US Bank Logs
        </Link>
        <Link
          to="/banks/uk"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          UK Bank Logs
        </Link>
        <Link
          to="/banks/canada"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Canada Bank Logs
        </Link>
        <Link
          to="/cashapp"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          CashApp
        </Link>
        <Link
          to="/paypal"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Paypal
        </Link>
        <Link
          to="/orders"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Orders
        </Link>
        <Link
          to="/support"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Support
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link to="/" className="hover:text-foreground">
              Dashboard
            </Link>
            <Link
              to="/deposit"
              className="text-muted-foreground hover:text-foreground"
            >
              Deposit
            </Link>
            <Link
              to="/dumps"
              className="text-muted-foreground hover:text-foreground"
            >
              Dumps + Pins
            </Link>
            <Link
              to="/banks/us"
              className="text-muted-foreground hover:text-foreground"
            >
              US Bank Logs
            </Link>
            <Link
              to="/banks/uk"
              className="text-muted-foreground hover:text-foreground"
            >
              UK Bank Logs
            </Link>
            <Link
              to="/banks/canada"
              className="text-muted-foreground hover:text-foreground"
            >
              Canada Bank Logs
            </Link>
            <Link
              to="/cashapp"
              className="text-muted-foreground hover:text-foreground"
            >
              CashApp
            </Link>
            <Link
              to="/paypal"
              className="text-muted-foreground hover:text-foreground"
            >
              Paypal
            </Link>
            <Link
              to="/orders"
              className="text-muted-foreground hover:text-foreground"
            >
              My Orders
            </Link>
            <Link
              to="/support"
              className="text-muted-foreground hover:text-foreground"
            >
              Support
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Card>
              <div className="p-1 text-center">
                $ {currentUser?.wallet.toFixed(2)}
              </div>
            </Card>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{currentUser?.username}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link to="/deposit">
              <DropdownMenuItem>Wallet</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
