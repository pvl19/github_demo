import React from 'react'

export default function MayerHall() {
    return (
        <div className="location mayer-hall">
            <h2>Mayer Room (MAYER 4322) </h2>
            <p>
                The Mayer Room (room 4322) is on the 4th floor of Mayer Hall.
            </p>

            {/* Responsive iframe wrapper - iframe takes full size of the wrapper */}
            <div className="iframe-wrapper" aria-hidden={false}>
                <iframe
                    src="https://map.concept3d.com/?id=1005#!bm/?ce/18312?ct/65653,63891?m/163874?s/mayer%2520room?sbc/?mc/32.87541155852577,-117.24047079876175?z/18?lvl/0"
                    title="University of California San Diego - Mayer Hall"
                    loading="lazy"
                    allow="geolocation; gyroscope; accelerometer"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    )
}