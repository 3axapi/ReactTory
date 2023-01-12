import React, { Component, StyleSheet } from 'react';
import { getMovies } from './fake_movies';

class Movies extends Component {

    state = {
        movies: getMovies()
    }

    /* <p> Show movies from {this.state.movies[1].title} </p> */

    /*
        zrobić tabelę, która wyświetli wszystkie filmy
        tabela w html
        kolumny to id, title, genre, ... z listy filmów
        this.state.movies.map( movie => ... )
    */
    
    render() {
        return (
            <>        
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>NumberInStock</th>
                        <th>DailyRentalRate</th>
                        <th>PublishDate</th>
                    </tr>
                    {   
                        this.state.movies.map(
                            element => {
                                return (
                                    <tr>
                                        <td>{element._id}</td>
                                        <td>{element.title}</td>
                                        <td>{element.genre.name}</td>
                                        <td>{element.numberInStock}</td>
                                        <td>{element.dailyRentalRate}</td>
                                        <td>{element.publishDate}</td>
                                    </tr>
                                )
                            }
                        )
                    }
                </table>
            </>
        )
    }
}

export default Movies