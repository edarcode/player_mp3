import { createPlayerMp3 } from "./libs/PlayerMp3";

const app = document.querySelector("#app");

const PlayerMp3 = createPlayerMp3();
app.appendChild(PlayerMp3);
