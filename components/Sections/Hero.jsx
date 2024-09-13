"use client";

import { BsFillClipboard2HeartFill } from "react-icons/bs";
import { Avatar, AvatarGroup, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 2,
        type: "spring", 
        stiffness: 50, 
      }}
    >
      <div className="flex flex-col lg:flex-row flex-wrap bg-primary from-primary to-secondary bg-gradient-to-b rounded-xl px-6 md:px-10 lg:px-20">
        {/* Left Side */}
        <div className="lg:w-1/2 flex flex-col items-start justify-center gap-8 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-white font-semibold leading-tight w-full">
            Book Appointment <br className="hidden md:block" /> With Trusted
            Doctors
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-3  text-sm text-white">
            <AvatarGroup size="md" isBordered max={3} total={50}>
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
            </AvatarGroup>

            <p>
              Simply browse through our extensive list of trusted doctors,{" "}
              <br /> schedule your appointment hassle-free
            </p>
          </div>

          <Button
            as={Link}
            href="/"
            color="default"
            variant="shadow"
            className="bg-white text-primary font-medium text-md w-full md:w-1/2 flex-wrap"
            fullWidth
            size="lg"
            radius="full"
            endContent={<BsFillClipboard2HeartFill size={17} />}
          >
            Book Appointment
          </Button>
        </div>
        {/* Right Side */}
        <div className="lg:w-1/2 relative">
          <Image
            src="/header.png"
            width={500}
            height={500}
            className="w-full lg:absolute bottom-0 h-auto"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
