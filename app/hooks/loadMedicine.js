export async function loadMedicine(id) {

  try {
    const response = await fetch(`http://localhost:3000/data/${id}`, {
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