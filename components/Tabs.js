import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/Greenie.svg'
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div>
      <div className="flex justify-between mb-3">
        <Link href='/'><Image src={logo} alt='logo' className='w-12'/></Link>
        <Link href='/UserCreation'>
          <span onClick={() => { setActiveTab(1) }} className={`${activeTab === 1 ? 'bg-blue' : ''}`}>
            Create User
          </span>
        </Link>
        <Link href='/UserTable'>
          <span onClick={() => { setActiveTab(2) }} className={`${activeTab === 2 ? 'bg-blue' : ''}`}>
            User Details
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Tabs;
