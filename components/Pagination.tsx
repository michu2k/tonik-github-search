"use client";

import React from "react";
import {Button} from "@/components/ui/Button";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

type PaginationProps = {
  currentPage: number;
  maxPage: number;
};

/**
 * This is very primitive pagination component, as it doesn't support jumping to a specific page.
 */
const Pagination = ({currentPage, maxPage}: PaginationProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  function changePage(pageNumber: number) {
    const urlSearchParams = new URLSearchParams(searchParams);

    urlSearchParams.set("page", `${pageNumber}`);

    replace(`${pathname}?${urlSearchParams.toString()}`);
  }

  return (
    <div className="flex items-center gap-4">
      {currentPage > 1 ? (
        <Button variant="secondary" onClick={() => changePage(currentPage - 1)}>
          Previous page
        </Button>
      ) : null}

      {currentPage < maxPage ? (
        <Button variant="secondary" className="ml-auto" onClick={() => changePage(currentPage + 1)}>
          Next page
        </Button>
      ) : null}
    </div>
  );
};

export {Pagination};
