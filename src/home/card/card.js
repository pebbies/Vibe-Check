import { useSelector } from "react-redux";
import NewPLaylist from "./new-playlist";
import { useEffect, useState } from "react";
import { stripHTML } from "../../util/util";

const Card = ({ playlist = null, isSelected = false }) => {
  const { playlists } = useSelector((state) => state.music);
  const { username, imageURL } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [buttonName, setButtonName] = useState("");
  const [isProfile, setIsProfile] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState();

  useEffect(() => {
    const hasPlaylists = !!playlists?.length > 0;

    if (!hasPlaylists) {
      setName(username);
      setDescription("Create a new playlist to get started.");
      setButtonName("Add Playlist");
      setImage(imageURL);
      setIsProfile(true);
    } else {
      playlist = playlist ?? playlists[playlists.length - 1];
      setSelectedPlaylist(playlist);
      setName(playlist.name);
      setDescription(stripHTML(playlist.description));
      setButtonName(isSelected ? "Back To Main" : "Edit Playlist");
      setImage(playlist?.images?.length > 0 ? playlist.images[0] : null);
      setIsProfile(false);
    }
  }, []);

  return (
    <div className="flex my-24">
      <NewPLaylist
        name={name}
        description={description}
        buttonName={buttonName}
        image={image}
        isProfile={isProfile}
        playlist={selectedPlaylist}
      />
    </div>
  );
};

export default Card;
