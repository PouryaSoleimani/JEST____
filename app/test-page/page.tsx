"use client";
import { useRouter } from "next/navigation";
import React from "react";

const TestPage = () => {
  const router = useRouter();
  function backHandler() {
    router.back();
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <h2>TEST PAGE</h2>
      <button onClick={backHandler}></button>
    </div>
  );
};

export default TestPage;
