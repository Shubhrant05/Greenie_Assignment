import React, { useState } from 'react';
import Link from 'next/link';

const Tabs = () => {
  return (
    <div>
      <div className="flex">
        <Link href='/'>
          GREENIE
        </Link>
        <Link href='/UserCreation'>
          <span>
            Create User
          </span>
        </Link>
        <Link href='/UserTable'>
          <span>
            User Details
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Tabs;
