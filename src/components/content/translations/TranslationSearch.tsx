import { Dispatch } from "react";

import { Input } from "@headlessui/react";

interface SortMenuProps {
  searchSelection: Dispatch<string>;
}

const TranslationSearch = (props: SortMenuProps) => {
  const { searchSelection } = props;

  return (
    <div id="translation-search" className="flex flex-row items-center">
      <p className="mr-2 text-lg font-bold sm:text-xl"> Search:</p>

      <Input
        className="w-full cursor-text rounded-sm bg-zinc-300 px-3 py-1 text-lg text-white focus:outline-none dark:bg-zinc-800"
        onChange={(e) => searchSelection(e.target.value)}
      />
    </div>
  );
};

export default TranslationSearch;
