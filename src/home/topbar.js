import Logout from "./logout";
import Search from "./search";

const TopBar = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="font-semibold text-lg italic">vibe check</div>

      <Search />

      <Logout />
    </div>
  );
};

export default TopBar;
