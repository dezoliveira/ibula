'use client'

import { Suspense } from "react";
import Loading from "./components/elements/Loading";
import MedicineList from "@/app/components/medicines/MedicineList";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <MedicineList />
      </Suspense>
    </main>
  );
}
