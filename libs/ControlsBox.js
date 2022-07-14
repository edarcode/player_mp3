import { createAudio } from "../utils/createAudio";
import { createDiv } from "../utils/createDiv";
import { createHeader } from "../utils/createHeader";
import { createImg } from "../utils/createImg";
import { createP } from "../utils/createP";
import { createRange } from "../utils/createRange";
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
  const back = createImg({
    img: "/svgs/back.svg",
    id: "back",
    className: "controls__controls",
  });
  const next = createImg({
    img: "/svgs/next.svg",
    id: "next",
    className: "controls__controls",
  });
  const play = createImg({
    img: "/svgs/play.svg",
    id: "play",
    className: "controls__controls",
  });
  const audio = await createAudio({ src: disco, id: "audio" });
  const duration = createSpan({
    content: formatSeconds(audio.duration),
    className: "controls__duration",
  });
  const currentTime = createSpan({
    content: formatSeconds(audio.currentTime),
    className: "controls__current-time",
  });
  const videoBar = createRange({
    className: "controls__video-bar",
    max: audio.duration,
  });
  const fakeVideoBar = createSpan({ className: "controls__video-bar-fake" });
  const gif = createImg({
    img: "/gifs/music-artic.gif",
    className: "controls__gif",
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
  fragment.appendChild(videoBar);
  fragment.appendChild(fakeVideoBar);
  fragment.appendChild(gif);

  /* Listener -------------- Listener ---------------- Listener*/
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
      audio.play().then(() => (play.src = "/svgs/pause.svg"));
    }
  });

  audio.addEventListener("ended", async () => {
    await handleNext();
  });

  audio.addEventListener("timeupdate", () => {
    const currentAudio = audio.currentTime;
    currentTime.textContent = formatSeconds(currentAudio);

    const endAudio = audio.duration;
    const currentPercentage = `${(currentAudio / endAudio) * 100}%`;
    fakeVideoBar.style.width = currentPercentage;
  });

  audio.addEventListener("play", () => {
    gif.style.opacity = 0.3;
    play.src = "/svgs/pause.svg";
  });

  audio.addEventListener("pause", () => {
    gif.style.opacity = 0;
  });

  videoBar.addEventListener("change", () => {
    const valueVideoBar = videoBar.value;
    audio.currentTime = valueVideoBar;
    audio.play();
  });

  /* -------------pusheando etiquetas al Componente------------- */
  ControlsBox.appendChild(fragment);

  return ControlsBox;
};
