import { Outlet, useMatches } from "@tanstack/react-router";

import MainTable from "../../components/layouts/Characters";

export function CharactersLayout() {
  const matches = useMatches();
  const isDetailsActive = matches?.some((m) => m?.routeId === "/$characterId");
  return !isDetailsActive ? <MainTable /> : <Outlet />;
}
