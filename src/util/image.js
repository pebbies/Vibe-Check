import DefaultProfile from "../home/card/default-profile";
import { useState } from "react";

const Image = ({ src, name, size = "w-32 h-32", style = "" }) => {
  const [isImageError, setIsImageError] = useState(false);

  return (
    <div className={style}>
      {!src || isImageError ? (
        <DefaultProfile name={name} size={size} />
      ) : (
        <img
          src={src}
          alt=""
          className={`h-${size} rounded-lg`}
          onError={() => setIsImageError(true)}
        />
      )}
    </div>
  );
};

export default Image;
