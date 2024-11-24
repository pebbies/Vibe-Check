import { useSelector } from "react-redux";
import NotFound from "../util/not-found";
import Card from "../home/card/card";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Tracks from "./tracks";

const Playlist = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState();

  useEffect(() => {
    const playlists = JSON.parse(localStorage.getItem("playlists"));
    const playlist = playlists.find((p) => p.id === id);
    console.log("FOUND", id, playlists, playlist);

    setPlaylist(playlist);
  }, []);

  if (!playlist) {
    return <NotFound />;
  }

  return (
    <div className="my-12 mx-24 h-screen">
      <Card isSelected={true} playlist={playlist} />

      <div>
        <Tracks playlist={playlist} />
      </div>
    </div>
  );
};

export default Playlist;
