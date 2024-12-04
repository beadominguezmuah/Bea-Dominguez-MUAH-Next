

import { Inter } from 'next/font/google'
import { Header } from '../components/index'
import './globals.css'
import './index.scss'
import { Providers } from '@/store/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {


    return (
        <html lang="es">
            <body className={inter.className}>
                <Header></Header>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
