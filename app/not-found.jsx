import Image from "next/image";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center flex-col gap-8">
      <div className="text-4xl font-black ">
        WE ARE SORRY THIS PAGE <b className="text-primary">NOT FOUND</b>....
      </div>
      <div>
        <Image src="/404.svg" alt="404" width={700} height={700} />
      </div>
    </div>
  );
};

export default NotFound;
