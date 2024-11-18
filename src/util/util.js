import { MILLI_SECONDS } from "../constants";

export function getExpireEpoch(expiresIn) {
  return expiresIn * MILLI_SECONDS + Date.now();
}

export function stripHTML(input) {
  return input.replace(/<\/?[^>]+(>|$)/g, "");
}
