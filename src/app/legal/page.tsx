


export const metadata = {
  title: 'Bea Domínguez MUAH | Legal Notice',
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

export default function LegalPage() {
  return (
    <section className='legal w-8/12 mt-4 mb-8'>
        <h1 className='h3 mt-6'>1. INFORMACIÓN CORPORATIVA</h1>
        <p className='p mt-2'>En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, <strong>Beatriz Domínguez Gayoso</strong> le informa que es titular del sitio web: <a href="beadominguezmuah.com">beadominguezmuah.com</a>. De acuerdo con lo exigido por el artículo 10 de la mencionada Ley, se notifican los siguientes datos:</p>
        <ul>
            <li className='p mt-6'><strong>Titular:</strong> Beatriz Domínguez Gayoso</li>
            <li className='p'><strong>Correo electrónico de contacto:</strong> <a href="mailto:[beadominguezmuah@gmail.com]">beadominguezmuah@gmail.com</a></li>
        </ul>

        <h1 className='h3 mt-6'>2. USUARIO Y RÉGIMEN DE RESPONSABILIDADES</h1>
        <p className='p mt-2'>La navegación y el uso de este sitio web, así como de todos los subdominios y directorios incluidos, otorgan la condición de Usuario, por lo que se aceptan todas las condiciones de uso aquí establecidas. Si no está de acuerdo con estas condiciones, le rogamos no haga uso del portal.</p>
        <p className='p'>El sitio web proporciona una variedad de información, servicios y datos. El usuario asume la responsabilidad en el uso correcto del sitio. Esta responsabilidad se extiende a la veracidad y licitud de la información que aporte en los formularios de contacto.</p>

        <h1 className='h3 mt-6'>3. POLÍTICA DE PRIVACIDAD</h1>
        <p className='p mt-2'>Beatriz Domínguez Gayoso se compromete a proteger la privacidad de sus usuarios y a garantizar que sus datos personales sean tratados de acuerdo con la normativa vigente en materia de protección de datos. No se recabarán datos personales sin el consentimiento del usuario.</p>
        <p className='p'>Los datos personales proporcionados por los usuarios serán almacenados en un archivo bajo la responsabilidad de  Beatriz Domínguez Gayoso, con la finalidad de poder facilitar la relación comercial.</p>

        <h1 className='h3 mt-6'>4. PROPIEDAD INTELECTUAL</h1>
        <p className='p mt-2'>Todos los contenidos del sitio web, incluyendo textos, imágenes y diseño gráfico, son propiedad de  Beatriz Domínguez Gayoso o de terceros que han autorizado su uso. Se prohíbe la reproducción, distribución o utilización de los contenidos sin autorización previa.</p>

        <h1 className='h3 mt-6'>5. ENLACES A TERCEROS</h1>
        <p className='p mt-2'>Este sitio web puede contener enlaces a otros sitios.  Beatriz Domínguez Gayoso no se hace responsable del contenido de estas páginas externas y no garantiza la disponibilidad técnica, exactitud, veracidad, validez o legalidad de sus contenidos.</p>

        <h1 className='h3 mt-6'>6. MODIFICACIONES</h1>
        <p className='p mt-2'> Beatriz Domínguez Gayoso se reserva el derecho a realizar modificaciones en el contenido del sitio web, así como en sus condiciones de uso, sin necesidad de previo aviso. Estas modificaciones serán efectivas desde su publicación en la web.</p>

        <h1 className='h3 mt-6'>7. JURISDICCIÓN</h1>
        <p className='p mt-2'>La relación entre el usuario y  Beatriz Domínguez Gayoso se regirá por la normativa española vigente. Para cualquier controversia que pueda surgir, serán competentes los juzgados de la localidad de [LOCALIDAD].</p>
    </section>
  );
}