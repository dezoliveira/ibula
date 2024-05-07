const apiUrl = process.env.NEXT_PUBLIC_API

export async function loadMedicine(id) {

  // await new Promise(resolve => setTimeout(resolve, 3000))
  // const response = await fetch(`http://localhost:3000/data/${id}`

  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'GET',
      
      headers: {
        "Content-Type": "application/json",
      },

      next: {
        revalidate: 60
      }
    })
    

    if (!response.ok) {
      notFound()
    }
    
    return response.json()

  } catch (error) {
    console.error("Error:", error);
  }
}