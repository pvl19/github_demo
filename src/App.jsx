import React, { useState } from 'react'
import Banner from './banner'

export default function App() {
  const [tab, setTab] = useState('Overview')

  return (
    <div className="app">
      <Banner />

      <div className="page">
        <aside className="sidebar" aria-label="Main navigation">
          <nav>
            <ul>
              <li>
                <button
                  className={tab === 'Overview' ? 'active' : ''}
                  onClick={() => setTab('Overview')}
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  className={tab === 'Schedule' ? 'active' : ''}
                  onClick={() => setTab('Schedule')}
                >
                  Schedule
                </button>
              </li>
              <li>
                <button
                  className={tab === 'Locations' ? 'active' : ''}
                  onClick={() => setTab('Locations')}
                >
                  Locations
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="content">
          <section className="hero">
            <h1>Smash Website</h1>
            <p>Welcome to your new React + Vite app.</p>
          </section>

          <section className="tab-content">
            {tab === 'Overview' && (
              <>
                <h2>Overview</h2>
                <p>This is the overview tab. Put summary information here.</p>
              </>
            )}

            {tab === 'Schedule' && (
              <>
                <h2>Schedule</h2>
                <p>Schedule content goes here.</p>
              </>
            )}

            {tab === 'Locations' && (
              <>
                <h2>Locations</h2>
                <p>Location details go here.</p>
              </>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}
