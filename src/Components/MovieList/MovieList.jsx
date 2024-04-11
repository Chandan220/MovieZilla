import React, { useEffect, useState } from 'react'
import "./movielist.css"
import Card from '../Card/Card'
import { useParams } from 'react-router-dom'
export default function MovieList() {
    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    useEffect(() => {
        getData()
    }, [])


    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=2bc2eb76b5633c35716b72970595e7e1&language=en-US`)
            .then((res) => res.json())
            .then((data) => setMovieList(data.results))
            .catch((error) => console.error('Error fetching data:', error));
    }
    return (
        <>
        
        <div className="movie_list">
                <h2 className='list_title'>{(type ? type : "POPULAR").toUpperCase()}</h2>
                <div className="list_cards">
                    {
                        movieList.map(movie => (
                            <Card movie={movie} />
                        ))
                    }
                </div>

            </div>
     
            
        </>
    )
}
