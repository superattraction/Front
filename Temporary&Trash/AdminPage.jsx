import React from 'react';

// 이전 코드에서 사용한 아이콘들을 import합니다.
import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  DocumentDuplicateIcon,
  ChartPieIcon,
} from '@heroicons/react/24/outline';

// 사이드바에 표시할 네비게이션과 팀 목록 데이터를 정의합니다.
const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, count: '5', current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, count: '12', current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, count: '20+', current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
];

const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
];

// classNames 함수 정의
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// SidebarExample 컴포넌트 정의
function SidebarExample() {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <div className="flex items-center h-16 px-6">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
      </div>
      <nav className="flex-1 flex flex-col">
        <ul role="list" className="flex-1 flex flex-col">
          <li>
            <ul role="list" className="space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      'flex items-center h-12 px-4 text-sm font-semibold',
                      item.current ? 'bg-gray-800' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    )}
                  >
                    <item.icon className="w-6 h-6 mr-3" aria-hidden="true" />
                    <span>{item.name}</span>
                    {item.count ? (
                      <span className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-xs font-medium leading-5 text-white ring-1 ring-inset ring-gray-700">
                        {item.count}
                      </span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="mt-auto">
            <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
            <ul role="list" className="mt-2 space-y-1">
              {teams.map((team) => (
                <li key={team.id}>
                  <a
                    href={team.href}
                    className={classNames(
                      'flex items-center h-12 px-4 text-sm font-semibold',
                      team.current ? 'bg-gray-800' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    )}
                  >
                    <span className="flex items-center justify-center w-8 h-8 mr-3 bg-gray-800 rounded-full border border-gray-700">
                      {team.initial}
                    </span>
                    <span>{team.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <div className="flex items-center h-16 px-6">
          <img
            className="w-8 h-8 rounded-full bg-gray-800"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <span className="ml-3">Tom Cook</span>
        </div>
      </nav>
    </div>
  );
}

export default SidebarExample;
