import React, { Component } from 'react';
import { getMovies } from './fake_movies';

class Movies extends Component {

    state = {
        movies: getMovies()
    }

    
    
    render() {

        return (
            <>
                <p> Show movies from {this.state.movies[0].title} </p>
                {/*
                    zrobić tabelę, która wyświetli wszystkie filmy
                    tabela w html
                    kolumny to id, title, genre, ... z listy filmów
                    this.state.movies.map( movie => ... )
                */}
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>NumberInStock</th>
                        <th>DailyRentalRate</th>
                        <th>PublishDate</th>
                    </tr>
                </table>
            </>
        )
    }
}

export default Movies