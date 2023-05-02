import React, { useEffect, useState } from 'react';
import axios from './axios';
import "./Row.css";
import { Link } from 'react-router-dom';

const base_url="https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies]= useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
   
  return (
    <div className="row">
        <h2 className='mt-4'>{title}</h2>

        <div className="row_posters">
            {movies.map(movie => (
                <Link to={{
                    pathname : `/show/${movie.id}`,
                }}
                 key={movie.id}  
                 underline="none">
                    <img
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Row