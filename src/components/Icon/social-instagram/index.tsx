import React from 'react';

import { EColor } from '@/common-definition/ui-ux';

import { TSvgProps } from '../types';

const IconSocialInstagram: React.FC<TSvgProps> = ({ color = EColor.WHITE }) => {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2159_8833)">
        <path
          d="M1.24976 1.86156C-0.321908 3.49406 -0.000240851 5.22823 -0.000240851 10.4966C-0.000240851 14.8716 -0.763574 19.2574 3.23143 20.2899C4.47893 20.6107 15.5323 20.6107 16.7781 20.2882C18.4414 19.8591 19.7948 18.5099 19.9798 16.1574C20.0056 15.8291 20.0056 5.1699 19.9789 4.8349C19.7823 2.32906 18.2398 0.884897 16.2073 0.592397C15.7414 0.524897 15.6481 0.504897 13.2581 0.50073C4.78059 0.504897 2.92226 0.127397 1.24976 1.86156Z"
          fill="url(#paint0_linear_2159_8833)"
        />
        <path
          d="M9.99834 3.1165C6.97251 3.1165 4.09917 2.84734 3.00167 5.664C2.54834 6.82734 2.61417 8.33817 2.61417 10.5015C2.61417 12.3998 2.55334 14.184 3.00167 15.3382C4.09667 18.1565 6.99334 17.8865 9.99667 17.8865C12.8942 17.8865 15.8817 18.1882 16.9925 15.3382C17.4467 14.1632 17.38 12.6748 17.38 10.5015C17.38 7.6165 17.5392 5.754 16.14 4.35567C14.7233 2.939 12.8075 3.1165 9.99501 3.1165H9.99834ZM9.33667 4.44734C15.6483 4.43734 16.4517 3.73567 16.0083 13.4832C15.8508 16.9307 13.2258 16.5523 9.99917 16.5523C4.11584 16.5523 3.94667 16.384 3.94667 10.4982C3.94667 4.544 4.41334 4.45067 9.33667 4.44567V4.44734ZM13.94 5.67317C13.4508 5.67317 13.0542 6.06984 13.0542 6.559C13.0542 7.04817 13.4508 7.44484 13.94 7.44484C14.4292 7.44484 14.8258 7.04817 14.8258 6.559C14.8258 6.06984 14.4292 5.67317 13.94 5.67317ZM9.99834 6.709C7.90417 6.709 6.20667 8.40734 6.20667 10.5015C6.20667 12.5957 7.90417 14.2932 9.99834 14.2932C12.0925 14.2932 13.7892 12.5957 13.7892 10.5015C13.7892 8.40734 12.0925 6.709 9.99834 6.709ZM9.99834 8.03984C13.2525 8.03984 13.2567 12.9632 9.99834 12.9632C6.74501 12.9632 6.74001 8.03984 9.99834 8.03984Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2159_8833"
          x1="1.28811"
          y1="19.2233"
          x2="19.876"
          y2="3.13571"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFDD55" />
          <stop offset="0.5" stop-color="#FF543E" />
          <stop offset="1" stop-color="#C837AB" />
        </linearGradient>
        <clipPath id="clip0_2159_8833">
          <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconSocialInstagram;
