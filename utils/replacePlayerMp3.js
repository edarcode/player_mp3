import { createPlayerMp3 } from "../libs/PlayerMp3";

export const replacePlayerMp3 = async (status) => {
  const app = document.querySelector("#app");
  const oldPlayerMp3 = app.querySelector(".player");
  const PlayerMp3 = await createPlayerMp3(status);
  app.replaceChild(PlayerMp3, oldPlayerMp3);
  const audio = app.querySelector("#audio");
  audio.play().then(() => (play.src = "/svgs/pause.svg"));
};
