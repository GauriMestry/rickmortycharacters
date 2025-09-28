import {
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";

import type { Character } from "../../types/apiTypes";
import { getRickMortyCharacters } from "../../apis/services";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState, type ReactElement } from "react";
import Table from "../common/Table";
import Pagination from "../common/Pagination";
import Toolbar from "../common/Toolbar";
import { Link } from "@tanstack/react-router";

export default function MainTable(): ReactElement {
  const [page, setPage] = useState(() => {
    const stored = localStorage.getItem("charactersPage");
    return stored ? Number(stored) : 1;
  });
  const columns: ColumnDef<Character>[] = useMemo(
    () => [
      {
        accessorKey: "image",
        header: "Avatar",
        size: 60,
        cell: (info) => (
          <img
            src={info.getValue() as string}
            alt="character"
            style={{
              width: "50px",
              borderRadius: "50%",
              display: "block",
              margin: "0 auto",
            }}
          />
        ),
      },
      {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
          <Link
            to={`/${row?.original?.id}`}
            style={{ color: "#2563eb", textDecoration: "none" }}
          >
            {row?.original?.name}
          </Link>
        ),
      },
      { accessorKey: "status", header: "Status" },
      { accessorKey: "species", header: "Species" },
      { accessorKey: "gender", header: "Gender" },
      {
        accessorKey: "origin.name",
        header: "Origin",
        cell: (info) => info.row.original.origin.name,
      },
      {
        accessorKey: "location.name",
        header: "Location",
        cell: (info) => info.row.original.location.name,
      },
    ],
    []
  );

  const {
    data: characterList,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["characters", page],
    queryFn: () => getRickMortyCharacters(page),
    placeholderData: (prevData) => prevData,
  });

  const table = useReactTable({
    data: characterList?.results ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handlePage = (type: string): void => {
    setPage((oldPage) => {
      let newPage = oldPage;
      if (type === "prev") newPage = Math.max(oldPage - 1, 1);
      else if (type === "next")
        newPage = Math.min(oldPage + 1, Number(characterList?.info?.pages));

      localStorage.setItem("charactersPage", newPage.toString()); // persist
      return newPage;
    });
  };

  const handleRefresh = (): void => {
    refetch();
  };
  if (isError) return <p className="error">Failed to load characters.</p>;

  return (
    <>
      <div className="table-wrapper">
        <h2 className="table-title">Rick & Morty Characters</h2>
        <Toolbar btnList={[{ name: "Refresh", handleClick: handleRefresh }]} />
        <Table table={table} loader={isLoading || isFetching} />
      </div>
      <Pagination
        page={page}
        handlePage={handlePage}
        pages={characterList?.info?.pages ?? 1}
      />
    </>
  );
}
