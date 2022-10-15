import React from 'react';

import { EColor } from '@/common-definition/ui-ux';

import { TSvgProps } from '../types';

const IconClose: React.FC<TSvgProps> = ({ color = EColor.PRIMARY }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
      <path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z" />
    </svg>
  );
};

export default IconClose;
