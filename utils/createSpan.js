export const createSpan = ({ content, className }) => {
  const span = document.createElement("span");
  span.textContent = content;
  span.classList.add(className);
  return span;
};
