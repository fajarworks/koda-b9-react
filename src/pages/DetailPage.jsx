import React from "react";
import { useParams } from "react-router";
import fetchData from "../utils/fetchUrl";

function DetailPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const detail = await fetchData(
          `https://pokeapi.co/api/v2/pokemon/${id}/`,
        );
        setPokemon(detail);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);




  return (
    <>
      {loading &&
        <div className=" min-h-screen flex items-center justify-center text-red-500">
        <p>loading......</p>
        </div>
      }
      {pokemon && (
        <div className="min-h-screen items-center flex flex-col p-5">
          <div className="border rounded-lg w-50 h-50 flex items-center justify-center">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="object-cover"
            />
          </div>
          <p className="capitalize font-bold text-2xl">{pokemon.name} </p>
          <div className="border border-orange-300">
            {pokemon.abilities.map((a) => {
              return (
                <p className="" key={a.ability.name}>
                  {a.ability.name}
                </p>
              );
            })}
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4 w-full max-w-md">
            {pokemon.stats.map((s, idx) => {
              return (
                <div
                  key={idx}
                  className="border border-orange-300 rounded-lg flex flex-col items-center justify-center py-3"
                >
                  <p className="capitalize text-xs text-orange-500">
                    {s.stat.name}
                  </p>
                  <p className="font-bold text-lg text-orange-700">
                    {s.base_stat}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
export default DetailPage;
