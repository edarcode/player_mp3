import { createImg } from "../utils/createImg";

export const createArtBox = ({ img }) => {
  const ArtBox = document.createElement("header");
  ArtBox.classList.add("art-box");

  const image = createImg({ img });
  ArtBox.appendChild(image);

  return ArtBox;
};
