import React from "react";
import { Link, useSearchParams } from "react-router";
import useFetch from "../hooks/useFetch";
function FetchPokemon() {
  const { data, loading, error } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0",
  );
  const {data: types} = useFetch("https://pokeapi.co/api/v2/type?limit=20")
  const { results } = data;
  const [datas, setDatas] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get("name") || "";
  const t = searchParams.get("type") || "";

  const handleSearch = (e) => {
    const value = e.target.value;
    if (value) {
      searchParams.set("name", value);
    } else {
      searchParams.delete("name");
    }
    setSearchParams(searchParams);
  };

  const handleType = (type) => {
    if (t === type) {
      searchParams.delete("type");
    } else {
      searchParams.set("type", type);
    }
    setSearchParams(searchParams);
  };

  React.useEffect(() => {
    (async function () {
      const detailPokemon = results?.map(async (a) => {
        const res = await fetch(a.url);
        const { id, name, types, sprites } = await res.json();
        const sprite = sprites.front_default;
        const type = types.map((t) => {
          return t.type.name;
        });
        return {
          id,
          name,
          type,
          sprite,
        };
      });
      const pokemons = results ? await Promise.all(detailPokemon) : [];
      setDatas(pokemons);
    })();
  }, [results]);

  const filterChar = datas.filter((pokemon) => {
    const matchName = pokemon.name.includes(q);

    const matchType = t ? pokemon.type.includes(t) : true;

    console.log(matchName, matchType);

    return matchName && matchType;
  });

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section className="max-w-7xl mx-auto min-h-screen p-8">
          <h1 className="text-center my-2 font-bold text-2xl">
            POKEMON CHARACTERS
          </h1>
          <form className="justify-center mb-5 w-full">
            <div className="flex">
              <input
                onChange={handleSearch}
                className=" w-full border rounded-md px-2 py-1"
                type="text"
                name="name"
                id="name"
              />
              <button className="min-w-20 cursor-pointer bg-green-500 rounded-lg">
                Search
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center">
            {types.results?.map((type) => {
              const isActive = t === type.name;

              return (
                <button
                  type="button"
                  key={type.name}
                  onClick={() => handleType(type.name)}
                  className={`px-2 py-0.5 rounded-full cursor-pointer capitalize ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "bg-orange-200 text-orange-500"
                  }`}
                >
                  {type.name}
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-4 gap-3">
            {filterChar.length <= 0 ? (
              <p>{search} tidak ditemukan</p>
            ) : (
              filterChar.map((item) => {
                return (
                  <article
                    className="border border-orange-50 bg-orange-100 rounded-lg flex justify-between items-center gap-2"
                    key={item.id}
                  >
                    <Link
                      to={`/pokemon/${item.id}`}
                      className="flex items-center justify-center w-full"
                    >
                      <div>
                        <img
                          className="w-50"
                          src={item.sprite}
                          alt={item.name}
                        />
                      </div>

                      <div className="flex flex-col w-full gap-2 text-center ">
                        <p className="font-semibold capitalize">{item.name}</p>

                        <div className="flex items-center justify-center gap-2">
                          {item.type.map((t) => {
                            return (
                              <span
                                className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm capitalize"
                                key={t}
                                onClick={() => handleType(t.name)}
                              >
                                {t}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })
            )}
          </div>
        </section>
      )}
    </>
  );
}

export default FetchPokemon;
