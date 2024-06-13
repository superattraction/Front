import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

export default function GridList({ edus, onAddressClick }) {
  return (
    <ul role="list" className="grid gap-y-3">
      {edus.map((education) => (
        <li
          key={education.ncsCode}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow "
        >
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">
                  {education.title}
                </h3>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500 ">
                {education.address}
              </p>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${education.phone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <PhoneIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Call
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
