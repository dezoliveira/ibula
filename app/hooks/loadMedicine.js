import { notFound } from "next/navigation"
import { database } from "../firebase/config"
import { get, ref } from "firebase/database"

export async function loadMedicine(id) {
  
  console.log(id)
  const medicineRef = ref(database, 'medicines/' + id)

  try {
    // await new Promise(resolve => setTimeout(resolve, 3000))

    const snapshot = await get(medicineRef, {
      next: {
        revalidate: 60
      }
    })

    if (snapshot.exists()) {
      const medicine = snapshot.val()

      return medicine

    } else {
      notFound()
    }

  } catch (error) {
    console.error("Error:", error);
  }
}