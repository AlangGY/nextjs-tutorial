import Image from "next/image";
import { IMovie } from "../models";
import styled from "styled-components";

type MovieProps = IMovie;

const MovieSimple = ({ poster_path, title }: MovieProps) => {
  return (
    <>
      <li>
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={title}
        />
        <h4>{title}</h4>
      </li>
      <style jsx>{`
        li {
          width: 200px;
          cursor: pointer;
        }
        li:hover h4 {
          transform: scale(1.1);
        }
        li:hover img {
          transform: translateY(-2px);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
          opacity: 0.9;
        }
        img {
          transition: all 0.2s ease-in;
          box-shadow: 0 -1px 3px -1px rgba(0, 0, 0, 0.5);
          border-radius: 10px;
        }
        h4 {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          transition: all 0.2s ease-in;
          text-align: center;
        }
      `}</style>
    </>
  );
};

const StyledImage = styled(Image)`
  &:hover {
  }
`;

export default MovieSimple;
