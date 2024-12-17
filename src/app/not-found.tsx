'use client' // Error boundaries must be Client Components
 
import { ErrorPage, Footer, Header } from '@/components'
import { useEffect } from 'react'
 
export default function NotFound({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {

    console.error(error)
  }, [error])

  console.log(error);
  
 
  return (
    <>
      <Header/>
      <ErrorPage
        errorMessage={'404 Not Found'}
        errorXplanation='¡Uy! No se ha encontrado la página que busca.'/>
      <Footer/>
    </>
  )
}