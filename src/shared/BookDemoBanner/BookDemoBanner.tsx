import styles from './BookDemoBanner.module.scss'

export const BookDemoBanner = () => {
  return (
    <div className={styles.bookDemoBanner}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2 className="text-white">Try the platform</h2>
          <p className="main-text black-7">Join us, build the future!</p>
        </div>
        <button className="button primary">🚀 Book your Demo </button>
      </div>
      <div className={styles.graph}>
        <svg
          preserveAspectRatio="none"
          width="710"
          height="339"
          viewBox="0 0 710 339"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M0 -43.3499H834M0 4.90428H834M0 53.1586H834M0 101.413H834M0 149.667H834M0 197.921H834M0 246.176H834M0 294.43H834M0 342.684H834M0 390.938H834M0 439.193H834M531.509 -91L531.509 448M483.243 -91L483.243 448M434.976 -91L434.976 448M386.72 -91L386.72 448M338.454 -91L338.454 448M290.187 -91L290.187 448M821.092 -91V448M241.926 -91L241.926 448M772.826 -91V448M193.66 -91L193.66 448M724.564 -91V448M145.393 -91L145.393 448M676.298 -91V448M97.132 -91L97.132 448M628.032 -91V448M48.8708 -91L48.8707 448M579.77 -91L579.77 448"
            stroke="url(#paint0_radial_1117_45)"
          />
          <rect
            opacity="0.9"
            x="340.535"
            y="132.998"
            width="238.324"
            height="72.5576"
            rx="36.2788"
            fill="url(#paint1_linear_1117_45)"
          />
          <ellipse
            cx="36.2721"
            cy="36.2851"
            rx="36.2721"
            ry="36.2851"
            transform="matrix(1.00018 -4.5752e-09 -0.028154 -0.99943 506.566 205.748)"
            fill="#FCAC04"
          />
          <rect
            opacity="0.9"
            x="223.215"
            y="58"
            width="266.887"
            height="72.5576"
            rx="36.2788"
            fill="url(#paint2_linear_1117_45)"
          />
          <ellipse
            cx="36.2721"
            cy="36.2851"
            rx="36.2721"
            ry="36.2851"
            transform="matrix(-0.999975 0.0204893 0.048622 0.998643 489.332 57.0688)"
            fill="#FDA7D9"
          />
          <rect
            opacity="0.9"
            x="195"
            y="207.73"
            width="266.887"
            height="72.5576"
            rx="36.2788"
            fill="url(#paint3_linear_1117_45)"
          />
          <ellipse
            cx="36.2721"
            cy="36.2851"
            rx="36.2721"
            ry="36.2851"
            transform="matrix(-1.00013 0.0100825 0.0382275 0.999095 461.52 208.029)"
            fill="#2BBEAF"
          />
          <defs>
            <radialGradient
              id="paint0_radial_1117_45"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(417 178.5) rotate(89.994) scale(216.325 334.722)"
            >
              <stop stop-color="#E8E8EA" />
              <stop offset="1" stop-color="#E8E8EA" stop-opacity="0" />
            </radialGradient>
            <linearGradient
              id="paint1_linear_1117_45"
              x1="528.79"
              y1="165.703"
              x2="328.5"
              y2="169"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFE8A3" />
              <stop offset="1" stop-color="#FFE8A3" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1117_45"
              x1="434.032"
              y1="90.7054"
              x2="240"
              y2="94"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FDA7D9" />
              <stop offset="1" stop-color="#FDA7D9" stop-opacity="0.02" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_1117_45"
              x1="405.817"
              y1="240.435"
              x2="216.098"
              y2="240.435"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2BBEAF" />
              <stop offset="0.64" stop-color="#2BBEAF" stop-opacity="0.35" />
              <stop offset="1" stop-color="#2BBEAF" stop-opacity="0.01" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
