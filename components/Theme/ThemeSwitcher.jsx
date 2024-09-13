"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Determine the initial state of the switch based on the current theme
  const isDarkMode = theme === "dark";
  const isLightMode = theme === "light";

  return (
    <div>
      <Switch
        isSelected={isLightMode}
        size="lg"
        color="primary"
        endContent={<FaMoon />}
        startContent={<FaSun />}
        onChange={(e) => setTheme(e.target.checked ? "light" : "dark")}
      >
      </Switch>
    </div>
  );
}
