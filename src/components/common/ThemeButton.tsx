"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import HapticFeedback from "./HapticFeedback";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeButton() {
  const { setTheme, theme, systemTheme } = useTheme();
  React.useEffect(() => {
    if (systemTheme) {
      setTheme(systemTheme!);
    }
  }, []);
  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <HapticFeedback feedback="heavy" >
    <Button onClick={handleThemeChange} className="skill-inner-shadow cursor-pointer " variant="outline" size="icon">
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0  transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0  rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
    </HapticFeedback>
  );
}
