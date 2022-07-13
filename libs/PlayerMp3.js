import { sings } from "../data/sings";
import { replaceArtBox } from "../utils/replaceArtBox";
import { replaceControlsBox } from "../utils/replaceControlsBox";
import { createArtBox } from "./ArtBox";
import { createControlsBox } from "./ControlsBox";

export const createPlayerMp3 = async () => {
  const PlayerMp3 = document.createElement("article");
  PlayerMp3.classList.add("player");

  let index = 0;
  const lastIndexSings = sings.length - 1;

  function handleNext() {
    if (index === lastIndexSings) {
      index = 0;
    } else {
      index++;
    }
    replaceArtBox({ index, lib: PlayerMp3 });
    replaceControlsBox({ index, lib: PlayerMp3, handleBack, handleNext });
  }

  function handleBack() {
    if (index === 0) {
      index = lastIndexSings;
    } else {
      index--;
    }
    replaceArtBox({ index, lib: PlayerMp3 });
    replaceControlsBox({ index, lib: PlayerMp3, handleBack, handleNext });
  }

  const { image, title, artist, audio } = sings[index];

  const { ArtBox } = createArtBox({ img: image });
  const { ControlsBox } = await createControlsBox({
    title,
    artist,
    disco: audio,
    handleBack,
    handleNext,
  });

  PlayerMp3.appendChild(ArtBox);
  PlayerMp3.appendChild(ControlsBox);

  return PlayerMp3;
};
