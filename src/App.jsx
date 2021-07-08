import React from 'react';
import { useState } from 'react';
import Films from './components/Films';
import People from './components/People';


const App = () => {

    const [filmsLoaded, setfilmsLoaded] = useState()
    const [peopleLoaded, setpeopleLoaded] = useState()

    let loadPeople = () => {
        setpeopleLoaded(true)
        setfilmsLoaded(false)
    }

    let loadFilms = () => {
        setpeopleLoaded(false)
        setfilmsLoaded(true)
    }

    if (filmsLoaded === true) {
        return (
            <>
                <button onClick={loadFilms}>Films</button>
                <button onClick={loadPeople}>People</button>
                <Films />
            </>
        )
    } else if (peopleLoaded === true) {
        return (
            <>
                <button onClick={loadFilms}>Films</button>
                <button onClick={loadPeople}>People</button>
                <People />
            </>
        )
    } else {
        return (
            <>
                <button onClick={loadFilms}>Films</button>
                <button onClick={loadPeople}>People</button>
                <h3>Try to click one!</h3>
            </>
        ) 
    }
}

export default App;