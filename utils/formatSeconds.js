export const formatSeconds = (SECONDS) => {
  if (SECONDS === 0) return "00 : 00";
  //1970-01-01T00:02:38.343Z
  const result = new Date(SECONDS * 1000).toISOString().substring(14, 19);
  return result;
};
