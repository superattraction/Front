import React from "react";
import PDFInput from "../components/JobPositionAccountPDFInput";
import AccountImage from "./img/accountImage2.jpg";

export default function JobPositionAccount() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${AccountImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center p-8">
        {/* <h1 className="text-white text-4xl font-bold mb-4">Title</h1> */}
        {/* <p className="text-white text-lg">Description</p> */}
        <PDFInput />
      </div>
    </div>
  );
}
