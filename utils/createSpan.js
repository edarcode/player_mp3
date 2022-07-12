export const createSpan = ({ content }) => {
  const span = document.createElement("span");
  span.textContent = content;
  return span;
};
