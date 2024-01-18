import styles from './Logo.module.scss'

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <svg
        width="107"
        height="32"
        viewBox="0 0 107 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.08256 24.788C5.31456 24.788 4.59456 24.676 3.92256 24.452C3.25056 24.212 2.65856 23.876 2.14656 23.444C1.63456 22.996 1.23456 22.452 0.946563 21.812L3.65856 20.564C3.89856 20.948 4.22656 21.284 4.64256 21.572C5.05856 21.844 5.53856 21.98 6.08256 21.98C6.61056 21.98 7.01856 21.908 7.30656 21.764C7.59456 21.604 7.73856 21.38 7.73856 21.092C7.73856 20.804 7.61856 20.596 7.37856 20.468C7.15456 20.324 6.84256 20.204 6.44256 20.108L5.33856 19.82C4.18656 19.516 3.27456 19.036 2.60256 18.38C1.94656 17.708 1.61856 16.94 1.61856 16.076C1.61856 14.844 2.01056 13.892 2.79456 13.22C3.59456 12.548 4.72256 12.212 6.17856 12.212C6.93056 12.212 7.62656 12.324 8.26656 12.548C8.92256 12.772 9.48256 13.084 9.94656 13.484C10.4106 13.884 10.7306 14.348 10.9066 14.876L8.29056 16.076C8.17856 15.756 7.90656 15.5 7.47456 15.308C7.04256 15.1 6.61056 14.996 6.17856 14.996C5.74656 14.996 5.41056 15.092 5.17056 15.284C4.94656 15.46 4.83456 15.708 4.83456 16.028C4.83456 16.236 4.94656 16.412 5.17056 16.556C5.39456 16.684 5.71456 16.796 6.13056 16.892L7.69056 17.276C8.47456 17.468 9.09856 17.78 9.56256 18.212C10.0426 18.628 10.3866 19.1 10.5946 19.628C10.8186 20.14 10.9306 20.644 10.9306 21.14C10.9306 21.86 10.7146 22.5 10.2826 23.06C9.86656 23.604 9.29056 24.028 8.55456 24.332C7.83456 24.636 7.01056 24.788 6.08256 24.788ZM12.8943 29.3V12.5H15.8703L16.0623 14.708V29.3H12.8943ZM19.6863 24.788C18.6783 24.788 17.8223 24.532 17.1183 24.02C16.4303 23.508 15.9023 22.78 15.5343 21.836C15.1663 20.892 14.9823 19.78 14.9823 18.5C14.9823 17.204 15.1663 16.092 15.5343 15.164C15.9023 14.22 16.4303 13.492 17.1183 12.98C17.8223 12.468 18.6783 12.212 19.6863 12.212C20.7903 12.212 21.7423 12.468 22.5423 12.98C23.3583 13.492 23.9903 14.22 24.4383 15.164C24.8863 16.092 25.1103 17.204 25.1103 18.5C25.1103 19.78 24.8863 20.892 24.4383 21.836C23.9903 22.78 23.3583 23.508 22.5423 24.02C21.7423 24.532 20.7903 24.788 19.6863 24.788ZM18.8703 21.884C19.4463 21.884 19.9503 21.74 20.3823 21.452C20.8303 21.164 21.1823 20.764 21.4383 20.252C21.6943 19.74 21.8223 19.156 21.8223 18.5C21.8223 17.844 21.6943 17.26 21.4383 16.748C21.1983 16.236 20.8543 15.844 20.4063 15.572C19.9743 15.284 19.4703 15.14 18.8943 15.14C18.3503 15.14 17.8623 15.284 17.4303 15.572C16.9983 15.86 16.6623 16.26 16.4223 16.772C16.1823 17.268 16.0623 17.844 16.0623 18.5C16.0623 19.156 16.1823 19.74 16.4223 20.252C16.6623 20.764 16.9903 21.164 17.4062 21.452C17.8383 21.74 18.3263 21.884 18.8703 21.884ZM32.6123 24.788C31.4283 24.788 30.3803 24.524 29.4683 23.996C28.5563 23.452 27.8363 22.708 27.3083 21.764C26.7963 20.82 26.5403 19.732 26.5403 18.5C26.5403 17.268 26.8043 16.18 27.3323 15.236C27.8763 14.292 28.6123 13.556 29.5403 13.028C30.4843 12.484 31.5643 12.212 32.7803 12.212C33.8363 12.212 34.8043 12.492 35.6843 13.052C36.5803 13.596 37.2923 14.404 37.8203 15.476C38.3643 16.532 38.6363 17.82 38.6363 19.34H29.5403L29.8283 19.052C29.8283 19.644 29.9723 20.164 30.2603 20.612C30.5643 21.044 30.9483 21.38 31.4123 21.62C31.8923 21.844 32.4043 21.956 32.9483 21.956C33.6043 21.956 34.1403 21.82 34.5563 21.548C34.9723 21.26 35.2923 20.892 35.5163 20.444L38.3483 21.548C38.0123 22.22 37.5723 22.804 37.0283 23.3C36.5003 23.78 35.8683 24.148 35.1323 24.404C34.3963 24.66 33.5563 24.788 32.6123 24.788ZM29.9963 17.276L29.7083 16.988H35.4923L35.2283 17.276C35.2283 16.7 35.0923 16.244 34.8203 15.908C34.5483 15.556 34.2123 15.3 33.8123 15.14C33.4283 14.98 33.0523 14.9 32.6843 14.9C32.3163 14.9 31.9243 14.98 31.5083 15.14C31.0923 15.3 30.7323 15.556 30.4283 15.908C30.1403 16.244 29.9963 16.7 29.9963 17.276ZM43.5014 21.452L41.6054 19.268L47.7494 12.5H51.5174L43.5014 21.452ZM40.4774 24.5V7.7H43.6454V24.5H40.4774ZM48.1574 24.5L44.1734 18.692L46.2374 16.508L51.8774 24.5H48.1574ZM58.3354 24.788C57.0074 24.788 55.9994 24.46 55.3114 23.804C54.6394 23.148 54.3034 22.212 54.3034 20.996V8.756H57.4714V20.3C57.4714 20.812 57.5834 21.204 57.8074 21.476C58.0314 21.732 58.3594 21.86 58.7914 21.86C58.9514 21.86 59.1274 21.828 59.3194 21.764C59.5114 21.684 59.7114 21.572 59.9194 21.428L61.0234 23.804C60.6394 24.092 60.2074 24.324 59.7274 24.5C59.2634 24.692 58.7994 24.788 58.3354 24.788ZM52.3594 15.188V12.5H60.4714V15.188H52.3594ZM65.2797 18.188C65.2797 16.892 65.5277 15.82 66.0237 14.972C66.5357 14.124 67.1837 13.492 67.9677 13.076C68.7677 12.66 69.5997 12.452 70.4637 12.452V15.524C69.7277 15.524 69.0317 15.612 68.3757 15.788C67.7357 15.964 67.2157 16.252 66.8157 16.652C66.4157 17.052 66.2157 17.564 66.2157 18.188H65.2797ZM63.0477 24.5V12.5H66.2157V24.5H63.0477Z"
          fill="#0B0B0E"
        />
        <rect
          opacity="0.5"
          x="107"
          y="19.5969"
          width="28.679"
          height="7.2959"
          rx="3.64795"
          transform="rotate(180 107 19.5969)"
          fill="#2BBEAF"
        />
        <path
          opacity="0.5"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M103.642 28.8404C102.652 30.5853 100.447 31.1761 98.7174 30.1598L80.1443 19.2479C78.4148 18.2318 77.8152 15.994 78.8051 14.2494C79.7951 12.5044 82.0001 11.9137 83.7299 12.9299L102.303 23.8418C104.033 24.8579 104.632 27.0958 103.642 28.8404Z"
          fill="#FDA7D9"
        />
        <path
          opacity="0.5"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M103.63 3.15956C104.62 4.9042 104.021 7.14203 102.291 8.15812L83.718 19.07C81.9882 20.0863 79.7832 19.4955 78.7932 17.7506C77.8034 16.006 78.4029 13.7681 80.1324 12.752L98.7056 1.84013C100.435 0.823869 102.64 1.41462 103.63 3.15956Z"
          fill="#FCAC04"
        />
        <ellipse
          cx="81.9073"
          cy="15.949"
          rx="3.58487"
          ry="3.64795"
          transform="rotate(180 81.9073 15.949)"
          fill="#0B0B0E"
        />
        <ellipse
          cx="103.415"
          cy="15.949"
          rx="3.58487"
          ry="3.64795"
          transform="rotate(180 103.415 15.949)"
          fill="#2BBEAF"
        />
        <ellipse
          cx="100.548"
          cy="26.9078"
          rx="3.58487"
          ry="3.64795"
          transform="rotate(180 100.548 26.9078)"
          fill="#FDA7D9"
        />
        <ellipse
          cx="100.548"
          cy="5.02014"
          rx="3.58487"
          ry="3.64795"
          transform="rotate(180 100.548 5.02014)"
          fill="#FCAC04"
        />
      </svg>
    </div>
  )
}