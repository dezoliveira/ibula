import { notFound } from "next/navigation"
import { database } from "../firebase/config"
import { get, ref } from "firebase/database"

export async function loadMedicines() {

  const medicinesRef = ref(database, 'medicines') 

  try{
    await new Promise(resolve => setTimeout(resolve, 3000))

    const snapshot = await get(medicinesRef, {
      next: {
        revalidate: 0
      }
    })

    if(snapshot.exists()) {
      const medicinesArray = Object.entries(snapshot.val()).map(([id, data]) => ({
        id,
        ...data
      }))

      return medicinesArray
    }
    
  } catch(err){
    console.error(err);
  }
}