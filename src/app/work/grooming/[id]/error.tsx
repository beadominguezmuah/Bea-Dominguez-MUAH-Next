'use client' // Error boundaries must be Client Components

import { ErrorPage } from '@/components'
import { useEffect } from 'react'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <>
      <ErrorPage
        errorMessage={error.message}
        errorXplanation='Por favor, introduce un ID válido o vuelve al inicio para intentarlo de nuevo.' />
    </>
  )
}