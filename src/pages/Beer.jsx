import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Beer = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [beer, setBeer] = useState([]);
    const [totalBeers, setTotalBeers] = useState(0);

    const getBeer = async (id) => {
        const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
        const data = await res.json();
        setBeer(data[0]);
    };

    const handleGoBack = () => {
        const newId = Math.max(1, parseInt(params.id) - 1);
        navigate(`/beer/${newId}`);
    };

    const handleGoNext = () => {
        const newId = Math.min(totalBeers, parseInt(params.id) + 1);
        navigate(`/beer/${newId}`);
    };

    useEffect(() => {
        getBeer(params.id);
        fetch('https://api.punkapi.com/v2/beers')
            .then(response => response.json())
            .then(data => {
                setTotalBeers(data.length);
            });
    }, [params]);

    return (
        <div>
            <h2>Beer number {params.id}</h2>
            <div className='card'>
                <img src={beer.image_url} alt="beer-detail" />
                <p>{beer.tagline}</p>
                <p>{beer.description}</p>
                <p>{beer.brewers_tips}</p>
            </div>
            <div>
                <button onClick={handleGoBack}>Previous</button>
                <button onClick={handleGoNext}>Next</button>
            </div>
        </div>
    );
};

export default Beer;
