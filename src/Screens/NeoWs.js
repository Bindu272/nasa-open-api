import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

const NeoWs = () => {
  const [neoData, setNeoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-03-02&end_date=2024-03-09&api_key=K0PyPiwMg5XTuLFtwdZKyoGtPs4KL78rPmtZW1Hq'
        );
        // Extracting data from the response
        const data = response.data.near_earth_objects;
        console.log(data,'NEOWS')
        
        let neoArray = [];
        // Extracting NEO data and pushing it into an array
        for (const date in data) {
          neoArray = neoArray.concat(data[date]);
       
        }
       
        setNeoData(neoArray);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching NEO data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { dataField: 'id', text: 'ID', sort: true },
    { dataField: 'name', text: 'Name', sort: true },
    { dataField: 'close_approach_data[0].miss_distance.miles', text: 'Miss Distance (Miles)', sort: true },
    { dataField: 'is_potentially_hazardous_asteroid', text: 'Potentially Hazardous', sort: true },
    {dataField:'nasa_jpl_url', text:'NASA JPL URL', sort:true},
    {dataField:'neo_reference_id', text:'Neo Reference', sort:true},
   
  ];

  return (
    <div>
      <h2 >Asteroids - NeoWs (Near Earth Object Web Service)</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className=" p-3">
        <BootstrapTable
          keyField="id"
          data={neoData}
          columns={columns}
          pagination={paginationFactory()}
          striped
          hover
          bootstrap4
          className="neo-table"
        
        />
        </div>
      )}
    </div>
  );
};

export default NeoWs;
