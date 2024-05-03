import { Suspense } from "react";
import Loading from "../components/elements/Loading";
import MedicineList from "../components/medicines/MedicineList";

async function getMedicines() {

  await new Promise(resolve => setTimeout(resolve, 3000))

  try {
    const response = await fetch('http://localhost:3000/data', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    })

    return response.json()

  } catch (error) {
    console.error("Error:", error);
  }
}

export default async function MedicinesPage() {
  const medicines = await getMedicines()

  return (
    <main>
      <Suspense fallback={<Loading />}>
        <MedicineList data={medicines}/>
      </Suspense>
    </main>
  )
}