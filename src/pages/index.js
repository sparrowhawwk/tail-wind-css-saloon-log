import { useState } from 'react'
import { Inter } from 'next/font/google'
import Header from './header'
import Sidebar from './sidebar'
import Today from './today'
import History from './history'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [component, setComponent] = useState(<Today></Today>);
  const chooseComponent = component => {
    if (component === 'history') {
      setComponent(<History></History>);
    } else {
      setComponent(<Today></Today>);
    }
  };
  return (
    <div className='container mx-auto text-slate-600 shadow-sm bg-white'>
      <Header></Header>
      <div className='flex'>
        <div className='w-1/6'>
          <Sidebar chooseComponent = {chooseComponent}></Sidebar>
        </div>
        <div className='w-5/6'>
          {component}
        </div>
      </div>
    </div>
  )
}
