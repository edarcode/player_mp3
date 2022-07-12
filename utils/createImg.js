export const createImg = ({ img, id }) => {
  const image = document.createElement("img");
  image.src = img;
  image.alt = img;
  image.id = id;
  return image;
};
