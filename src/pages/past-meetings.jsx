import React from 'react'
import './past-meetings.css'

export default function PastMeetings() {
  return (
    <div className="past-meetings">
      <h1>Past Meetings</h1>
      <p>Past meetings are listed here; recordings are available in some cases.</p>
      <div className="table-wrap">
        <table className="recordings-table" aria-label="Past meeting recordings">
          <thead>
            <tr>
              <th>Date</th>
              <th>Speaker / Topic</th>
              <th>Recording</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-10-28</td>
              <td>Dr. Dara Norman - AAS Task Force</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>2025-12-09</td>
              <td>NeurIPS review and brainstorming research projects for PhD and undergraduate students</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}