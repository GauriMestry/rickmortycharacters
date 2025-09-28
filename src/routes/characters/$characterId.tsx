import { CharacterDetails } from "../../components/layouts/CharacterDetails";
import { charactersRoute } from "./index";
import { createRoute } from "@tanstack/react-router";

export const characterDetailsRoute = createRoute({
  getParentRoute: () => charactersRoute,
  path: "$characterId",
  component: CharacterDetails,
});
