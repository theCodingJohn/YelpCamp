import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CampgroundDetail = () => {
  const [campground, setCampground] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/campgrounds/${id}`);
        setCampground(res.data);
      } catch (e) {
        console.log("error");
      }
    };
    fetchData(); // eslint-disable-next-line
  }, []);

  return (
    <>
      {campground && (
        <>
          <h1>{campground.title}</h1>
          <p>{campground._id}</p>
        </>
      )}
    </>
  );
};

export default CampgroundDetail;
