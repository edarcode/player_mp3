export const createRange = ({ className, max }) => {
  const range = document.createElement("input");
  range.type = "range";
  range.min = 0;
  range.max = max;
  range.classList.add(className);
  return range;
};
