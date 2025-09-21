import { PokemonGrid, PokemonsReponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "Pokémons Favoritos",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons Favoritos <small className="text-blue-500">Global state</small>
      </span>

      <PokemonGrid pokemons={[]} />
    </div>
  );
}
