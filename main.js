import { createPlayerMp3 } from "./libs/PlayerMp3";

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

createPlayerMp3(state).then((PlayerMp3) => {
  app.appendChild(PlayerMp3);
  app.classList.add("app");
});
