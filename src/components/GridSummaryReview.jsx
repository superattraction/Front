import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

const actions = [
  {
    title: "AI 수강후기 요약",
    href: "#",
    icon: CheckBadgeIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const GridSummaryReview = ({ education }) => {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-slate-100 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0
              ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
              : "",
            actionIdx === 1 ? "sm:rounded-tr-lg" : "",
            actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
            actionIdx === actions.length - 1
              ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
              : "",
            "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                "inline-flex rounded-lg p-3 ring-4 ring-white"
              )}
            >
              <action.icon className="h-4 w-4 mr-2" aria-hidden="true" />
              <a href={action.href} className="focus:outline-none">
                AI 수강후기 요약 (Click! 상세보기)
              </a>
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-base font-semibold leading-6 text-gray-900"></h3>
            {education &&
              education.summaryReview &&
              education.summaryReview.summaryReview && (
                <p className="mt-1 text-md font-medium text-gray-900">
                  {education.summaryReview.summaryReview}
                </p>
              )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridSummaryReview;
