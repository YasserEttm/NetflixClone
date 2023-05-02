import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from './requests';
import "./banner.css";
import { AutoComplete } from "primereact/autocomplete";
import { Link } from 'react-router-dom';

function SearchBar() {
    const [movies, setMovies] = useState([]);
    const [selectedMovies, setSelectedMovies] = useState(null);
    const [filteredMovies, setFilteredMovies] = useState(null);
    const base_url="https://image.tmdb.org/t/p/original/";

    useEffect(()=> {
        async function fetchDataMovies() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(
                request.data.results
            );
            return request;
        }
        fetchDataMovies();
    }, []);

   
    // Search handler for list of movies
    const search = (event) => {
        // Timeout to emulate a network connection
        setTimeout(() => {
            let _filteredMovies;

            if (!event.query.trim().length) {
                _filteredMovies = [...movies];
            }
            else {
                _filteredMovies = movies.filter((movie) => {
                    return movie.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredMovies(_filteredMovies);
        }, 250);
    }

    
    const itemTemplate = (item) => {
        return (
            <Link
            className="flex align-items-center justify-content-between"
            to={{
                pathname : `/show/${item.id}`,
            }}
            key={item.id}  
            style={{textDecoration : "none"}}
            >
                <img   
                    alt={item.name}
                    src={`${base_url}${item.backdrop_path}`}
                    className={`mr-2`}
                    style={{width: '170px',border: '0.5px solid black', borderRadius:"6px"}}
                />
                <div className='title-search'>{item?.name}</div>
            </Link>
        );
    };

    const handleSearch = (e) =>{
        e.preventDefault();
        let isFound = movies?.filter((movie) => { return movie.name === selectedMovies.name });
        console.log("i submit this film ", isFound);
    }

  return (
    <form onSubmit={handleSearch} className='d-flex justify-content-center align-items-center dim'>
        <AutoComplete className='p-autocomplete' field="name" value={selectedMovies} suggestions={filteredMovies} 
            completeMethod={search} onChange={(e) => setSelectedMovies(e.value)} placeholder='Search for a show' itemTemplate={itemTemplate} 
            loadingIcon inputStyle={{fontSize:"18px", fontWeight:"500"}}/>
    </form>


  );
}

export default SearchBar 