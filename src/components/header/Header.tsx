import Link from 'next/link'
import React from 'react'
import './header.scss'
import {HeaderNavItem} from './HeaderNavItem'
import Image from 'next/image'

interface HeaderProps {
    nav?: boolean
  }

export const Header = ({nav }: HeaderProps) => {

  return (
    <header className='header'>
        <Link href={'/work'} className='header_logo'>
            <Image
                src='https://beadominguezmuah.s3.eu-north-1.amazonaws.com/logos/logobeadominguez_.png'
                alt='Bea Dominguez MUAH logo'
                width={100}
                height={100}/>
            <span className='h5'>Make - Up & Hair</span>
        </Link>
        
        
        {!nav &&
            <nav className='header_nav'>
            <ul>
                <HeaderNavItem title='Grooming' />
                <HeaderNavItem title='Woman' />
                <HeaderNavItem title='Kids' />
                <HeaderNavItem title='Advertising' />
                {/* <HeaderNavItem title='Celebs' /> */}
            </ul>

        </nav>}

        <nav className='header_info'>
            {/* <Link href={"/About"} className=" h5 ">About me</Link> */}
            <Link href={"/legal"} className=" h5 ">Legal notice</Link>
            <a  className=" h5 " href="mailto:beadominguezmuah@gmail.com?subject=Consulta&body=Hola, me gustaría obtener más información.">beadominguezmuah@gmail.com </a>
        </nav>
    </header>
  )
}
