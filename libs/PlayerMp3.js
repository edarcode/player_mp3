import { sings } from "../data/sings";
import { createImg } from "../utils/createImg";
import { replacePlayerMp3 } from "../utils/replacePlayerMp3";
import { createArtBox } from "./ArtBox";
import { createControlsBox } from "./ControlsBox";
import { createPlayList } from "./PlayList";

export const createPlayerMp3 = async (state) => {
  const PlayerMp3 = document.createElement("article");
  PlayerMp3.classList.add("player");
  let isCollapseMenu = false;

  const lastIndexSings = sings.length - 1;

  async function handleNext() {
    if (state.index === lastIndexSings) {
      state.reset();
    } else {
      state.add();
    }
    await replacePlayerMp3(state);
  }

  async function handleBack() {
    if (state.index === 0) {
      state.set(lastIndexSings);
    } else {
      state.subtract();
    }
    await replacePlayerMp3(state);
  }

  const { image, title, artist, audio } = sings[state.index];

  const ArtBox = createArtBox({ img: image });
  const ControlsBox = await createControlsBox({
    title,
    artist,
    disco: audio,
    handleBack,
    handleNext,
  });
  const menu = createImg({ img: "/svgs/menu.svg", className: "player__menu" });
  const PlayList = createPlayList();

  const fragment = document.createDocumentFragment();
  fragment.appendChild(ArtBox);
  fragment.appendChild(ControlsBox);
  fragment.appendChild(menu);
  fragment.appendChild(PlayList);

  PlayerMp3.appendChild(fragment);

  menu.addEventListener("click", () => {
    PlayList.classList.toggle("player__list--collapse");
  });

  return PlayerMp3;
};
