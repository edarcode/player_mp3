export const formatSeconds = (param) => {
  if (param === 0) return "00 : 00";
  let result = "";
  const roundSeconds = Number.parseFloat(param).toFixed(2);
  const minutes = roundSeconds / 60;

  const [, decimals] = `${minutes}`.split(".");
  const seconds = decimals * 60;

  const formatMinutes = Math.floor(minutes);
  const formatSeconds = `${seconds}`[0] + `${seconds}`[1];

  result = `${(formatMinutes < 10 && "0" + formatMinutes) || formatMinutes} : ${
    (formatSeconds < 10 && "0" + formatSeconds) || formatSeconds
  }`;
  return result;
};
