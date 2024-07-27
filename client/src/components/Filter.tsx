import React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ListFilter } from "lucide-react";

interface FilterProps {
  banks: string[];
  onBankSelect: (bank: string) => void; // Updated interface
}

const Filter: React.FC<FilterProps> = ({ banks, onBankSelect }) => {
  // Destructure onBankSelect from props
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-7 gap-1 text-sm mt-5 mb-5"
        >
          <ListFilter className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only">Filter</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Filter by Bank</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {banks.map((bank, index) => (
          <DropdownMenuCheckboxItem
            key={index}
            onClick={() => onBankSelect(bank)} // Corrected typo here
          >
            {bank}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Filter;
