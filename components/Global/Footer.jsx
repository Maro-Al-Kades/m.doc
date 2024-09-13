import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "../Theme/ThemeSwitcher";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-start justify-between md:flex-row flex-col mt-32 py-4 mb-4 border-b-1 border-primary/50">
        <div className="left w-1/3 flex flex-col items-start justify-between gap-4">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={100}
              height={80}
              className={`w-40 cursor-pointer`}
              priority
            />
          </Link>

          <p className="text-gray-500 dark:text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
        </div>

        <div className="middle">
          <h4 className="text-primary text-xl font-semibold pb-3">Company</h4>

          <ul className="flex flex-col items-start gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/contact">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="right">
          <h4 className="text-primary text-xl font-semibold pb-3">
            Get In Touch
          </h4>

          <ul className="flex flex-col items-start gap-4">
            <li>
              <Link href="/">+1-123-456-789</Link>
            </li>
            <li>
              <Link href="/about">m.doc@gmail.com</Link>
            </li>
          </ul>
        </div>

        <div className="mood">
          <h4 className="text-primary text-xl font-semibold pb-3">Mood</h4>

          <div className="flex flex-col items-start gap-4">
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      

      <p className="flex items-center justify-center py-6 text-gray-400">Copyright © 2024 MARO SYSTEMS - All Right Reserved.</p>
    </footer>
  );
};

export default Footer;
