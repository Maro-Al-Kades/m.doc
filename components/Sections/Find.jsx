"use client";

import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { motion } from "framer-motion";

const Find = () => {
  return (
    <section className="flex items-center justify-between flex-col gap-12">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h2 className="text-primary text-4xl font-bold ">Find By Speciality</h2>
        <p className="w-[500px] text-center text-gray-500">
          Simply Browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          type: "spring",
          stiffness: 40,
        }}
        className="flex items-center justify-center gap-8 flex-row lg:flex-row flex-wrap"
      >
        <Card shadow="sm" isPressable className="dark:bg-neutral-800">
          <CardBody className="overflow-visible p-0">
            <Image src="/General_physician.svg" width={150} height={150} />
          </CardBody>
          <CardFooter className="text-small justify-center">
            <p className="text-primary text-center">General Doctor</p>
          </CardFooter>
        </Card>

        <Card shadow="sm" isPressable className="dark:bg-neutral-800">
          <CardBody className="overflow-visible p-0">
            <Image src="/Gynecologist.svg" width={150} height={150} />
          </CardBody>
          <CardFooter className="text-small justify-center">
            <p className="text-primary text-center">Gynecologist</p>
          </CardFooter>
        </Card>

        <Card shadow="sm" isPressable className="dark:bg-neutral-800">
          <CardBody className="overflow-visible p-0">
            <Image src="/Dermatologist.svg" width={150} height={150} />
          </CardBody>
          <CardFooter className="text-small justify-center">
            <p className="text-primary text-center">Dermatologist</p>
          </CardFooter>
        </Card>

        <Card shadow="sm" isPressable className="dark:bg-neutral-800">
          <CardBody className="overflow-visible p-0">
            <Image src="/Pediatricians.svg" width={150} height={150} />
          </CardBody>
          <CardFooter className="text-small justify-center">
            <p className="text-primary text-center">Pediatricians</p>
          </CardFooter>
        </Card>

        <Card shadow="sm" isPressable className="dark:bg-neutral-800">
          <CardBody className="overflow-visible p-0">
            <Image src="/Neurologist.svg" width={150} height={150} />
          </CardBody>
          <CardFooter className="text-small justify-center">
            <p className="text-primary text-center">Neurologist</p>
          </CardFooter>
        </Card>

        <Card shadow="sm" isPressable className="dark:bg-neutral-800">
          <CardBody className="overflow-visible p-0">
            <Image src="/Gastroenterologist.svg" width={150} height={150} />
          </CardBody>
          <CardFooter className="text-small justify-center">
            <p className="text-primary text-center">Gastroenterologist</p>
          </CardFooter>
        </Card>
      </motion.div>
    </section>
  );
};

export default Find;
