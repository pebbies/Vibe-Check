import { useDispatch } from "react-redux";
import { logout } from "../store/auth";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return <div className="flex"></div>;
};

export default Logout;
