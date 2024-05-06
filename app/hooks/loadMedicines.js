export async function loadMedicines() {
  
  // await new Promise(resolve => setTimeout(resolve, 3000))

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