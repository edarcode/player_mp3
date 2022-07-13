export const createAudio = ({ src, id }) => {
  const audio = document.createElement("audio");
  audio.src = src;
  audio.id = id;
  const promise = new Promise((resolve, reject) => {
    audio.addEventListener("loadeddata", () => {
      resolve(audio);
    });
  });
  return promise;
};
