export const createP = ({ content, className }) => {
  const p = document.createElement("p");
  p.textContent = content;
  p.classList.add(className);
  return p;
};
