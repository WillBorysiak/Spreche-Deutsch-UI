import { Dispatch } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/shadcn/ui/select";

import { SortOptionsEnum } from "../../../enums/SortOptionsEnum";

interface SortOptions {
  label: string;
  value: string;
}

interface TranslationSortProps {
  setSortType: Dispatch<string>;
}

const TranslationSort = (props: TranslationSortProps) => {
  const { setSortType } = props;

  const sortOptions: SortOptions[] = [
    { label: "Default", value: SortOptionsEnum.default },
    { label: "A - Z", value: SortOptionsEnum.aToZ },
    { label: "Z - A", value: SortOptionsEnum.zToA },
  ];

  return (
    <div id="translation-sort" className="flex flex-row items-center">
      <p className="mr-2 text-lg font-bold sm:text-xl"> Sort by:</p>

      <Select onValueChange={(value) => setSortType(value)}>
        <SelectTrigger className="w-[120px]" aria-controls="radix-:R1mcq:">
          <SelectValue placeholder="Default" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {sortOptions.map((option) => (
              <SelectItem key={option.label} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TranslationSort;
