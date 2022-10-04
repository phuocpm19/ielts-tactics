import React from 'react';

import { EColor } from '@/common-definition/ui-ux';

import { TSvgProps } from '../types';

const IconMail: React.FC<TSvgProps> = ({ color = EColor.WHITE }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 22 22" width="22px" fill={color}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z" />
    </svg>
  );
};

export default IconMail;
