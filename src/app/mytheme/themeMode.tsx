"use client";

import { FullscreenModeToggle } from "./FullscreenModeToggle";
import { ThemeColorToggle } from "./theme-color-toggle";
import { ThemeModeToggle } from "./theme-mode-toggle";



const ThemeMode = () => {

  return (
    <>

      <div className="w-[100%] flex justify-between items-center flex-col p-1 pb-0">

        <div className="  h-[3rem] w-[100%]">
          <ThemeColorToggle />
        </div>

        <div className=" h-[3rem] w-[100%]">
          <ThemeModeToggle />
        </div>

        <div className="h-[3rem] w-[100%]">
          <FullscreenModeToggle />
        </div>
      </div>

    </>
  );
};

export default ThemeMode;
