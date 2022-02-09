import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEventHandler, useCallback } from "react";
import { IMovie } from "../models";
import Movie from "./MovieSimple";

export interface MoviesListProps {
  movies?: IMovie[];
}

const MoviesList = ({ movies }: MoviesListProps) => {
  return (
    <>
      <ul>
        {movies &&
          movies.map((movie) => (
            <Link
              key={movie.id}
              href={{
                pathname: `movies/${movie.title}/${movie.id}`,
              }}
            >
              <a>
                <Movie {...movie} />
              </a>
            </Link>
          ))}
      </ul>
      <style jsx>{`
        ul {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-items: center;
          align-items: center;
          overflow: hidden;
          padding-top: 10px;
        }
      `}</style>
    </>
  );
};

export default MoviesList;
