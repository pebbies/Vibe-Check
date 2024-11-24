import { useDispatch, useSelector } from "react-redux";
import Image from "../../util/image";
import { useNavigate } from "react-router-dom";

const Playlists = () => {
  const { playlists } = useSelector((state) => state.music);
  const navigate = useNavigate();

  const setPlaylist = (playlist) => {
    navigate(`/playlist/${playlist.id}`);
  };

  return (
    <div className="w-full text-sm">
      {playlists.map((playlist, index) => {
        const image =
          playlist.images?.length > 0 ? playlist.images[0].url : null;
        const playlistName = playlist.name || "Playlist Name";

        return (
          <div
            key={index}
            className="flex items-center justify-start p-4 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
            onClick={() => setPlaylist(playlist)}
          >
            <Image src={image} name={playlistName} size={"w-10 h-10"} />

            <div className="ml-2 text-gray-800 font-medium">{playlistName}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Playlists;
