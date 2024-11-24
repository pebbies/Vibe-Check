import { useEffect, useState } from "react";
import { fetchPlaylistTracks } from "../requests/requests";
import Loading from "../home/loading";
import Image from "../util/image";
import { getArtistNames } from "../util/util";

const Tracks = ({ playlist }) => {
  const [loading, setLoading] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState({});

  useEffect(() => {
    const getTracks = async () => {
      const data = await fetchPlaylistTracks(playlist.id);
      console.log("TRACKS", data);
      setTracks(data);

      const artistNames = data?.items?.reduce((accum, val) => {
        accum[val.track.id] = getArtistNames(val.track.artists);

        return accum;
      }, {});

      setArtists(artistNames);

      setTimeout(() => setLoading(false), 500);
    };

    getTracks();
  }, [playlist]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="">
      {tracks.items.map((track, index) => {
        const name = track.track?.name;

        if (!name || name === "") {
          return;
        }

        const image = track.track.album.images[0]?.url;
        const artistNames = artists[track.track.id];
        const albumName = track.track.album.name;

        return (
          <div
            key={index}
            className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
          >
            <div className="w-64 flex flex-row items-center">
              <Image src={image} name={name} size={"w-8 h-8"} />

              <div className="flex-1 ml-2 text-gray-800 text-sm">{name}</div>
            </div>

            <div className="w-64 ml-2 text-gray-500 text-sm">{artistNames}</div>

            <div className="w-64 ml-2 text-gray-500 text-sm">{albumName}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Tracks;
