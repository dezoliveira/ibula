import { notFound } from "next/navigation"
import Medicine from "@/app/components/medicines/Medicine"
import Loading from "@/app/components/elements/Loading"
import { Suspense } from "react"
import { loadMedicine } from "@/app/hooks/loadMedicine"

export const dinamycParams = false

export default async function MedicinePage({ params }) {
  const medicine = await loadMedicine(params.id)

  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Medicine data={medicine}/>
      </Suspense>
    </main>
  )
}