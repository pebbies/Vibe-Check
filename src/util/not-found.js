import Lottie from "lottie-react";
import notfound from "./../assets/not-found.json.json";

const NotFound = () => {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center">
      <Lottie
        animationData={notfound}
        loop={true}
        autoplay={true}
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
};

export default NotFound;
