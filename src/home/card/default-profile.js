import { useMemo } from "react";

const DefaultProfile = (name) => {
  const firstLetter = useMemo(() => {
    return name.length > 0 ? name.substring(0, 1).toUpperCase() : "A";
  }, []);

  return (
    <div
      className={`w-32 h-32 flex items-center justify-center bg-gray-700 p-18 rounded-2xl text-white text-7xl`}
    >
      {firstLetter}
    </div>
  );
};

export default DefaultProfile;
