const apiUrl = process.env.NEXT_PUBLIC_API

export async function loadMedicine(id) {

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