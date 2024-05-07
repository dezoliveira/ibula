const apiUrl = process.env.NEXT_PUBLIC_API

export async function loadMedicines() {

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