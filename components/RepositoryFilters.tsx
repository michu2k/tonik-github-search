"use client";

import React, {useState} from "react";
import {Button} from "./ui/Button";
import {ArrowDownIcon, ArrowUpIcon} from "lucide-react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

/** Simple component that allows the user to sort repositories by amount of stars */
const RepositoryFilters = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  const order = searchParams.get("order");
  const [selectedOrder, setSelectedOrder] = useState<string | null>(order);

  function handleChangeOrder(order: "asc" | "desc") {
    const currParams = new URLSearchParams(searchParams);

    currParams.set("order", order);
    currParams.set("sort", "stars");

    setSelectedOrder(order);

    replace(`${pathname}?${currParams.toString()}`);
  }

  return (
    <div className="flex items-start gap-2">
      <Button
        size="sm"
        variant={selectedOrder === "asc" ? "default" : "secondary"}
        className="gap-2"
        onClick={() => handleChangeOrder("asc")}>
        Order by stars
        <ArrowUpIcon size={16} />
      </Button>

      <Button
        size="sm"
        variant={selectedOrder === "desc" ? "default" : "secondary"}
        className="gap-2"
        onClick={() => handleChangeOrder("desc")}>
        Order by stars
        <ArrowDownIcon size={16} />
      </Button>
    </div>
  );
};

export {RepositoryFilters};
