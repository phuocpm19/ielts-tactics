import React from 'react';

import { EColor } from '@/common-definition/ui-ux';

import { TSvgProps } from '../types';

const IconUp: React.FC<TSvgProps> = ({ color = EColor.GRAY }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
      <path d="M9.25 17V5.875L8.062 7.062 7 6l3-3 3 3-1.062 1.062-1.188-1.187V17Z" />
    </svg>
  );
};

export default IconUp;
