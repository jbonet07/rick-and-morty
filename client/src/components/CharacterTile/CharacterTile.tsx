import React, { useEffect, useState } from "react";
import "./styles.css";
import { Character } from "../../types/CharacterTypes";
import FullHeart from "../../assets/full-heart.png";
import EmptyHeart from "../../assets/empty-heart.png";
interface CharacterTileProps {
  character: Character;
}
export const CharacterTile = (props: CharacterTileProps) => {
  const [selected, setSelected] = useState<boolean>(false);

  useEffect(() => {}, []);

  const handleSelect = () => {
    let listFavs = window.localStorage.getItem("favorites");
    let foo: number[] = [];

    if (listFavs) {
      foo = JSON.parse(listFavs);

      let index = foo.indexOf(props.character.id);
      if (index > -1) {
        foo.splice(index, 1);
        setSelected(false);
      } else {
        foo.push(props.character.id);
        setSelected(true);
      }
    } else {
      setSelected(true);

      foo.push(props.character.id);
    }
    window.localStorage.setItem("favorites", JSON.stringify(foo));
  };

  return (
    <div className="character-container">
      <img src={selected ? FullHeart : EmptyHeart} className="heart-icon" onClick={handleSelect} />

      {/* <img src={EmptyHeart} className="heart-icon" /> */}
      <div>
        <img style={{ width: "100%" }} src={props.character.image} alt={props.character.name} />
      </div>
      <div>
        <div></div>
        <div>
          <b>{props.character.name}</b>
        </div>
        <div>{props.character.species}</div>
        <div>{props.character.status}</div>
      </div>
    </div>
  );
};
