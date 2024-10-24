import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <div className='grid-background'></div>
        <main className='min-h-screen container'>
          <Header />
          <Outlet />
        </main>
      {/* Modified Footer Design */}
      <footer className='p-6 bg-gray-900 text-gray-300 mt-10 border-t border-gray-700'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            <p className='text-sm'>
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
            <ul className='flex space-x-4'>
              <li>
                <a
                  href='#'
                  className='hover:text-white transition-colors duration-200'
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-white transition-colors duration-200'
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-white transition-colors duration-200'
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AppLayout
