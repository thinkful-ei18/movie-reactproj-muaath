import React from 'react';

export default function searchForm(props){
    return(
        <div>
        <input onChange={e => props.onChange(e.currentTarget.value)} type="search" ></input>
        </div>
     );
}