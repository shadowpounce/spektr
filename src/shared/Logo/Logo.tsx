import { FC } from 'react'
import styles from './Logo.module.scss'

interface IProps {
  type?: 'primary' | 'secondary'
}

export const Logo: FC<IProps> = ({ type = 'primary' }) => {
  return (
    <div className={styles.logo}>
      {type === 'primary' ? (
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
      ) : (
        <svg
          width="135"
          height="38"
          viewBox="0 0 135 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.5"
            x="135"
            y="22.8076"
            width="34"
            height="9"
            rx="4.5"
            transform="rotate(180 135 22.8076)"
            fill="#2BBEAF"
          />
          <path
            opacity="0.5"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M131.238 33.9042C130.002 36.0599 127.258 36.7951 125.11 35.5461L103.496 22.9797C101.348 21.731 100.609 18.9716 101.845 16.8163C103.081 14.6606 105.824 13.9254 107.972 15.1744L129.587 27.7408C131.734 28.9895 132.474 31.7489 131.238 33.9042Z"
            fill="#FDA7D9"
          />
          <path
            opacity="0.5"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M130.761 3.90353C131.997 6.05888 131.257 8.81822 129.11 10.067L107.495 22.6333C105.347 23.8823 102.604 23.1472 101.368 20.9915C100.132 18.8361 100.871 16.0768 103.019 14.828L124.633 2.26165C126.781 1.01268 129.525 1.74781 130.761 3.90353Z"
            fill="#FCAC04"
          />
          <circle
            cx="104.5"
            cy="18.5"
            r="4.5"
            transform="rotate(180 104.5 18.5)"
            fill="white"
          />
          <circle
            cx="130.5"
            cy="18.5"
            r="4.5"
            transform="rotate(180 130.5 18.5)"
            fill="#2BBEAF"
          />
          <circle
            cx="127.5"
            cy="31.5"
            r="4.5"
            transform="rotate(180 127.5 31.5)"
            fill="#FDA7D9"
          />
          <circle
            cx="127.5"
            cy="5.5"
            r="4.5"
            transform="rotate(180 127.5 5.5)"
            fill="#FCAC04"
          />
          <path
            d="M6.6493 27.1511C5.65501 27.1511 4.72287 27.0059 3.85286 26.7156C2.98286 26.4044 2.21643 25.9689 1.55357 25.4089C0.890716 24.8281 0.372858 24.123 0 23.2933L3.51108 21.6756C3.82179 22.1733 4.24644 22.6089 4.78501 22.9822C5.32358 23.3348 5.94501 23.5111 6.6493 23.5111C7.33287 23.5111 7.86108 23.4178 8.23394 23.2311C8.6068 23.0237 8.79323 22.7333 8.79323 22.36C8.79323 21.9867 8.63787 21.717 8.32716 21.5511C8.03716 21.3644 7.63323 21.2089 7.11537 21.0844L5.68608 20.7111C4.19465 20.317 3.01393 19.6948 2.14393 18.8444C1.29465 17.9733 0.870001 16.9778 0.870001 15.8578C0.870001 14.2607 1.3775 13.0267 2.3925 12.1556C3.42822 11.2844 4.88858 10.8489 6.77358 10.8489C7.74716 10.8489 8.64823 10.9941 9.4768 11.2844C10.3261 11.5748 11.0511 11.9793 11.6518 12.4978C12.2525 13.0163 12.6668 13.6178 12.8947 14.3022L9.50787 15.8578C9.36287 15.443 9.01073 15.1111 8.45144 14.8622C7.89216 14.5926 7.33287 14.4578 6.77358 14.4578C6.2143 14.4578 5.7793 14.5822 5.46858 14.8311C5.17858 15.0593 5.03358 15.3807 5.03358 15.7956C5.03358 16.0652 5.17858 16.2933 5.46858 16.48C5.75858 16.6459 6.17287 16.7911 6.71144 16.9156L8.73109 17.4133C9.74609 17.6622 10.5539 18.0667 11.1547 18.6267C11.7761 19.1659 12.2214 19.7778 12.4907 20.4622C12.7807 21.1259 12.9257 21.7793 12.9257 22.4222C12.9257 23.3556 12.6461 24.1852 12.0868 24.9111C11.5482 25.6163 10.8025 26.1659 9.84966 26.56C8.91751 26.9541 7.85073 27.1511 6.6493 27.1511Z"
            fill="white"
          />
          <path
            d="M15.468 33V11.2222H19.3209L19.5695 14.0844V33H15.468ZM24.2612 27.1511C22.9562 27.1511 21.848 26.8193 20.9366 26.1556C20.0459 25.4919 19.3623 24.5481 18.8859 23.3244C18.4094 22.1007 18.1712 20.6593 18.1712 19C18.1712 17.32 18.4094 15.8785 18.8859 14.6756C19.3623 13.4519 20.0459 12.5081 20.9366 11.8444C21.848 11.1807 22.9562 10.8489 24.2612 10.8489C25.6905 10.8489 26.923 11.1807 27.9587 11.8444C29.0152 12.5081 29.8334 13.4519 30.4134 14.6756C30.9934 15.8785 31.2834 17.32 31.2834 19C31.2834 20.6593 30.9934 22.1007 30.4134 23.3244C29.8334 24.5481 29.0152 25.4919 27.9587 26.1556C26.923 26.8193 25.6905 27.1511 24.2612 27.1511ZM23.2048 23.3867C23.9505 23.3867 24.603 23.2 25.1623 22.8267C25.7423 22.4533 26.198 21.9348 26.5295 21.2711C26.8609 20.6074 27.0266 19.8504 27.0266 19C27.0266 18.1496 26.8609 17.3926 26.5295 16.7289C26.2187 16.0652 25.7734 15.557 25.1934 15.2044C24.6341 14.8311 23.9816 14.6444 23.2359 14.6444C22.5316 14.6444 21.8998 14.8311 21.3405 15.2044C20.7812 15.5778 20.3462 16.0963 20.0355 16.76C19.7248 17.403 19.5695 18.1496 19.5695 19C19.5695 19.8504 19.7248 20.6074 20.0355 21.2711C20.3462 21.9348 20.7709 22.4533 21.3095 22.8267C21.8687 23.2 22.5005 23.3867 23.2048 23.3867Z"
            fill="white"
          />
          <path
            d="M40.9959 27.1511C39.463 27.1511 38.1063 26.8089 36.9255 26.1244C35.7448 25.4193 34.8127 24.4548 34.1291 23.2311C33.4663 22.0074 33.1348 20.597 33.1348 19C33.1348 17.403 33.4766 15.9926 34.1602 14.7689C34.8645 13.5452 35.8173 12.5911 37.0188 11.9067C38.2409 11.2015 39.6391 10.8489 41.2134 10.8489C42.5598 10.8489 43.8027 11.2119 44.942 11.9378C46.102 12.643 47.0341 13.6904 47.7384 15.08C48.4427 16.4489 48.7948 18.1185 48.7948 20.0889H44.6313C44.652 18.72 44.507 17.6311 44.1963 16.8222C43.9063 15.9926 43.492 15.4015 42.9534 15.0489C42.4148 14.6756 41.7831 14.4889 41.058 14.4889C40.2502 14.4889 39.5666 14.6548 39.0073 14.9867C38.448 15.3185 38.0234 15.8267 37.7334 16.5111C37.4641 17.1748 37.3295 18.0459 37.3295 19.1244C37.3295 20.0578 37.5159 20.8356 37.8888 21.4578C38.2616 22.08 38.7588 22.557 39.3802 22.8889C40.0016 23.2 40.6852 23.3556 41.4309 23.3556C42.2388 23.3556 42.8913 23.1793 43.3884 22.8267C43.9063 22.4741 44.2998 22.0178 44.5691 21.4578L48.422 22.9511C47.987 23.8222 47.4173 24.5793 46.7131 25.2222C46.0295 25.8444 45.2113 26.3215 44.2584 26.6533C43.3056 26.9852 42.218 27.1511 40.9959 27.1511ZM35.807 20.0889L35.838 16.8844H46.7752V20.0889H35.807Z"
            fill="white"
          />
          <path
            d="M55.0934 22.8267L52.6387 19.9956L60.593 11.2222H65.4713L55.0934 22.8267ZM51.1784 26.7778V5H55.2798V26.7778H51.1784ZM61.1212 26.7778L55.9634 19.2489L58.6355 16.4178L65.9373 26.7778H61.1212Z"
            fill="white"
          />
          <path
            d="M74.2982 27.1511C72.5789 27.1511 71.2739 26.7259 70.3832 25.8756C69.5132 25.0252 69.0782 23.8119 69.0782 22.2356V6.36889H73.1796V21.3333C73.1796 21.997 73.3247 22.5052 73.6146 22.8578C73.9046 23.1896 74.3293 23.3556 74.8886 23.3556C75.0957 23.3556 75.3236 23.3141 75.5722 23.2311C75.8207 23.1274 76.0797 22.9822 76.3489 22.7956L77.7782 25.8756C77.2811 26.2489 76.7218 26.5496 76.1004 26.7778C75.4996 27.0267 74.8989 27.1511 74.2982 27.1511ZM66.5614 14.7067V11.2222H77.0636V14.7067H66.5614Z"
            fill="white"
          />
          <path
            d="M83.2886 18.5956C83.2886 16.9156 83.6096 15.5259 84.2518 14.4267C84.9146 13.3274 85.7536 12.5081 86.7686 11.9689C87.8043 11.4296 88.8814 11.16 90 11.16V15.1422C89.0471 15.1422 88.1461 15.2563 87.2968 15.4844C86.4682 15.7126 85.795 16.0859 85.2771 16.6044C84.7593 17.123 84.5004 17.7867 84.5004 18.5956H83.2886ZM80.3989 26.7778V11.2222H84.5004V26.7778H80.3989Z"
            fill="white"
          />
        </svg>
      )}
    </div>
  )
}
