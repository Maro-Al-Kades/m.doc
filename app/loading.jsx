import { Spinner } from "@nextui-org/react";
import React from "react";

const loading = () => {
  return (
    <div className="h-screen w-full items-center justify-center">
      <Spinner label="Loading..." color="primary" />
    </div>
  );
};

export default loading;
