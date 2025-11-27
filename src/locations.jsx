import React from "react";
import Serf from "./locations/serf";
import "./locations.css";

export default function Locations() {
  return (
    <div>
      <h1>Meeting Locations</h1>
      <p>SMASH meetings rotate between several locations on the UCSD campus, which are listed below.</p>
      <Serf></Serf>
    </div>
  )
}