import React, { useEffect, useState } from 'react'
import axios from 'axios'

const NeoWs = () => {
  const [asteroids, setAsteroids] = useState([]);
  useEffect(() => {
    fetchAsteroids();
  }, []);
  const fetchAsteroids = async () => {
    try {
      const response = await axios.get(
        'https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-03-02&end_date=2024-03-09&api_key=K0PyPiwMg5XTuLFtwdZKyoGtPs4KL78rPmtZW1Hq'
      );
      const data = response.data;
      const asteroidsData = Object.values(data.near_earth_objects).flat();
      setAsteroids(asteroidsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div>
      <h1>Near Earth Asteroids</h1>
      <ul>
        {asteroids.map((asteroid, index) => (
          <li key={index}>
            <strong>Name:</strong> {asteroid.name},{' '}
            <strong>Diameter (meters):</strong> {asteroid.estimated_diameter.meters.estimated_diameter_max}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NeoWs
