import { createImg } from "../utils/createImg";

export const createArtBox = ({ img }) => {
  const ArtBox = document.createElement("header");
  ArtBox.classList.add("player__art-box");

  const image = createImg({ img, className: "player__picture" });
  ArtBox.appendChild(image);

  return ArtBox;
};
