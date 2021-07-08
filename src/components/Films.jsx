import { useState, useEffect } from 'react';


const Films = () => {

    let [films, allFilms] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(res => allFilms(res));
    }, []);

    return (
        <>
            <main className="container">
                <div className="row justify-content-center mt-5">
                    {films.map(film => (
                        <h1 className="col-12 text-center" key={`user-card-${film.id}`}>
                            <div className="card shadow my-2">
                                <div className="card-body">
                                    <h2 className="card-title">{film.title}</h2>
                                    <p className="card-subtitle text-muted">{film.description}</p>
                                </div>
                            </div>
                        </h1>
                    ))};
                </div>
            </main>
        </>
    );
};

export default Films;