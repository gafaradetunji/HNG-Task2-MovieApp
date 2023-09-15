const GetAllMovies = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`)

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error in GetAllMovies:', error);
    throw error;
  }
};

export default GetAllMovies;
