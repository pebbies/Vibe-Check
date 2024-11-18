import { useSelector } from "react-redux";

const Playlists = () => {
  const { playlists } = useSelector((state) => state.music);

  return (
    <div className="w-full text-sm">
      {playlists.map((playlist, index) => {
        const image = playlist.images?.length > 0 ? playlist.images[0] : null;

        return (
          <div
            key={index}
            className="flex items-center justify-start p-4 border-b border-gray-200"
          >
            <div className="w-8 h-8 bg-gray-300 rounded-md mr-4"></div>

            <div className="text-gray-800 font-medium">
              {playlist.name || "Playlist Name"}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Playlists;
