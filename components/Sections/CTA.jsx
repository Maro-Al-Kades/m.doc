"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import { motion } from "framer-motion";
const CTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
        type: "spring",
        stiffness: 40,
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 lg:px-30 bg-primary from-primary to-secondary bg-gradient-to-b rounded-xl w-full md:h-72 ">
        <div className="left lg:w-1/2 flex flex-col gap-4 py-5 md:py-0  ">
          <h2 className="text-3xl lg:text-4xl leading-tight text-white font-black p">
            Book Appointment <br /> With 100+ Trusted Doctors
          </h2>

          <Button
            className="bg-white text-primary md:w-fit"
            size="lg"
            radius="full"
            variant="shadow"
          >
            Create Account
          </Button>
        </div>

        <div className="right lg:w-1/2 relative">
          <Image
            src="/img.png"
            alt="doc"
            width={300}
            height={300}
            className="lg:absolute right-0 bottom-[calc(-9rem-1px)]"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default CTA;
