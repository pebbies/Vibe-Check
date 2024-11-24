export async function fetchUserData() {
  const accessToken = localStorage.getItem("access_token");

  try {
    const userProfile = await fetchUserProfile(accessToken);
    const { id: spotId } = userProfile;
    const userPlaylists = await fetchUserPlaylists(spotId, accessToken);

    return { userProfile, userPlaylists };
  } catch (err) {
    console.log(err);

    return alert(
      "Invalid response from Spotify. Please refresh the page and try again."
    );
  }
}

export async function fetchUserProfile(token) {
  try {
    const response = await fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.json();
  } catch (err) {
    console.log("ERR_FETCH_USER_PROFILE", err);
  }
}

export async function fetchUserPlaylists(spotId, token) {
  const endpoint = `https://api.spotify.com/v1/users/${spotId}/playlists`;

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.json();
  } catch (err) {
    console.log("ERR_FETCH_USER_PLAYLISTS", err);
  }
}

export async function fetchPlaylistTracks(playlistId) {
  const token = localStorage.getItem("access_token");
  const endpoint = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.json();
  } catch (err) {
    console.log("ERR_FETCH_PLAYLIST_TRACKS", err);
  }
}
