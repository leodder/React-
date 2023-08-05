// components/TriangleSvg.js
import React from 'react'
import styles from './timeCard.module.sass'

const selectedTime = () => {
  return (
    <svg
      width="384"
      height="364"
      viewBox="0 0 384 364"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.path}
        d="M249.926 206.337L208.103 49.41C144.504 66.36 85.276 99.711 37.296 147.615L152.02 262.642C179.524 235.181 213.466 216.047 249.926 206.337Z"
        fill="#D02D7C"
        stroke="#C39A6B"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        className={styles.path}
        d="M240.34 351.204C252.079 339.485 266.566 331.322 282.13 327.174L251.609 212.655C216.239 222.081 183.318 240.635 156.644 267.272L240.34 351.204Z"
        fill="#A7458C"
        stroke="#C39A6B"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        className={styles.rect}
        width="100%"
        height="100%"
        fill="transparent"
      />
    </svg>
  )
}

export default selectedTime
