import { useNavigate } from "react-router-dom";
import Image from "../../util/image";

const NewPLaylist = ({
  image,
  name,
  description,
  buttonName,
  isProfile,
  playlist,
}) => {
  const navigate = useNavigate();

  const handleButtonPress = () => {
    if (buttonName === "Back To Main") {
      navigate("/");
    }

    if (buttonName === "Edit Playlist" && playlist) {
      navigate(`/playlist/${playlist.id}`);
    }
  };

  return (
    <div className="w-full flex flex-row items-center justify-center">
      <Image src={image} name={name} style={"relative"} />

      <div className="w-[440px] flex flex-col items-start justify-center mx-16">
        <div className="text-2xl font-semibold">
          {isProfile ? `Hello ${name}` : `${name}`}
        </div>

        <div className="text-sm mt-2 text-gray-500">{description}</div>

        <div className="mt-8">
          <button
            onClick={handleButtonPress}
            class="px-10 py-2 bg-slate-500 text-sm text-white rounded-lg hover:shadow-xl hover:bg-slate-700"
          >
            {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPLaylist;
