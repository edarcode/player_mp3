import { sings } from "../data/sings";
import { createArtBox } from "../libs/ArtBox";

export const replaceArtBox = ({ index, lib }) => {
  const { image } = sings[index];
  const { ArtBox } = createArtBox({ img: image });
  const ArtBoxOld = document.querySelector(".art-box");
  lib.replaceChild(ArtBox, ArtBoxOld);
};
