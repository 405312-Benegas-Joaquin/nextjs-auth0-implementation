// "use client";

import React /* , { useState } */ from "react";
import { Input } from "@components/ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

const SearchBar = (/* { onSearch }: { onSearch: (value: string) => void } */) => {
  /*   const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  }; */

  return (
    <div className="flex items-center w-full max-w-xs border rounded-lg">
      <Input
        /*  value={searchTerm}
        onChange={handleChange} */
        placeholder="Buscar..."
        className="flex-1 z-10 border-none transition-all duration-300"
      />
      <Button
        variant="outline"
        /* onClick={handleSearchClick} */
        className="px-4 py-2 text-gray-600 border-l border-r-0 border-t-0 border-b-0 border-gray-200"
      >
        <Search className="text-gray-600" />
      </Button>
    </div>
  );
};

export default SearchBar;
