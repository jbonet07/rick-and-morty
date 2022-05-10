import React, { useEffect, useState } from "react";
import { CharacterTile, Laoder } from "../components";
import { getAllCharacters } from "../services/CharacterService";
import { Character } from "../types/CharacterTypes";

export const Home = () => {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(10);

  useEffect(() => {
    setLoading(true);
    if (currentPage < maxPage) {
      getAllCharacters(currentPage).then((res) => {
        setCharacterList(res.results);
        setMaxPage(res.info.pages + 1);
        setLoading(false);
      });
    }
  }, [currentPage]);

  return (
    <div style={{ margin: "0 10%", display: "flex", justifyContent: "center" }}>
      {loading ? (
        <div style={{ margin: "auto" }}>
          <Laoder />
        </div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {characterList.map((character: Character) => (
            <div key={character.id}>
              <CharacterTile character={character} />
            </div>
          ))}
          <div>
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
              {" "}
              Previous
            </button>
            <button disabled={currentPage === maxPage - 1} onClick={() => setCurrentPage(currentPage + 1)}>
              {" "}
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
