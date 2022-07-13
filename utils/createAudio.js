export const createAudio = ({ src }) => {
  const audio = document.createElement("audio");
  audio.src = src;
  const promise = new Promise((resolve, reject) => {
    audio.addEventListener("loadeddata", () => {
      resolve(audio);
    });
  });
  return promise;
};
