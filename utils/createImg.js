export const createImg = ({ img, id, className }) => {
  const image = document.createElement("img");
  image.src = img;
  image.alt = img;
  image.id = id;
  image.classList.add(className);
  return image;
};
