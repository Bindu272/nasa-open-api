import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NASA_API_KEY = 'K0PyPiwMg5XTuLFtwdZKyoGtPs4KL78rPmtZW1Hq';

const CmeData = () => {
  const [cmeData, setCmeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/DONKI/CME?startDate=2017-01-03&endDate=2017-01-03&api_key=${NASA_API_KEY}`
        );
        setCmeData(response.data);
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
      <h2>CME Data</h2>
      <ul>
        {cmeData.map((cme, index) => (
          <li key={index}>
            <strong>Time: </strong> {cme.time}, <strong>Level: </strong>{' '}
            {cme.level}, <strong>Type: </strong> {cme.cmeAnalyses[0].type}
            <p>{cme.link}</p>
            <p>{cme.speed}</p>
            <p>{cme.note}</p>
            <p>{cme.cmeAnalyses.link}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CmeData;
