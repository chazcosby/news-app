import React from 'react'
import { Oval } from "react-loading-icons";
import "../App.css";

function LoadingScreen() {
  return (
    <div className="loading">
      {/*<center>{<Spinner animation="grow" variant="danger" />}</center>*/}
     <center> {<Oval stroke="#000000" />}</center>
    </div>
  );
}

export default LoadingScreen