import { useEffect, useState } from "react";

import { faSearch } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DialogDescription } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/lib/shadcn/ui/dialog";

import { Button } from "../../lib/shadcn/ui/button";
import { Category } from "../../models/Category.model";
import SearchDialogInput from "./SearchDialogInput";
import SearchDialogResults from "./SearchDialogResults";

interface SearchDialogProps {
  categories: Category[] | [];
  display: "desktop" | "mobile";
}

const SearchDialog = (props: SearchDialogProps) => {
  const { categories, display } = props;

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);

  const closeDialog = () => {
    setSearchTerm("");
    setDialogOpen(false);
  };

  // filters categories based on search
  useEffect(() => {
    if (!searchTerm) {
      return setFilteredCategories(categories);
    }

    const filteredCategories = categories.filter((category) => {
      const searchTermLowerCase = searchTerm.toLowerCase();
      const categoryName = category.name.toLowerCase();

      const categoryMatchesSearch = categoryName.includes(searchTermLowerCase);

      return categoryMatchesSearch;
    });

    setFilteredCategories(filteredCategories);
  }, [searchTerm, categories]);

  return (
    <Dialog open={dialogOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" onClick={() => setDialogOpen(true)}>
          <FontAwesomeIcon icon={faSearch} size="1x" className="lg:mr-2" />
          {display === "desktop" ? "Search..." : ""}
        </Button>
      </DialogTrigger>

      <DialogContent
        className="top-1/4 w-[90vw] md:top-1/2 md:w-full [&>button]:hidden"
        onInteractOutside={() => closeDialog()}
      >
        <DialogHeader>
          <DialogTitle>Categories</DialogTitle>
          <VisuallyHidden>
            <DialogDescription />
          </VisuallyHidden>
        </DialogHeader>

        <SearchDialogInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <SearchDialogResults
          searchResults={filteredCategories}
          selectSearchResult={closeDialog}
        />
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
