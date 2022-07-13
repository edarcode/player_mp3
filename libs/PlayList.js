import { sings } from "../data/sings";
import { createLi } from "../utils/createLi";

export const createPlayList = () => {
  const PlayList = document.createElement("ul");
  PlayList.classList.add("player__list");

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < sings.length; i++) {
    const element = sings[i];
    const content = `${i + 1}. ${element.title}`;
    const li = createLi({ content, className: "player__name-song" });
    fragment.appendChild(li);
  }
  PlayList.appendChild(fragment);
  return PlayList;
};
