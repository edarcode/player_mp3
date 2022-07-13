import { sings } from "../data/sings";
import { createLi } from "../utils/createLi";
import { replacePlayerMp3 } from "../utils/replacePlayerMp3";

export const createPlayList = (state) => {
  const PlayList = document.createElement("ul");
  PlayList.classList.add("list");

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < sings.length; i++) {
    const element = sings[i];
    const content = `${i + 1}. ${element.title}`;
    const li = createLi({ content, className: "list__name-song", id: i });
    li.addEventListener("click", async () => {
      state.setIndex(parseInt(li.id));
      await replacePlayerMp3(state);
    });
    if (state.index === parseInt(li.id)) li.style.color = "var(--blue)";
    fragment.appendChild(li);
  }
  PlayList.appendChild(fragment);

  if (state.isCollapseMenu) {
    PlayList.classList.add("list--collapse");
  }

  return PlayList;
};
