import TopBar from "./topbar";
import Playlists from "./list/playlists";
import Card from "./card/card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserData } from "../requests/requests";
import { useDispatch } from "react-redux";
import { setUser } from "../store/auth";
import Loading from "./loading";
import { upsertPlaylists } from "../store/music";
import { PLAYLIST_DATA, USER_DATA } from "../util/test-data";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const setup = async () => {
      try {
        // const userData = await fetchUserData();
        // console.log(userData);

        // const {
        //   display_name: username,
        //   id: spotifyId,
        //   images,
        // } = userData.userProfile;

        // const userData = {
        //   username,
        //   spotifyId,
        //   imageURL: images.length > 0 ? images[0] : null,
        // };

        const staticUserData = USER_DATA;
        dispatch(setUser(staticUserData));

        // const playlistArr = userData?.userPlaylists?.items ?? [];
        const playlistArr = PLAYLIST_DATA;
        console.log(playlistArr);

        dispatch(upsertPlaylists({ playlists: playlistArr }));

        setTimeout(() => setIsLoading(false), 1000);
      } catch (error) {
        console.error("Error in setup:", error);
      }
    };

    setup();
  }, [dispatch]);

  return (
    <div className="my-12 mx-24 h-screen">
      {isLoading ? (
        <div className="flex">
          <Loading />
        </div>
      ) : (
        <>
          <TopBar />

          <Card />

          <Playlists />
        </>
      )}
    </div>
  );
};

export default Home;
