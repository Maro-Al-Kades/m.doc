"use client";

import { IoIosMenu } from "react-icons/io";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ThemeSwitcher } from "../Theme/ThemeSwitcher";

const MobileMenu = () => {
  const [menu, setMenu] = useState(false);

  // Function to toggle menu state
  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="relative">
      <Button
        isIconOnly
        color="primary"
        variant="flat"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <IoIosMenu size={22} />
      </Button>

      {/* AnimatePresence for handling exit animations */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }} // Start off-screen to the right
            animate={{ opacity: 1, x: 0 }} // Slide in from the right
            exit={{ opacity: 0, x: "100%" }} // Slide out to the right
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen dark:bg-neutral-900 bg-white z-50 p-6 flex flex-col justify-center items-center"
          >
            <ul className="flex flex-col items-center justify-center text-center w-full gap-6 text-lg">
              <li className="">
                <Button href="/" variant="light" size="lg" fullWidth className="dark:text-white">
                  Home
                </Button>
              </li>
              <li className="">
                <Button variant="light" size="lg" fullWidth className="dark:text-white" href="/doctors">
                  All Doctors
                </Button>
              </li>
              <li className="">
                <Button variant="light" size="lg" fullWidth className="dark:text-white" href="/about">
                  About
                </Button>
              </li>
              <li className="">
                <Button variant="light" size="lg" fullWidth className="dark:text-white" href="/contact">
                  Contact
                </Button>
              </li>
            </ul>

            {/* Close Button */}
            <ThemeSwitcher />
            <Button
              color="primary"
              variant="flat"
              onClick={toggleMenu}
              className="mt-6"
              fullWidth
            >
              Close
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
