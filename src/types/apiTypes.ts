export type Info = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

export type CharacterOrigin = { name: string; url: string };
export type CharacterLocation = { name: string; url: string };

export type Character = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: CharacterOrigin;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type CharactersResponse = { info: Info; results: Character[] };
