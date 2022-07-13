import { createPlayerMp3 } from "./libs/PlayerMp3";

const app = document.querySelector("#app");

const state = { index: 0 };

state.add = () => {
  state.index = state.index + 1;
};

state.subtract = () => {
  state.index = state.index - 1;
};

state.reset = () => {
  state.index = 0;
};

state.set = (value) => {
  state.index = value;
};

const startTheParty = async () => createPlayerMp3(state); /* 😎 */
const PlayerMp3 = await startTheParty();
app.appendChild(PlayerMp3);
