import { useSelector } from "react-redux";
import DefaultProfile from "./default-profile";
import { useState } from "react";

const NewPLaylist = ({ image, name, description, buttonName, isProfile }) => {
  const [isImageError, setIsImageError] = useState(false);

  return (
    <div className="w-full flex flex-row items-center justify-center">
      <div className="relative">
        {!image || isImageError ? (
          <DefaultProfile name={name} />
        ) : (
          <img
            src={image}
            alt=""
            className="h-32 rounded-lg"
            onError={() => setIsImageError(true)}
          />
        )}
      </div>

      <div className="w-[440px] flex flex-col items-start justify-center mx-16">
        <div className="text-2xl font-semibold">
          {isProfile ? `Hello ${name}` : `${name}`}
        </div>

        <div className="text-sm mt-2 text-gray-500">{description}</div>

        <div className="mt-8">
          <button
            onClick={() => console.log("NOTHING YET")}
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