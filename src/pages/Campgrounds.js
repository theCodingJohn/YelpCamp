import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Campgrounds = () => {
  const [campgrounds, setCampgrounds] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/campgrounds");
        setCampgrounds(res.data);
      } catch (e) {
        console.log("sads");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>All Campgrounds</h1>
      <ul>
        {campgrounds &&
          campgrounds.map((camp) => {
            return (
              <Link key={camp._id} to={`/campgrounds/${camp._id}`}>
                <li>{camp.title}</li>
              </Link>
            );
          })}
      </ul>
    </>
  );
};

export default Campgrounds;
