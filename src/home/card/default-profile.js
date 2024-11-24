import { useMemo } from "react";

const DefaultProfile = ({ name, size }) => {
  const firstLetter = useMemo(() => {
    return name.length > 0 ? name.substring(0, 1).toUpperCase() : "A";
  }, []);

  return (
    <div
      className={`${size} flex items-center justify-center bg-gray-700 p-18 rounded-2xl text-white text-7xl`}
    >
      {firstLetter}
    </div>
  );
};

export default DefaultProfile;
