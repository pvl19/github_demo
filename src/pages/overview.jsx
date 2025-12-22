import React from "react";
import "./overview.css";

export default function Overview() {
  return (
    <div className="overview">
      <h1>Overview</h1>
      <p className="desc">SMASH is a collaborative initiative between the departments of Astronomy/Astrophysics and Physics, and the Data Science, AI, and Supercomputer Centers on the UCSD campus. It was started to help researchers at UCSD initiate novel interdisciplinary research collaborations, and strengthen their skills, knowledge, and experience in AI, Machine Learning, and Data Science.
      <br></br>
      <br></br>
      The goal of this initiative is to provide the tools and environment to <b><i>SMASH</i></b> records in the Big Data era of Astronomy & Physics!</p>
      <p className="hackathon">
      Additionally, <b><i>we are hosting a Hackathon at UC San Diego on January 17-18, 2026</i></b>. More information can be found on the dedicated <a href="https://indico.cern.ch/event/1624615/" target="_blank" rel="noopener noreferrer">Hackathon event site</a>.
      </p>
      <h2>Join the SMASH Community!
      </h2>
      <p>You can learn more and participate in SMASH activities by:
      <ul className='comms'>
        <li>Joining our <a href="https://join.slack.com/t/ucsd-smash/shared_invite/zt-3kxa3ekbo-GuLL0ZJ_4ZemB_dAKdLtVg" target='_blank' rel='noopener noreferrer'>Slack workspace</a></li>
        <li>Subscribing to the <a href="https://groups.google.com/g/smash-list/" target="_blank" rel="noopener noreferrer">email list</a></li>
        </ul>
      </p>
    </div>
  )
}