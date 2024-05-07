const apiUrl = process.env.NEXT_PUBLIC_API

export async function loadMedicines() {
  
  // await new Promise(resolve => setTimeout(resolve, 3000))

  try {
    const response = await fetch(apiUrl, {
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