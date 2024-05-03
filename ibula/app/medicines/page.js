import { Suspense } from "react";
import Loading from "../components/elements/Loading";
import MedicineList from "../components/medicines/MedicineList";
import { loadMedicines } from "../hooks/loadMedicines";

export default async function MedicinesPage() {
  const medicines = await loadMedicines()

  return (
    <main>
      <Suspense fallback={<Loading />}>
        <MedicineList data={medicines}/>
      </Suspense>
    </main>
  )
}