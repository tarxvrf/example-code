import React from 'react'
import {linkmenu} from '@/pages/UI/components/Linkmenu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const path= usePathname()
  return (
    <div>
      <ul className='flex flex-row gap-5'>
      {linkmenu.map((val,index)=>
      <Link key={index} href={val.path}>{path === val.path? (<li className='text-yellow-300'>{val.name}</li>):val.name}</Link>
      )}
      </ul>
    </div>
  )
}
export default Navbar
