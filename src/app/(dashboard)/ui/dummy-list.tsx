"use client";

import SearchBar from "@components/app-search-bar";
import { Button } from "@components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/common/components/ui/table";
import { useCreateDummy, useGetAllDummies } from "@/domain/dummy/services/dummy-service";
import { Pen, Plus, Trash } from "lucide-react";

const DummyList = () => {
  const { data: dummies, isLoading, isError, error } = useGetAllDummies();
  const { mutate } = useCreateDummy();

  const generateRandomDummyData = () => {
    mutate();
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error instanceof Error ? error.message : "Unknown error"}</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        {/* <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Dummies List</h2> */}
        <SearchBar />
        <Button onClick={generateRandomDummyData}>
          <Plus /> Add dummy
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Dummy</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummies &&
            dummies.map((dummy: any) => (
              <TableRow key={dummy.id}>
                <TableCell className="font-medium">{dummy.id}</TableCell>
                <TableCell>{dummy.dummy}</TableCell>
                <TableCell className="text-right">
                  <Button size={"sm"} variant="destructive">
                    <Trash />
                  </Button>
                  <Button size={"sm"} className="ml-2 bg-orange-400 hover:bg-orange-300">
                    <Pen />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {/* {dummies && (
        <ul>
          {dummies.map((dummy: any) => (
            <li key={dummy.id}>
              <div className="flex gap-3 items-center pb-4 mb-2 border-b border-gray-300">
                <p className="font-bold">{dummy.id}:</p>
                <p>{dummy.dummy}</p>
                <Button variant="destructive">
                  <Trash />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default DummyList;
