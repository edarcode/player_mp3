import { createPlayerMp3 } from "./libs/PlayerMp3";

const app = document.querySelector("#app");

createPlayerMp3().then((PlayerMp3) => app.appendChild(PlayerMp3));
