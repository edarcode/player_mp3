import { sings } from "../data/sings";
import { createArtBox } from "./ArtBox";
import { createControlsBox } from "./ControlsBox";

export const createPlayerMp3 = () => {
  const PlayerMp3 = document.createElement("article");
  PlayerMp3.classList.add("player");

  let index = 0;

  const handleNext = () => {
    if (index === sings.length - 1) {
      index = 0;
    } else {
      index++;
    }
    const { image, title, artist, audio } = sings[index];
    const ArtBoxNew = createArtBox({ img: image });
    const ArtBoxOld = document.querySelector(".art-box");

    const ControlsBoxNew = createControlsBox({
      title,
      artist,
      disco: audio,
      handleNext,
    });
    const ControlsOld = document.querySelector(".controls");

    PlayerMp3.replaceChild(ArtBoxNew, ArtBoxOld);
    PlayerMp3.replaceChild(ControlsBoxNew, ControlsOld);
  };

  const { image, title, artist, audio } = sings[index];

  const ArtBox = createArtBox({ img: image });
  const ControlsBox = createControlsBox({
    title,
    artist,
    disco: audio,
    handleNext,
  });

  PlayerMp3.appendChild(ArtBox);
  PlayerMp3.appendChild(ControlsBox);

  return PlayerMp3;
};
