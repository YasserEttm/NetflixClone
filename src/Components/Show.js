import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from './axios';
import requests from './requests';
import "./banner.css";

import './Show.css'


const Show = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    


    useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            
            
            setMovie(
                request.data.results.find(movie => movie.id === Number(id))
            )
            
            return request;
        }
        fetchData();
    }, [id]);
    //console.log("im movies" ,movies);
    //console.log("im movie" ,movie);
    

  return (
    <div className='show-page'>
        <div className="banner-in"
        style={{
        backgroundSize:"cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
        }}
        >
            <div class="background"></div>
            <div className='wrapper-title'>
                <h6 className='banner_title-in mb-0 pb-0'>{movie?.name}</h6>
                <h2 className='banner_ep-in mt-0 pt-0'>S1: EP1</h2>
            </div>
            <div className='video'
            style={{
                backgroundSize:"cover",
                backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
            >
            <div className="container">
                <div className="play-button">
                    <i className="fa fa-play"></i>
                </div>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Show