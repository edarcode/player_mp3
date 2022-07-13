export const createLi = ({ content, className, id }) => {
  const li = document.createElement("li");
  li.textContent = content;
  li.id = id;
  li.classList.add(className);
  return li;
};
