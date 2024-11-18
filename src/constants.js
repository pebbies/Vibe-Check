const CLIENT_ID = "5617dd8f77cd479096935bf1e8d9cb4e";
const ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL = "http://localhost:3000/";

const SCOPES = [
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-private",
  "playlist-modify-public",
  //TODO MAY REQUIRE ADDITONAL SCOPE TO PLAY TRACK
];
const SPACE_DELIM = "%20";
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIM);

export const SPOTIFY_AUTH_URL = `${ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;

export const TOKEN_TYPE = "Bearer";

export const MILLI_SECONDS = 1000;

