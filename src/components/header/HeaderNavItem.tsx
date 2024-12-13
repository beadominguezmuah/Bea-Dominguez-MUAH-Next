'use client';

import Link from 'next/link'
import React from 'react'
import './header.scss'
import '../../app/index.scss'
import { usePathname } from 'next/navigation';

interface Props {
    title: string;
  }

export const HeaderNavItem = ({title}: Props) => {

  
  const location = usePathname();
  // console.log(location);
  
  
  return (
    <li>
        <Link className={`h4 ${location.includes(title.toLowerCase()) ? 'active' : ''}`} href={location.includes(title.toLowerCase()) ? '/work' : ('/work/' + title.toLowerCase())} >{title}</Link>
    </li>
  )
}
