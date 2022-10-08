import React from 'react';

import { EColor } from '@/common-definition/ui-ux';

import { TSvgProps } from '../types';

const IconCheckRed: React.FC<TSvgProps> = ({ color = EColor.RED }) => {
  return (
    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.03981 13L2.16531 12.6197C1.27404 12.2313 1.04494 11.3051 0.949942 10.9085L0 7.06226L2.05634 6.5842L2.74366 9.3738C4.8 5.95132 7.21956 2.38759 10.8042 0L12 1.69494C8.18067 4.24008 5.70244 8.46385 3.51758 12.1906L3.03981 13Z"
        fill={color}
      />
    </svg>
  );
};

export default IconCheckRed;
