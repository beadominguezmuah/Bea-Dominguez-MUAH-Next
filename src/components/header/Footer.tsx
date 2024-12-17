import './header.scss'

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className='footer'>
        <nav className='footer_info'>
            {/* <Link to={"/About"} className=" h5 ">About me</Link> */}
            <a  className=" h5 " href="mailto:beadominguezmuah@gmail.com?subject=Consulta&body=Hola, me gustaría obtener más información.">beadominguezmuah@gmail.com </a>
            <Link href={"/legal"} className=" h5 ">Legal notice</Link>
        </nav>
    </footer>
  )
}
