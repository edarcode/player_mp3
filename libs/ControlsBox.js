import { createAudio } from "../utils/createAudio";
import { createDiv } from "../utils/createDiv";
import { createHeader } from "../utils/createHeader";
import { createImg } from "../utils/createImg";
import { createP } from "../utils/createP";
import { createSpan } from "../utils/createSpan";
import { formatSeconds } from "../utils/formatSeconds";

export const createControlsBox = async ({
  title,
  artist,
  disco,
  handleBack,
  handleNext,
}) => {
  const ControlsBox = document.createElement("div");
  ControlsBox.classList.add("controls");

  /* Creando etiquetas-------------------------------------------- */
  const p = createP({ content: title, className: "constrols__title" });
  const span = createSpan({ content: artist });
  const div = createDiv({ className: "controls__play" });
  const header = createHeader({ className: "controls__header" });
  const back = createImg({ img: "/svgs/back.svg", id: "back" });
  const next = createImg({ img: "/svgs/next.svg", id: "next" });
  const play = createImg({ img: "/svgs/play.svg", id: "play" });
  const audio = await createAudio({ src: disco, id: "audio" });
  const duration = createSpan({
    content: formatSeconds(audio.duration),
    className: "duration",
  });
  const currentTime = createSpan({
    content: formatSeconds(audio.currentTime),
    className: "current-time",
  });

  /* Fragmentando etiquetas--------------------------------------------- */
  const fragmentHeader = document.createDocumentFragment();
  const fragmentBtnsAudio = document.createDocumentFragment();
  const fragment = document.createDocumentFragment();

  fragmentHeader.appendChild(p);
  fragmentHeader.appendChild(span);
  header.appendChild(fragmentHeader);

  fragmentBtnsAudio.appendChild(back);
  fragmentBtnsAudio.appendChild(play);
  fragmentBtnsAudio.appendChild(next);
  div.appendChild(fragmentBtnsAudio);

  /* Pusheando etiquetas al fragment principal */
  fragment.appendChild(audio);
  fragment.appendChild(header);
  fragment.appendChild(div);
  fragment.appendChild(duration);
  fragment.appendChild(currentTime);

  /* handlers -------------- handlers ---------------- handlers*/
  back.addEventListener("click", async () => {
    await handleBack();
  });

  next.addEventListener("click", async () => {
    await handleNext();
  });

  play.addEventListener("click", () => {
    if (!audio.paused) {
      audio.pause();
      play.src = "/svgs/play.svg";
    } else {
      playAudio();
    }
  });
  audio.addEventListener("ended", () => {
    play.src = "/svgs/play.svg";
  });

  /* -------------métodos---------------------------------------- */
  function playAudio() {
    audio.play().then(() => (play.src = "/svgs/pause.svg"));
  }

  /* -------------pusheando etiquetas al Componente------------- */
  ControlsBox.appendChild(fragment);

  return { ControlsBox, playAudio };
};
