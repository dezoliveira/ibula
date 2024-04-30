import { Suspense } from "react";
import MedicineList from "../components/medicines/MedicineList";
import Loading from "../components/elements/Loading";

export default function MedicinesPage() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <MedicineList />
      </Suspense>
    </main>
  )
}