import { Dispatch } from "react";

import { Input } from "@/lib/shadcn/ui/input";

interface SortMenuProps {
  searchSelection: Dispatch<string>;
}

const TranslationSearch = (props: SortMenuProps) => {
  const { searchSelection } = props;

  return (
    <div id="translation-search" className="flex flex-row items-center">
      <p className="mr-2 text-lg font-bold sm:text-xl"> Search:</p>

      <Input onChange={(e) => searchSelection(e.target.value)} />
    </div>
  );
};

export default TranslationSearch;
