import React from 'react';

export default function movieList(props){
    const liArray = props.movies.map((movie,index) => <li key={index}>{movie.title} {movie.year} <p>{movie.description}</p></li>);
return(
    <ul>
        {liArray}
    </ul>
);
}