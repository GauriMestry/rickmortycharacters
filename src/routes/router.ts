import NotFoundComponent from "../components/common/NotFoundComponent";
import { characterDetailsRoute } from "./characters/$characterId";
import { charactersRoute } from "./characters/index";
import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./__root";

export const router = createRouter({
  routeTree: rootRoute.addChildren([
    charactersRoute.addChildren([characterDetailsRoute]),
  ]),
  defaultNotFoundComponent: NotFoundComponent,
});
