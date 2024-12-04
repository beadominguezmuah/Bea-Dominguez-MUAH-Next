import path from 'path';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'beadominguezmuah.s3.eu-north-1.amazonaws.com',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    logger: {
      // Silenciar advertencias específicas
      warn: (message: any) => {
        if (message.includes('legacy JS API')) {
          return; // Ignorar este aviso
        }
        console.warn(message); // Para otras advertencias, mostrarlas
      },
    },
  },
};

export default nextConfig;