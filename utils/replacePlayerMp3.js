import { createPlayerMp3 } from "../libs/PlayerMp3";
import { createPlayList } from "../libs/PlayList";

export const replacePlayerMp3 = async (status) => {
  const app = document.querySelector("#app");
  const oldPlayerMp3 = app.querySelector(".player");
  const PlayerMp3 = await createPlayerMp3(status);
  app.replaceChild(PlayerMp3, oldPlayerMp3);

  const oldPlayList = app.querySelector(".list");
  const PlayList = createPlayList(status);
  app.replaceChild(PlayList, oldPlayList);

  const audio = app.querySelector("#audio");
  audio.play();
};
