export const createHeader = ({ className }) => {
  const header = document.createElement("header");
  header.classList.add(className);
  return header;
};
