import React from 'react'

export default function Serf() {
    return (
        <div className="location serf">
            <h2>SERF 383</h2>
            <p>
                SERF 383 is on the 3rd floor of the SERF (Science and Engineering Research
                Facility) building.
            </p>

            {/* Responsive iframe wrapper - iframe takes full size of the wrapper */}
            <div className="iframe-wrapper" aria-hidden={false}>
                <iframe
                    src="https://map.concept3d.com/?id=1005#!bm/?ce/18312?ct/65653,63891?m/554117?s/serf?sbc/?mc/32.8807821163266,-117.23508500000003?z/18?lvl/0"
                    title="University of California San Diego - SERF 383"
                    loading="lazy"
                    allow="geolocation; gyroscope; accelerometer"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    )
}