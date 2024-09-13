"use client";

import { BiDotsHorizontal, BiPlusMedical } from "react-icons/bi";
import { MdHealthAndSafety } from "react-icons/md";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const TopDoctors = () => {
  return (
    <motion.section
      className="flex items-center justify-between flex-col gap-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // يظهر عند دخول الجزء المحدد في العرض
    >
      <div className="flex flex-col gap-4 items-center justify-center">
        <h2 className="text-primary text-4xl font-bold">Top Doctors to Book</h2>
        <p className="w-full md:w-[500px] text-center text-gray-500">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      <motion.div
        className="flex items-center justify-center gap-8 flex-wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // يظهر عند دخول الجزء المحدد في العرض
      >
        {[
          "/docs/doc1.png",
          "/docs/doc2.png",
          "/docs/doc3.png",
          "/docs/doc4.png",
          "/docs/doc5.png",
          "/docs/doc7.png",
          "/docs/doc8.png",
          "/docs/doc9.png",
        ].map((src, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // يظهر عند دخول الجزء المحدد في العرض
          >
            <Card className="p-3 dark:bg-neutral-800" isPressable={false}>
              <CardBody>
                <Image
                  src={src}
                  alt={`Doctor ${index + 1}`}
                  width={300}
                  height={300}
                  className="bg-slate-200 rounded-xl"
                />
              </CardBody>
              <CardFooter className="flex items-start justify-start flex-col gap-2">
                <Chip color="primary" className="text-white animate-pulse">
                  Available
                </Chip>
                <h3 className="text-xl font-semibold text-primary">
                  Dr. Kerolos Asam
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  General Physician
                </p>
                <Button fullWidth variant="flat" color="primary">
                  Book Appointment
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <Button size="lg" color="primary" variant="shadow">
        More Doctors
      </Button>
    </motion.section>
  );
};

export default TopDoctors;
