import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Apod = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=K0PyPiwMg5XTuLFtwdZKyoGtPs4KL78rPmtZW1Hq');
        setApodData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Astronomy Picture of the Day</h1>
    
        <div>
          <h2>{apodData.title}</h2>
          <p>{apodData.explanation}</p>
          <img src={apodData.url} alt={apodData.title} style={{ maxWidth: '100%' }} />
        </div>
    
    </div>
  );
};

export default Apod;
