import { notFound } from "next/navigation"
import Medicine from "@/app/components/medicines/Medicine"
import Loading from "@/app/components/elements/Loading"
import { Suspense } from "react"

export const dinamycParams = false

const getMedicine = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  try {
    const response = await fetch(`http://localhost:3000/data/${id}`, {
      method: 'GET',
      
      headers: {
        "Content-Type": "application/json",
      },

      next: {
        revalidate: 60
      }
    })
    

    if (!response.ok) {
      notFound()
    }
    
    return response.json()

  } catch (error) {
    console.error("Error:", error);
  }
}

export default async function Medicines({ params }) {
  const medicine = await getMedicine(params.id)

  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Medicine data={medicine}/>
      </Suspense>
    </main>
  )
}