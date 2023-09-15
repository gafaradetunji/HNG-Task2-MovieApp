interface Data {
  id: number,
  name: string,
  icon: JSX.Element
  component: string
}

interface Movie {
  poster_path: string;
  backdrop_path: string;
  id: number;
  title: string;
  genres: [
    {
      name: string;
      id: string;
    }
  ];
  original_language: string;
  release_date: string;
  runtime: string;
  vote_average: string;
  overview: string;
  videos: { results: [{ type: string; key: string }] };
}
