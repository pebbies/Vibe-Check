import { useDispatch } from "react-redux";
import { login } from "../store/auth";
import taperecorder from "../assets/taperecorder.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SPOTIFY_AUTH_URL } from "../constants";
import { getExpireEpoch } from "../util/util";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    window.location = SPOTIFY_AUTH_URL;
  };

  const getParamsFromAuth = (hash) => {
    hash = hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get("access_token");
    const expiresIn = params.get("expires_in");

    return { accessToken, expiresIn };
  };

  useEffect(() => {
    if (window.location.hash) {
      const params = getParamsFromAuth(window.location.hash);

      localStorage.setItem("access_token", params.accessToken);
      localStorage.setItem("expire_epoch", getExpireEpoch(params.expiresIn));
      dispatch(login());

      window.history.replaceState({}, document.title, "/");
      navigate("/");
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="my-12">
        <img src={taperecorder} alt="Logo" className="h-96 rounded-lg" />
      </div>

      <div className="font-semibold text-lg">Welcome to Vibe Check </div>

      <div className="mt-1 text-sm text-gray-400">
        A playlist maker for all your music needs
      </div>

      <div className="mt-12">
        <button
          onClick={handleLogin}
          class="px-10 py-2 bg-slate-500 text-sm text-white rounded-lg hover:shadow-xl hover:bg-slate-700"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Auth;
