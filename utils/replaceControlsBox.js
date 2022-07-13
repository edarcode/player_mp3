import { sings } from "../data/sings";
import { createControlsBox } from "../libs/ControlsBox";

export const replaceControlsBox = async ({
  index,
  lib,
  handleBack,
  handleNext,
}) => {
  const { title, artist, audio } = sings[index];

  const { ControlsBox, playAudio } = await createControlsBox({
    title,
    artist,
    disco: audio,
    handleBack,
    handleNext,
  });

  const ControlsOld = document.querySelector(".controls");

  lib.replaceChild(ControlsBox, ControlsOld);
  playAudio();
};
