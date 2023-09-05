import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from "./Card"

const Home = () => {
  const [beers, setBeers] = useState([])

  const getBeers = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers")
    const data = await res.json()
    setBeers(data)
  }

  useEffect(() => {
    getBeers()
  })

  return (
    <div className='grid'>
      {beers.length
        ? beers.map(beer => (
          <Link to={`/beer/${beer.id}`} key={beer.id}>
            <Card data={beer} />
          </Link>
        ))
        : null
      }
    </div>
  );
}

export default Home