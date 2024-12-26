

import { Inter } from 'next/font/google'
import './globals.css'
import './index.scss'
import { Providers } from '@/store/Providers'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Bea Domínguez MUAH | Work',
    description: 'Explora los trabajos de Bea Domínguez, maquilladora y peluquera profesional, experta en moda, eventos y producciones.',
    keywords: ['maquilladora profesional', 'peluquera', 'Bea Domínguez', 'MUAH', 'maquillaje profesional', 'peluquería', 'maquilladora moda', 'maquilladora eventos', 'maquillaje producciones', 'estilismo', 'belleza', 'looks personalizados', 'maquillaje y peluquería', 'MUAH Work'],
    icons: {
        icon: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/logos/iconbeadominguez_.png',
    },

    applicationName: 'Bea Domínguez MUAH',
    authors: [{ name: 'Luis Pomar', url: 'https://www.w-studio.es/' }],
    generator: 'Next.js',
    openGraph: {
        title: 'Bea Domínguez MUAH - Work',
        description: 'Explora los trabajos de Bea Domínguez, maquilladora y peluquera profesional, experta en moda, eventos y producciones.',
        url: 'https://beadominguezmuah.com/work',
        siteName: 'Bea Domínguez MUAH',
        images: [
            {
                url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/logos/Preview.png',
                width: 1200,
                height: 630,
                alt: 'Bea Domínguez MUAH',
                type: 'image/png'
            }
        ],
        locale: 'es_ES',
        type: 'website'
    },
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {


    return (
        <html lang="es">
            <body className={inter.className}>
                <Providers>
                    {children}
                </Providers>
            </body>
            <GoogleAnalytics gaId="G-842QT3BHXR" />
        </html>
    )
}
