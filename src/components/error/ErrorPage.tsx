// 'use client'

import Image from "next/image";
import Link from "next/link";
// import { useEffect, useState } from "react";



interface errorProps {
  errorMessage: string,
  errorXplanation?: string
}


export const ErrorPage = ({ errorMessage, errorXplanation }: errorProps) => {



  // const data = [
  //   {
  //     id: 118,
  //     title: 'adia',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/adia+(1).jpeg',
  //     alt: 'modelo posando con labios rojos',
  //     date: '2024-11-06',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 123,
  //     title: 'adia 3',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/adia+(3).jpeg',
  //     alt: 'modelo caminando con look rojo',
  //     date: '2024-11-06',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 122,
  //     title: 'adia 2',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/adia+(2).jpeg',
  //     alt: 'modelo caminando de lado con gafas y labio rojo',
  //     date: '2024-11-06',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 124,
  //     title: 'adia 4',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/adia+(5).jpeg',
  //     alt: 'modelo agachada rodeada vestida de blanco',
  //     date: '2024-11-06',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 125,
  //     title: 'adia 5',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/adia+(6).jpeg',
  //     alt: 'modelo sentada',
  //     date: '2024-11-06',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 114,
  //     title: 'beauty lima morado',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/beautylima+(2).jpeg',
  //     alt: 'modelo con maquillaje llamativo',
  //     date: '2024-10-23',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 115,
  //     title: 'beauty lima 2',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/beautylima+(1).jpeg',
  //     alt: 'modelo posando con maquillaje llamativo',
  //     date: '2024-10-23',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 116,
  //     title: 'traje verde',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/beautylima+(3).jpeg',
  //     alt: 'modelo con traje verde en',
  //     date: '2024-10-23',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 117,
  //     title: 'traje verde2',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/beautylima+(4).jpeg',
  //     alt: 'modelo con traje verde en el suelo',
  //     date: '2024-10-23',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 112,
  //     title: 'conlm5',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/image00005.jpeg',
  //     alt: 'modelo posando',
  //     date: '2024-10-14',
  //     tags: ['Woman', ' Advertisement'],
  //     publish: true
  //   },
  //   {
  //     id: 113,
  //     title: 'conlm6',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/image00006.jpeg',
  //     alt: 'modelo posando',
  //     date: '2024-10-14',
  //     tags: ['Woman', ' Advertisement'],
  //     publish: true
  //   },
  //   {
  //     id: 109,
  //     title: 'conlm2',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/conlam+(2).jpeg',
  //     alt: 'modelo posando',
  //     date: '2024-10-14',
  //     tags: ['Woman', ' Advertisement'],
  //     publish: true
  //   },
  //   {
  //     id: 110,
  //     title: 'conlm3',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/conlam+(3).jpeg',
  //     alt: 'modelo posando',
  //     date: '2024-10-14',
  //     tags: ['Woman', ' Advertisement'],
  //     publish: true
  //   },
  //   {
  //     id: 108,
  //     title: 'conlm 1',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/conlam+(1).jpeg',
  //     alt: 'modelo posando',
  //     date: '2024-10-14',
  //     tags: ['Woman', ' Advertisement'],
  //     publish: true
  //   },
  //   {
  //     id: 98,
  //     title: 'irina tumbada cristalera',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/irina+(1).jpeg',
  //     alt: 'modelo tumbada lateralmente con fondo verde botella',
  //     date: '2024-10-10',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 104,
  //     title: 'irina piedra naranja',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/image00014.jpeg',
  //     alt: 'modelo apoyada sobre pared de piedra',
  //     date: '2024-10-10',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 97,
  //     title: 'close up irina fondo verde',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/irina+(2).jpeg',
  //     alt: 'rostro modelo sobre fondo verde',
  //     date: '2024-10-10',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 102,
  //     title: 'irina tuberia',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/image00011.jpeg',
  //     alt: 'modelo apoyada sobre una tuberia',
  //     date: '2024-10-10',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 99,
  //     title: 'irina colegiala',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/image00007.jpeg',
  //     alt: 'modelo sobre muro de piedra',
  //     date: '2024-10-10',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 100,
  //     title: 'irina colegiala mitad',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/image00008.jpeg',
  //     alt: 'modelo con los brazos cruzados',
  //     date: '2024-10-10',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 101,
  //     title: 'irina vestido negro agachada',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/image00010.jpeg',
  //     alt: 'modelo en cuclillas con vestido negro',
  //     date: '2024-10-10',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 103,
  //     title: 'irina coche',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/image00013.jpeg',
  //     alt: 'modelo apoyada sobre coche',
  //     date: '2024-10-10',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 47,
  //     title: 'clauns full glam',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/15.09+(1).jpeg',
  //     alt: 'maquillaje full glam y ondas glam',
  //     date: '2024-09-15',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 48,
  //     title: 'soft glam',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/15.09+(2).jpeg',
  //     alt: 'modelo con maquillaje soft glam y banda en el pelo',
  //     date: '2024-09-15',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 49,
  //     title: 'soft glam 2',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/15.09+(3).jpeg',
  //     alt: 'modelo con maquillaje soft glam',
  //     date: '2024-09-15',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 50,
  //     title: 'full glam',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/15.09+(4).jpeg',
  //     alt: 'modelo con maquillaje full glam',
  //     date: '2024-09-15',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 46,
  //     title: 'mario ermito',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/12-09-24.png',
  //     alt: 'Mario Ermito en premier',
  //     date: '2024-09-12',
  //     tags: ['Grooming', 'Celebs'],
  //     publish: true
  //   },
  //   {
  //     id: 45,
  //     title: 'paula traje',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/10.09.2024.jpeg',
  //     alt: 'modelo con pelo rizado corto',
  //     date: '2024-09-10',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 20,
  //     title: 'vlada caminando',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.09+(1).jpeg',
  //     alt: 'modelo caminando vestido negro',
  //     date: '2024-09-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 21,
  //     title: 'vlada gafas de sol',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.09+(2).jpeg',
  //     alt: 'modelo con gafas de sol',
  //     date: '2024-09-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 22,
  //     title: 'vlada agachada',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.09+(3).jpeg',
  //     alt: 'modelo agachada',
  //     date: '2024-09-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 34,
  //     title: 'vlada agachada pared azul',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.9+(1).jpeg',
  //     alt: 'modelo sentada apoyada en la pared',
  //     date: '2024-09-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 38,
  //     title: 'vlada apoyada espalda',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.9+(7).jpeg',
  //     alt: 'modelo con la espalda apoyada en una pared',
  //     date: '2024-09-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 37,
  //     title: 'vlada apoyada mirando de lado',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.9+(5).jpeg',
  //     alt: 'modelo apoyada en una puerta',
  //     date: '2024-09-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 36,
  //     title: 'vlada brazo levantado',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.9+(4).jpeg',
  //     alt: 'modelo con brazo levantado',
  //     date: '2024-09-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 35,
  //     title: 'vlada cabeza apoyada',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.9+(3).jpeg',
  //     alt: 'modelo agachada con la cabeza apoyada en una pared',
  //     date: '2024-09-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 39,
  //     title: 'vlada apoyada de frente',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.9+(9).jpeg',
  //     alt: 'modelo apoyada en una pared de frente',
  //     date: '2024-09-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 40,
  //     title: 'eugenia tienda lamparas',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/10.07+(1).jpeg',
  //     alt: 'modelo contrapicada con vestido marrón',
  //     date: '2024-09-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 105,
  //     title: 'carrefour1',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/carrefour2.webp',
  //     alt: 'modelo niño',
  //     date: '2024-08-15',
  //     tags: [' Advertisement', 'Kids'],
  //     publish: true
  //   },
  //   {
  //     id: 106,
  //     title: 'carrefou2',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/carrefour3.webp',
  //     alt: 'modelo niño',
  //     date: '2024-08-15',
  //     tags: ['Kids', ' Advertisement'],
  //     publish: true
  //   },
  //   {
  //     id: 107,
  //     title: 'carrefour',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/carrefour.webp',
  //     alt: 'modelo niño',
  //     date: '2024-08-15',
  //     tags: ['Kids', ' Advertisement'],
  //     publish: true
  //   },
  //   {
  //     id: 44,
  //     title: 'eurge lazo pelo',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/10.07+(6).jpeg',
  //     alt: 'modelo con lazo de pelo en el pelo',
  //     date: '2024-07-10',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 41,
  //     title: 'eugenia espejo moto',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/10.07+(2).jpeg',
  //     alt: 'modelo sentada en el suelo con calcetines rojos',
  //     date: '2024-07-10',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 42,
  //     title: 'puerta no bloquear de lado',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/10.07+(4).jpeg',
  //     alt: 'modelo apoyada sobre puerta con inscripción',
  //     date: '2024-07-10',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 43,
  //     title: 'euge puerta mas cerca',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/10.07+(5).jpeg',
  //     alt: 'modelo apoyada en una pared',
  //     date: '2024-07-10',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 8,
  //     title: 'view gabardina',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.07+(10).jpeg',
  //     alt: 'modelo sujetándose la gabardina',
  //     date: '2024-07-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 10,
  //     title: 'view top rojo',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.07+(12).jpeg',
  //     alt: 'modelo con top rojo y pelo recogido',
  //     date: '2024-07-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 7,
  //     title: 'view efecto mojado',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.07+(1).jpeg',
  //     alt: 'modelo sentada en el suelo con efecto mojado en cabello',
  //     date: '2024-07-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 9,
  //     title: 'view americana',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.07+(11).jpeg',
  //     alt: 'modelo con un vestido blazer y los brazos abiertos',
  //     date: '2024-07-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 11,
  //     title: 'view top rojo de pie',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.07+(13).jpeg',
  //     alt: 'modelo con top rojo de pie',
  //     date: '2024-07-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 12,
  //     title: 'view efecto mojado sentada',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.07+(2).jpeg',
  //     alt: 'modelo sentada en el suelo con el cabello efecto mojado',
  //     date: '2024-07-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 13,
  //     title: 'view beauty pelo volando',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.07+(3).jpeg',
  //     alt: 'rostro con pelo en movimiento',
  //     date: '2024-07-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 14,
  //     title: 'view beauty efecto mojado',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.07+(4).jpeg',
  //     alt: 'rostro con pelo efecto mojado',
  //     date: '2024-07-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 15,
  //     title: 'view medias azules en cuclillas',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.07+(5).jpeg',
  //     alt: 'modelo con medias azules en cuclillas',
  //     date: '2024-07-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 16,
  //     title: 'view beauty pelo liso',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.07+(6).jpeg',
  //     alt: 'rostro con cabello liso',
  //     date: '2024-07-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 18,
  //     title: 'view medias azules de pie',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.07+(8).jpeg',
  //     alt: 'modelo con medias azules de pie',
  //     date: '2024-07-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 19,
  //     title: 'view body negro sentada',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.07+(9).jpeg',
  //     alt: 'modelo con body y cinta negra',
  //     date: '2024-07-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 17,
  //     title: 'view pendientes rojos suelo',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/1.07+(7).jpeg',
  //     alt: 'modelo sentada con pendientes rojos',
  //     date: '2024-07-01',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 69,
  //     title: 'tania cuerpo entero',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/23.3+(2).jpg',
  //     alt: 'modelo de pie en medio de una calle',
  //     date: '2024-05-23',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 67,
  //     title: 'tania flor media cabeza',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/23.3+(1).jpg',
  //     alt: 'medio rostro de mujer con flor en el pelo',
  //     date: '2024-05-23',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 70,
  //     title: 'tania mordiendo flor',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/23.3+(4).jpg',
  //     alt: 'rostro mordiendo una flor',
  //     date: '2024-05-23',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 61,
  //     title: 'malou en acera piernas estiradas',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/20.05+(5).jpeg',
  //     alt: 'modelo sentada en la carretera',
  //     date: '2024-05-20',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 62,
  //     title: 'malou agachada analogica',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/20.05+(7).jpeg',
  //     alt: 'modelo en cuclillas',
  //     date: '2024-05-20',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 54,
  //     title: 'malou escaleras',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/20.05+(10).jpeg',
  //     alt: 'modelo sentada en escaleras',
  //     date: '2024-05-20',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 56,
  //     title: 'malou cesped',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/20.05+(13).jpeg',
  //     alt: 'modelo sobre césped',
  //     date: '2024-05-20',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 57,
  //     title: 'malou punta botas',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/20.05+(15).jpeg',
  //     alt: 'modelo en cuclillas',
  //     date: '2024-05-20',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 53,
  //     title: 'bañador blanco analogica de pie',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/20.05+(1).jpeg',
  //     alt: 'modelo posando con botas cowboy',
  //     date: '2024-05-20',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 60,
  //     title: 'malou en cesped 2',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/20.05+(4).jpeg',
  //     alt: 'modelo sobre césped con las piernas cruzadas',
  //     date: '2024-05-20',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 55,
  //     title: 'malou picada',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/20.05+(11).jpeg',
  //     alt: 'modelo en plano picado',
  //     date: '2024-05-20',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 58,
  //     title: 'malou pelos cara',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/20.05+(2).jpeg',
  //     alt: 'modelo sentada en escaleras',
  //     date: '2024-05-20',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 59,
  //     title: 'malou cuesta cesped',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/20.05+(3).jpeg',
  //     alt: 'modelo sobre césped',
  //     date: '2024-05-20',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 81,
  //     title: 'beauty chica',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/6.4+(12).jpeg',
  //     alt: 'rostro femenino',
  //     date: '2024-04-06',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 79,
  //     title: 'dos chicos byn',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/6.4+(1).jpeg',
  //     alt: 'dos modelos masculinos en blanco y negro',
  //     date: '2024-04-06',
  //     tags: ['Grooming'],
  //     publish: true
  //   },
  //   {
  //     id: 82,
  //     title: 'beauty chico rizos',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/6.4+(13).jpeg',
  //     alt: 'rostro masculino',
  //     date: '2024-04-06',
  //     tags: ['Grooming'],
  //     publish: true
  //   },
  //   {
  //     id: 80,
  //     title: 'chico en escalera',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/6.4+(10).jpeg',
  //     alt: 'modelo subido a una escalera',
  //     date: '2024-04-06',
  //     tags: ['Grooming'],
  //     publish: true
  //   },
  //   {
  //     id: 83,
  //     title: 'beauty chica',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/6.4+(14).jpeg',
  //     alt: 'modelo sujetando el cuello de la camiseta',
  //     date: '2024-04-06',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 84,
  //     title: 'sentada en pivote',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/6.4+(15).jpeg',
  //     alt: 'modelo apoyada',
  //     date: '2024-04-06',
  //     tags: ['Woman'],
  //     publish: true
  //   },
  //   {
  //     id: 85,
  //     title: 'mirando atras',
  //     url: 'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/6.4+(16).jpeg',
  //     alt: 'modelo mirando hacia atrás',
  //     date: '2024-04-06',
  //     tags: ['Woman'],
  //     publish: true
  //   }]

  // const randomIndex = Math.floor(Math.random() * data.length);
  // const randomItem = data[randomIndex]


  return (
    <section className=" fixed flex items-center justify-center w-screen h-screen m-auto">

      <div className="hidden md:flex md:w-1/2 h-5/6 p-8 items-center justify-center">
        <Image className='h-full w-auto'
          src={'https://beadominguezmuah.s3.eu-north-1.amazonaws.com/Fotos/adia+(3).jpeg'}
          alt={'modelo caminando con look rojo'}
          width={200}
          height={200}
          quality={100}
          priority
        />
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 hl">{errorMessage}</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">{errorXplanation}</p>
        <Link href="/" className="px-6 py-3 bg-red-400 text-white rounded-lg inline-block hover:bg-red-200 hover:text-red-400 transition duration-300 ease-in-out">Volver a inicio</Link>
      </div>

    </section>
  )
}
