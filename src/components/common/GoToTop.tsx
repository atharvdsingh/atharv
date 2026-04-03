"use client";

import { ArrowBigUp, ArrowUp, ArrowUpToLine } from "lucide-react";
import HapticFeedback from "./HapticFeedback";
import { useEffect, useState } from "react";

export default function GoToTop() {
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    const toggleVisibility = () => {
        console.log(window.scrollY)
      if (window.scrollY > 3) {setVisible(true);}
      else {setVisible(false)}
    };
    window.addEventListener("scroll",toggleVisibility)
    return ()=> window.removeEventListener("scroll",toggleVisibility)
  }, []);

  const handleOnclick = () => {
    if (!window) return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  if(!visible) return null
  return (
    <div
      onClick={handleOnclick}
      className=" fixed bottom-2 right-10   transition-all hover:bg-muted-foreground/20 cursor-pointer hover:scale-105 border border-foreground/40 flex items-center justify-center p-2 rounded-full "
    >
      {visible && (
        <HapticFeedback feedback="heavy">
          <ArrowUp />
        </HapticFeedback>
      )}
    </div>
  );
}
