import React, { useEffect, useState } from "react";
import { CharacterTile } from "../components";
import { getAllCharacters } from "../services/CharacterService";
import { Character } from "../types/CharacterTypes";

export const Home = () => {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  useEffect(() => {
    getAllCharacters().then((res) => setCharacterList(res.results));
  }, []);

  return (
    <div>
      {characterList.map((character: Character) => (
        <div key={character.id}>
          <CharacterTile />
        </div>
      ))}
    </div>
  );
};
