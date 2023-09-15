const getMovie = async (movieId: string) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error in getMovie:', error);
    throw error;
  }
};

export default getMovie;
