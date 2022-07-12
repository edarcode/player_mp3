export const createAudio = ({ src }) => {
  const audio = document.createElement("audio");
  audio.src = src;
  return audio;
};
