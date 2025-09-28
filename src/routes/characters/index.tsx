import { CharactersLayout } from "./CharactersLayout";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../__root";

export const charactersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: CharactersLayout,
});
