"use client";

import { ArrowUp } from "lucide-react";
import HapticFeedback from "./HapticFeedback";
import { useEffect, useState } from "react";
import {motion} from "motion/react"
export default function GoToTop() {
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    const toggleVisibility = () => {
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
    <motion.div
    initial={{
      y:90
    }}
    animate={{
      y:-10
    }}
    exit={{
      y:100
    }}
    transition={{
      duration:0.3,
      ease:"easeOut"
    }}
      onClick={handleOnclick}
      className=" fixed bottom-10 right-10   transition-all hover:bg-primary/90 bg-primary text-background  cursor-pointer  border border-foreground/40 flex items-center justify-center p-2 rounded-full "
    >
      {visible && (
        <HapticFeedback feedback="heavy">
          <ArrowUp />
        </HapticFeedback>
      )}
    </motion.div>
  );
}
