
import './work.scss'
import './grids.scss'
import { fetchAllPhotosData } from '../../api/allPhotosData'
import { WorkPage } from '@/components';


export const metadata = {
    title: 'Bea Domínguez MUAH | Work',
    description: 'Explora los trabajos de Bea Domínguez, maquilladora y peluquera profesional, experta en moda, eventos y producciones."',
    keywords: ['maquilladora profesional', 'peluquera', 'Bea Domínguez', 'MUAH', 'maquillaje profesional', 'peluquería', 'maquilladora moda', 'maquilladora eventos', 'maquillaje producciones', 'estilismo', 'belleza', 'looks personalizados', 'maquillaje y peluquería', 'MUAH Work'],
    icons: {
        icon: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/logos/iconbeadominguez_.png',
    },

    applicationName: 'Bea Domínguez MUAH',
    authors: [{ name: 'Luis Pomar', url: 'https://www.w-studio.es/' }],
    generator: 'Next.js',
    openGraph: {
        title: 'Bea Domínguez MUAH - Work',
        description: 'This is a detailed description of My Awesome Page.',
        url: 'src\assets\Captura de pantalla 2024-11-25 174454.png',
        siteName: 'Bea Domínguez MUAH',
        images: [
            {
                url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/logos/logobeadominguez_.png',
                width: 1200,
                height: 630,
                alt: 'Bea Domínguez MUAH',
                type: 'image/jpg'
            }
        ],
        locale: 'es_ES',
        type: 'website'
    },
};

interface WorkProps {
    id?: string,
  }



  export default async function Work({ id }: WorkProps) {

    const data = await fetchAllPhotosData();


    return (
        <WorkPage data={data} id={id} path='/work' />
    );
}