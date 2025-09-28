import type { Character, CharactersResponse } from "../types/apiTypes";

import axios from "axios";

export const getRickMortyCharacters = async (
  page: number
): Promise<CharactersResponse> =>
  await axios
    .get<CharactersResponse>(
      `https://rickandmortyapi.com/api/character?page=${page}`
    )
    .then((res) => res?.data)
    .catch(() => {
      throw new Error("Failed to fetch the data!!!");
    });

export const getCharacterDetailsById = async (id: number): Promise<Character> =>
  await axios
    .get<Character>(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res?.data)
    .catch(() => {
      throw new Error("Failed to fetch the data!!!");
    });
