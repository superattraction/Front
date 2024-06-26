import React from "react";
import PDFInput from "../components/JobPositionAccountPDFInput";
import AccountImage from "./img/compass.png";

export default function JobPositionAccount() {
  return (
    <div
      className="absolute w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${AccountImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center p-8">
        <h1 className="text-white text-4xl font-bold mb-4">국비 Chat봇</h1>
        <p className="text-white text-lg font-semibold">무엇이든 물어보세요!</p>
      </div>
      <div>
        <PDFInput />
      </div>
    </div>
  );
}
