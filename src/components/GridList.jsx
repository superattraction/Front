import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import GridSummaryReview from "./GridSummaryReview";

const GridList = ({ edus = [], onSelectAddress }) => {
  return (
    <ul role="list" className="grid gap-y-3">
      {edus.map((education) => (
        <li
          key={education.id}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
          <div className="flex w-auto items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <button
                  className="truncate text-lg font-medium text-gray-900"
                  onClick={() => {
                    console.log(`Selected address: ${education.address}`);
                    onSelectAddress(education.address);
                  }}
                >
                  {education.title}
                </button>
              </div>
              <p className="mt-1 mb-3 truncate text-md text-gray-500">
                {education.address}
              </p>
              <GridSummaryReview education={education} className="mt-3" />
            </div>
          </div>
          <div className="flex divide-x divide-gray-200">
            <div className="flex flex-1 justify-center">
              <a
                href={`tel:${education.phone}`}
                className="relative inline-flex items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 w-full z-10"
              >
                <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                Call
              </a>
            </div>
            <div className="flex flex-1 justify-center">
              <a
                href={`mailto:${education.email}`}
                className="relative inline-flex items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 w-full z-10"
              >
                <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                E-Mail
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GridList;