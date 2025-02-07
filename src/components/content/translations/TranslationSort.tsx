import { Dispatch } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/shadcn/ui/select";

import { SortTypeEnum } from "../../../enums/SortTypeEnum.enum";

interface SortOptions {
  label: string;
  value: string;
}

interface TranslationSortProps {
  setSortType: Dispatch<SortTypeEnum>;
}

const TranslationSort = (props: TranslationSortProps) => {
  const { setSortType } = props;

  const sortOptions: SortOptions[] = [
    { label: "Default", value: SortTypeEnum.default },
    { label: "A - Z", value: SortTypeEnum.aToZ },
    { label: "Z - A", value: SortTypeEnum.zToA },
  ];

  return (
    <div id="translation-sort" className="flex flex-row items-center">
      <p className="mr-2 text-lg font-bold sm:text-xl"> Sort by:</p>

      <Select onValueChange={(value: SortTypeEnum) => setSortType(value)}>
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
