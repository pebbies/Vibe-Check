import "./App.css";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./auth/auth";
import Home from "./home/home";
import Playlist from "./playlist/playlist";

function App() {
  let isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        {!isAuthenticated && <Route path="*" element={<Auth />} />}

        {isAuthenticated && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/playlist" element={<Playlist />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
