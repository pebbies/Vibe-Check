import { MILLI_SECONDS } from "../constants";

export function getExpireEpoch(expiresIn) {
  return expiresIn * MILLI_SECONDS + Date.now();
}

export function stripHTML(input) {
  const inputStr = input.replace(/<\/?[^>]+(>|$)/g, "");
  const text = document.createElement("textarea");
  text.innerHTML = inputStr;
  return text.value;
}

export function getArtistNames(artistArr) {
  const artistNames = artistArr.reduce((accum, val, idx) => {
    if (idx === 0) {
      accum += val.name;
    } else {
      if (accum.length > 25) {
        return accum + "...";
      }
      accum += ", " + val.name;
    }

    return accum;
  }, "");

  return artistNames;
}
