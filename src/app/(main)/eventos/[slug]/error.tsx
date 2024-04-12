"use client" // Error components must be Client Components

import { useEffect } from "react"
import { Button } from "@nextui-org/react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10">
      <h2 className="text-black title">Algo salio mal</h2>
      <Button
        variant="solid"
        color="default"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Intentar nuevamente
      </Button>
    </div>
  )
}
