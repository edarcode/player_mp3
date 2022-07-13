import { createPlayerMp3 } from "./libs/PlayerMp3";
import { createPlayList } from "./libs/PlayList";

const app = document.querySelector("#app");

const state = { index: 0, isCollapseMenu: false };

state.add = () => {
  state.index = state.index + 1;
};

state.subtract = () => {
  state.index = state.index - 1;
};

state.reset = () => {
  state.index = 0;
};

state.setIndex = (value) => {
  state.index = value;
};

state.setIsCollapseMenu = () => {
  state.isCollapseMenu = !state.isCollapseMenu;
};

const startTheParty = async () => createPlayerMp3(state); /* 😎 */
const PlayerMp3 = await startTheParty();

const PlayList = createPlayList(state);

const fragment = document.createDocumentFragment();
fragment.appendChild(PlayerMp3);
fragment.appendChild(PlayList);

app.appendChild(fragment);
app.classList.add("app");
