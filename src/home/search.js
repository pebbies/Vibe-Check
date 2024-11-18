import { useDispatch } from "react-redux";
import { upsertFilter } from "../store/music";

const Search = () => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(upsertFilter(e.target.value));
  };

  return (
    <div class="flex items-center mx-auto text-xs w-1/3">
      <input
        type="text"
        placeholder="All Playlists"
        class="bg-gray-100 rounded-lg px-4 py-2 w-full focus:outline-none"
        onChange={handleFilter}
      />
    </div>
  );
};

export default Search;
