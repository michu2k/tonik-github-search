"use client";

import React, {useState} from "react";
import {Input} from "@/components/ui/Input";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useDebouncedCallback} from "use-debounce";
import {SearchIcon} from "lucide-react";

type SearchProps = {
  name: string;
};

const Search = ({name}: SearchProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  const query = searchParams.get(name) || "";
  const [searchValue, setSearchValue] = useState(query);

  const changeQueryParams = useDebouncedCallback((inputValue: string) => {
    const urlSearchParams = new URLSearchParams(searchParams);

    if (!inputValue) {
      urlSearchParams.delete(name);
    } else {
      urlSearchParams.set(name, inputValue);
    }

    // Always reset the page to 1 when searching
    urlSearchParams.set("page", "1");

    replace(`${pathname}?${urlSearchParams.toString()}`);
  }, 350);

  function handleSearchValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim();

    setSearchValue(value);
    changeQueryParams(value);
  }

  return (
    <div className="relative flex w-full">
      <SearchIcon className="text-muted-foreground absolute left-2 top-3 h-4 w-4" />
      <Input
        type="search"
        name={name}
        value={searchValue}
        onChange={handleSearchValueChange}
        className="max-w-[32rem] pl-8"
        placeholder="Search..."
      />
    </div>
  );
};

export {Search};
