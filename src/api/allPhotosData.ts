export async function fetchAllPhotosData() {
  try {
    const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:IhioyNcV/beadominguez');
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }

    const data = await response.json();

    // Filtra y ordena los datos
    const sortedData = data
      .filter((item: { publish: boolean }) => item.publish === true)
      .sort((a: { date: string }, b: { date: string }) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return sortedData;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw error;
  }
}


export async function fetchAPhotosData( id: number) {
  try {
    const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:IhioyNcV/beadominguez/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }

    const data = await response.json();
    
    if (!data.publish) {
      throw new Error('La imagen no está lista para ser publicada');
    }

    return data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw error;
  }
}