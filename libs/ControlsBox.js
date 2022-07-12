import { createAudio } from "../utils/createAudio";
import { createDiv } from "../utils/createDiv";
import { createHeader } from "../utils/createHeader";
import { createImg } from "../utils/createImg";
import { createP } from "../utils/createP";
import { createSpan } from "../utils/createSpan";

export const createControlsBox = ({ title, artist, disco, handleNext }) => {
  const p = createP({ content: title, className: "constrols__title" });
  const span = createSpan({ content: artist });
  const audio = createAudio({ src: disco });
  const div = createDiv({ className: "controls__play" });
  const header = createHeader({ className: "controls__header" });
  const back = createImg({ img: "/svgs/back.svg", id: "back" });
  const next = createImg({ img: "/svgs/next.svg", id: "next" });
  const play = createImg({ img: "/svgs/play.svg", id: "play" });

  const fragment = document.createDocumentFragment();
  const fragment2 = document.createDocumentFragment();
  const fragment3 = document.createDocumentFragment();

  fragment.appendChild(audio);

  fragment3.appendChild(p);
  fragment3.appendChild(span);

  header.appendChild(fragment3);

  fragment2.appendChild(back);
  fragment2.appendChild(play);
  fragment2.appendChild(next);

  div.appendChild(fragment2);

  fragment.appendChild(header);
  fragment.appendChild(div);

  next.addEventListener("click", () => {
    handleNext();
  });

  const ConstrolsBox = document.createElement("div");
  ConstrolsBox.classList.add("controls");
  ConstrolsBox.appendChild(fragment);

  return ConstrolsBox;
};
