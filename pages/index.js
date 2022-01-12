import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "98df3995db95157643c0c3d1d5872bc5";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const data = await response.json();
      setMovies(data.results);
    })();
  }, []);

  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Home;
