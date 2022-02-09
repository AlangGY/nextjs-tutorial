import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface IMovieDetail {
  id: number;
  genres: { id: number; name: string }[];
  overview: string;
  backdrop_path: string;
  poster_path: string;
  title: string;
  vote_average: number;
}
interface MovieDetailProps {
  params: string[];
}

const MovieDetail = ({ params }: MovieDetailProps) => {
  const router = useRouter();
  const [title, id] = params;
  const [movie, setMovie] = useState<IMovieDetail>();
  useEffect(() => {
    (async () => {
      const data = await fetch(`/api/movies/${id}`).then((res) => res.json());
      setMovie(data);
    })();
  }, [id]);
  console.log(movie);
  return (
    <div>
      <h3>{title}</h3>
      {movie ? (
        <>
          <img src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} />
          <ul>
            {movie?.genres.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
          <span>{movie?.overview}</span>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const params = (query.params as string[]) || [];
  return {
    props: {
      params,
    },
  };
};

export default MovieDetail;
