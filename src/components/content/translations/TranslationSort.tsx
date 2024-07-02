import { Dispatch, useState } from "react";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";

import { SortOptionsEnum } from "../../../enums/SortOptionsEnum";

interface SortingOptions {
  label: string;
  value: string;
}

interface SortMenuProps {
  sortSelection: Dispatch<string>;
}

const TranslationSort = (props: SortMenuProps) => {
  const { sortSelection } = props;

  const sortingOptions: SortingOptions[] = [
    { label: "Default", value: SortOptionsEnum.default },
    { label: "A - Z", value: SortOptionsEnum.aToZ },
    { label: "Z - A", value: SortOptionsEnum.zToA },
  ];

  const [sortState, setSortState] = useState<SortingOptions>(sortingOptions[0]);

  return (
    <div id="translation-sort" className="flex flex-row items-center">
      <p className="mr-2 text-lg font-bold sm:text-xl"> Sort by:</p>

      <Listbox value={sortState} onChange={setSortState}>
        <ListboxButton className="relative w-28 rounded-sm bg-zinc-300 p-1 text-center text-lg hover:bg-zinc-400 dark:bg-zinc-800 dark:hover:bg-zinc-700 sm:text-xl">
          <p>{sortState.label}</p>
        </ListboxButton>

        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-28 rounded-sm p-1",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
          )}
        >
          {sortingOptions.map((option) => (
            <ListboxOption
              key={option.label}
              value={option}
              className="rounded-sm bg-zinc-300 px-3 py-1.5 text-center hover:cursor-pointer hover:underline dark:bg-zinc-800"
              onClick={() => {
                sortSelection(option.value);
              }}
            >
              <div className="font-rosario text-lg sm:text-xl">
                {option.label}
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default TranslationSort;
