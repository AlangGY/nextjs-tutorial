import { GetServerSideProps } from "next";
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

export const getServerSideProps: GetServerSideProps = async () => {
  const { API_ENDPOINT, API_KEY } = process.env;
  const { results } = await fetch(
    `${API_ENDPOINT}/movie/popular?api_key=${API_KEY}`
  ).then((res) => res.json());
  return {
    props: {
      movies: results,
    },
  };
};

export default MoviesPage;
