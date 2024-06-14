import { Fragment, useEffect, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";

import { Category } from "../../models/Category.model";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
}

const SearchModal = (props: SearchModalProps) => {
  const { isOpen, onClose, categories } = props;

  const [inputValue, setInputValue] = useState("");
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);

  const handleInputChange = (value: string) => setInputValue(value);

  // filters based on search
  useEffect(() => {
    if (!inputValue) return setFilteredCategories(categories);

    const filtered = categories.filter((category) => {
      const categoryTitle = category.name.toLowerCase();
      const inputValueLower = inputValue.toLowerCase();

      return categoryTitle.includes(inputValueLower);
    });

    setFilteredCategories(filtered);
  }, [inputValue, categories]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm" />
        </Transition.Child>

        <div id="dialog-container" className="fixed inset-x-0 top-20">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="no-scrollbar dark:dark-bg max-h-[400px] w-full max-w-md transform rounded-sm bg-zinc-200 p-5 text-center align-middle shadow-xl transition-all">
                <SearchInput onInputChange={handleInputChange} />
                <SearchResults
                  searchResults={filteredCategories}
                  onClose={onClose}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SearchModal;
