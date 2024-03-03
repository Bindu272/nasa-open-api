import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NASA_API_KEY = "K0PyPiwMg5XTuLFtwdZKyoGtPs4KL78rPmtZW1Hq";

const NaturalImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/EPIC/api/natural/images?api_key=${NASA_API_KEY}`
        );
        setImages(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Natural Images</h2>
      <div style={{margin:'25px'}}>
      <Slider {...settings} >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={`https://epic.gsfc.nasa.gov/archive/natural/${image.date
                .split(" ")[0]
                .replaceAll("-", "/")}/png/${image.image}.png`}
              alt={`Natural Image ${index + 1}`}
              style={{ width: "450px", height: "auto" }}
            />
            <p>{`Natural Image ${index + 1}`}</p>
          </div>
        ))}
      </Slider>
      </div>
     
    </div>
  );
};

export default NaturalImages;
