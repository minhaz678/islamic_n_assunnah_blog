import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Dark = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="">
      <div className="flex justify-center">
        {currentTheme === "dark" ? (
          <button
            className="tooltip bg-black-700 rounded-lg border-yellow-400 border-2 mt-1 hover:bg-white"
            onClick={() => setTheme("light")}
          >
            {" "}
            <Image src="/sun.svg" alt="logo" height={30} width={30} />
            <span className="tooltiptext dark:text-white">LightMood</span>
          </button>
        ) : (
          <button
            className="tooltip bg-gray-100 rounded-lg border-purple-600 border-2 mt-1 hover:bg-black"
            onClick={() => setTheme("dark")}
          >
            <Image src="/moon.svg" alt="logo" height={30} width={30} />
            <span className="tooltiptext">DarkMood</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Dark;
