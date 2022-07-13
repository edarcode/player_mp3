export const createLi = ({ content, className }) => {
  const li = document.createElement("li");
  li.textContent = content;
  li.classList.add(className);
  return li;
};
