import React from 'react'
import './schedule.css'

export default function Schedule() {
  return (
    <div className="schedule">
      <h1>Next Up</h1>
      <p>
        <b>What: </b>The next SMASH meeting will be a <bi>review of NeurIPS 2025</bi>, which is being help at the San Diego Convention Center from Nov. 30th to Dec. 5th.
        <br></br>
        <b>Where: </b>The Auditorium.
        <br></br>
        <b>When: </b>Tuesday, December 16th, 2025. The Auditorium is booked from 11am to 2pm.
      </p>
      <h2>2025/2026 Schedule</h2>
      <p>
        Meetings always take place on Tuesdays. Typically, food arrives at 11:45 for in person attendees, and the talks/presentations are from 12-1PM. A remote option is also available for all meetings at <a href="https://ucsd.zoom.us/j/92575531798?pwd=4uZdoloIdSiXb1OaYjI9faayFdA4Rb.1">this link</a>.
      </p>

      <div className="table-wrap">
        <table className="schedule-table" aria-label="Upcoming schedule">
          <thead>
            <tr>
              <th>Date</th>
              <th>Speaker / Topic</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-12-16</td>
              <td>NeurIPS review and brainstorm</td>
              <td>Auditorium</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}