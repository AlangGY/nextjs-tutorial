import MoviesList from "../../components/MoviesList";
import Seo from "../../components/Seo";
import { IMovie } from "../../models";

interface MoviesPageProps {
  movies: IMovie[];
}

const MoviesPage = ({ movies }: MoviesPageProps) => {
  return (
    <div>
      <Seo title="Movies" />
      <MoviesList movies={movies} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const { results } = await fetch(
    "http://localhost:3000/api/movies/popular"
  ).then((res) => res.json());
  return {
    props: {
      movies: results,
    },
  };
};

export default MoviesPage;
