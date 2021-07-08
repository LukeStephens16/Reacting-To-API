import { useState, useEffect } from 'react';


const People = () => {

    let [people, allPeople] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(res => allPeople(res));
    }, []);

    return (
        <>
            <main className="container">
                <div className="row justify-content-center mt-5">
                    {people.map(people => (
                        <h1 className="col-12 text-center" key={`user-card-${people.id}`}>
                            <div className="card shadow my-2">
                                <div className="card-body">
                                    <h1 className="card-title">{people.name}</h1>
                                    <h2 className="card-subtitle text-muted">{people.age}</h2>
                                    <h4 className="card-subtitle text-muted">{people.gender}</h4>
                                </div>
                            </div>
                        </h1>
                    ))};
                </div>
            </main>
        </>
    );
};

export default People;