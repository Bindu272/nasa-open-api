import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NASA_API_KEY = 'K0PyPiwMg5XTuLFtwdZKyoGtPs4KL78rPmtZW1Hq';

const EarthImagery = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
         'https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=K0PyPiwMg5XTuLFtwdZKyoGtPs4KL78rPmtZW1Hq'
        );
        setImageUrl(response.data.url);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Earth Imagery</h2>
      <img src={imageUrl} alt="Earth Imagery" />
    </div>
  );
};

export default EarthImagery;
