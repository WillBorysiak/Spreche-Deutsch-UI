import { Dispatch } from "react";

import { Input } from "@/lib/shadcn/ui/input";

interface SearchDialogInputProps {
  searchTerm: string;
  setSearchTerm: Dispatch<string>;
}

const SearchDialogInput = (props: SearchDialogInputProps) => {
  const { searchTerm, setSearchTerm } = props;

  return (
    <form id="search-dialog-input" className="my-3 flex w-full items-center">
      <Input
        placeholder="Search categories..."
        value={searchTerm ?? ""}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

export default SearchDialogInput;
