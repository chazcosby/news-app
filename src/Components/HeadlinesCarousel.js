import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import "../App.css";
import useFetch from "../API/useFetch";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingScreen from "./LoadingScreen";

import { Link } from "react-router-dom";



 


function HeadlinesCarousel() {

     const [country, setCountry] = useState("us");

  const {
    data: start,
    loading,
    error,
  } = useFetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=712a8c0fa12d406c8f710f1d01b47dd8`
  );


  if (loading) return <h1>{<LoadingScreen />}</h1>;

  if (error) return console.log(error);

  return (
    <Carousel>
      <Carousel.Item>
        <center>
          <img
            className="d-block w-100"
            variant="top"
            src={start?.articles[0].urlToImage}
          />
        </center>

        <Carousel.Caption>
          <Link to={{ pathname: start?.articles[0].url }} target="_blank">
            <h3>{start?.articles[0].title.split("-")[0]}</h3>
          </Link>
          <p>{start?.articles[0].description}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Link to={{ pathname: start?.articles[1].url }} target="_blank">
          <center>
            <img
              className="d-block w-100"
              variant="top"
              src={start?.articles[1].urlToImage}
            />
          </center>
        </Link>
        <Carousel.Caption>
          <Link to={{ pathname: start?.articles[1].url }} target="_blank">
            <h2>{start?.articles[1].title.split("-")[0]}</h2>
          </Link>
          <p>{start?.articles[1].description}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Link to={{ pathname: start?.articles[2].url }} target="_blank">
          <center>
            <img
              className="d-block w-100"
              variant="top"
              src={start?.articles[2].urlToImage}
            />
          </center>
        </Link>
        <Carousel.Caption>
          <Link to={{ pathname: start?.articles[2].url }} target="_blank">
            <h2>{start?.articles[2].title.split("-")[0]}</h2>
          </Link>
          <p>{start?.articles[2].description}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Link to={{ pathname: start?.articles[3].url }} target="_blank">
          <center>
            <img
              className="d-block w-100"
              variant="top"
              src={start?.articles[3].urlToImage}
            />
          </center>
        </Link>
        <Carousel.Caption>
          <Link to={{ pathname: start?.articles[3].url }} target="_blank">
            <h2>{start?.articles[3].title.split("-")[0]}</h2>
          </Link>
          <p>{start?.articles[3].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeadlinesCarousel