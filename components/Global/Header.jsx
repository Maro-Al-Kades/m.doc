"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "../Theme/ThemeSwitcher";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <nav className="flex items-center justify-between text-md py-4 border-b border-b-gray-200/10">
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

      <ul className="hidden lg:flex items-start gap-5 font-medium">
        <li className="py-1">
          <Link href="/" className="text-primary">
            Home
          </Link>
        </li>
        <li className="py-1">
          <Link href="/doctors">All Doctors</Link>
        </li>
        <li className="py-1">
          <Link href="/about">About</Link>
        </li>
        <li className="py-1">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div className="hidden lg:flex items-center justify-normal gap-3">
        <ThemeSwitcher />

        {token ? (
          <Dropdown placement="bottom-start" className="dark:bg-neutral-900">
            <DropdownTrigger>
              <User
                as="button"
                avatarProps={{
                  isBordered: true,
                  src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                }}
                className="transition-transform"
                description="@tonyreichert"
                name="Tony Reichert"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="">Signed in as</p>
                <p className="font-bold text-primary">@hello</p>
              </DropdownItem>
              <DropdownItem key="profile" as={Link} href="/profile/1">
                My Profile
              </DropdownItem>
              <DropdownItem key="appointments" as={Link} href="/appointments/1">
                My Appointments
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="warning"
                className="text-warning dark:font-bold"
                onClick={() => setToken(false)}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Button
            color="primary"
            as={Link}
            href="/auth/login"
            endContent={<FaUserCircle size={17} />}
            
          >
            Create Account
          </Button>
        )}
      </div>

      <div className="lg:hidden">
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Header;
