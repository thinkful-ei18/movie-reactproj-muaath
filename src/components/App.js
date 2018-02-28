import React, { Component } from 'react';
import SearchForm from './searchForm.js'
import MovieList from './movieList.js'
import './App.css';
import MovieCount from './movieCount'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      "searchTerm": ""
    }
  }
  render() {
    console.log(this.props.movie)
    const movies = this.props.movie.filter(movieL => movieL.title.toLowerCase()
      .includes(this.state.searchTerm.toLowerCase())
      || movieL.description.toLowerCase()
    .includes(this.state.searchTerm.toLowerCase())
  ||movieL.year.toLowerCase()
  .includes(this.state.searchTerm.toLowerCase()
)
);
    
    return (
      <div className="App">
        <SearchForm SearchForm onChange={searchTerm => this.setState({searchTerm})} />
        <MovieCount count = {movies.length}/>
        <MovieList movies={movies} />
      </div>
    );
  }
}
