import '../../work.scss'
import '../../grids.scss'
import { fetchAllPhotosData } from '@/api/allPhotosData';
import WorkKids from '../page';

export const metadata = {
  title: 'Bea Domínguez MUAH | Work | Kids',
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
      description: 'Explora los trabajos de Bea Domínguez, maquilladora y peluquera profesional, experta en moda, eventos y producciones.',
      url: 'https://beadominguezmuah.com/work',
      siteName: 'Bea Domínguez MUAH',
      images: [
          {
              url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/logos/Preview.png',
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

interface PhotoId {
  id: string;
}

export async function generateStaticParams() {

  const allPhotosData = await fetchAllPhotosData();

  const filteredData = allPhotosData?.filter(item => item?.tags?.includes('Kids')) || [];

  return filteredData.map((obj: PhotoId) => ({ id: obj.id.toString() }));
}


export default async function WorkKidsId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id.toString();


  return (
    <WorkKids id={id}/>
  );
}