import Lottie from "lottie-react";
import loading from "./../assets/loading.json";
import { Component } from "react";

class Loading extends Component {
  render() {
    return (
      <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center">
        <Lottie
          animationData={loading}
          loop={true}
          autoplay={true}
          style={{ width: 100, height: 100 }}
        />
      </div>
    );
  }
}

export default Loading;
