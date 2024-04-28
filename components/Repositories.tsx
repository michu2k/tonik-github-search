"use client";

import React from "react";
import {format} from "date-fns";
import {useGetGitHubRepositories} from "@/hooks/useGetGitHubRepositories";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "./ui/Table";

const Repositories = () => {
  const {data, isError, isFetching} = useGetGitHubRepositories();
  const {items: repositories = []} = data || {};

  function displayTableBody() {
    if (isError) {
      return (
        <TableRow>
          <TableCell className="text-sm" colSpan={4}>
            There was an error when fetching your data. Try again later.
          </TableCell>
        </TableRow>
      );
    }

    return repositories.map(({id, name, owner, stargazers_count, created_at}) => (
      <TableRow key={id}>
        <TableCell className="font-medium">{name}</TableCell>
        <TableCell>{owner.login}</TableCell>
        <TableCell>{stargazers_count}</TableCell>
        <TableCell className="text-right">{format(created_at, "yyyy-MM-dd")}</TableCell>
      </TableRow>
    ));
  }

  return (
    <div className="relative space-y-8">
      {isFetching ? <p className="absolute -top-2 z-10 text-xs">Fetching repositories...</p> : ""}

      <Table>
        <TableCaption>List of GitHub repositories. Use the search bar to filter the results.</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Stars</TableHead>
            <TableHead className="text-right">Created at</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>{displayTableBody()}</TableBody>
      </Table>
    </div>
  );
};

export {Repositories};