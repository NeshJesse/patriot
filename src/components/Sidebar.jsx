"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Home, MenuIcon, LucideFlaskConical, SettingsIcon, EditIcon, CogIcon, FileEditIcon, FormInput, StepForward, DollarSign, SyringeIcon, UsersRoundIcon, UserCircle } from 'lucide-react';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`fixed left-0 top-0 h-full bg-green-600 text-white transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      {!isCollapsed &&
      <h1 className='text-2xl p-7'>
      InjectBuddy</h1>
      }
      <button 
        onClick={toggleSidebar}
        className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-gray-700"
      >
        <MenuIcon />
      </button>
      <nav className="mt-16">
        <ul className="space-y-2">
          <li>
            <Link href="/home" className="flex items-center p-4 hover:bg-white hover:text-black">
              <Home className="w-6 h-6" />
              {!isCollapsed && <span className="ml-4">Home</span>}
            </Link>
          </li>
           <li>
            <Link href="/create" className="flex items-center p-4 hover:bg-white hover:text-black">
              <SyringeIcon className="w-6 h-6" />
              {!isCollapsed && <span className="ml-4">Plan Protest</span>}
            </Link>
          </li>
          <li>
            <Link href="/partici" className="flex items-center p-4 hover:bg-white hover:text-black">
              <UsersRoundIcon className="w-6 h-6" />
              {!isCollapsed && <span className="ml-4">Participant Welfare </span>}
            </Link>
          </li>
          <li>
            <Link href="/account" className="flex items-center p-4 hover:bg-white hover:text-black">
              <UserCircle className="w-6 h-6" />
              {!isCollapsed && <span className="ml-4">Account</span>}
            </Link>
          </li>
          

        </ul>
      </nav>
    </div>
  );
}
