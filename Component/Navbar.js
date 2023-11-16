'use client'
import React, {useState} from 'react'
import UserCreation from '../pages/UserCreation'
import UserTable from '../pages/UserTable'
import Tabs from './Tabs'

const Navbar = () => {

      return (
        <div className="bg-gray-100 p-8">
          <div className="max-w-md mx-auto">
            <Tabs/>
          </div>
        </div>
      );
}

export default Navbar;