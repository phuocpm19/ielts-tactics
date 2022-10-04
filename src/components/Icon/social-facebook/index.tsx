import React from 'react';

import { EColor } from '@/common-definition/ui-ux';

import { TSvgProps } from '../types';

const IconSocialFacebook: React.FC<TSvgProps> = ({ color = EColor.WHITE }) => {
  return (
    <svg width="10" height="21" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.175 3.82083H10.0008V0.640833C9.68583 0.5975 8.6025 0.5 7.34083 0.5C1.56417 0.5 3.13583 7.04167 2.90583 8H0V11.555H2.905V20.5H6.46667V11.5558H9.25417L9.69667 8.00083H6.46583C6.6225 5.6475 5.83167 3.82083 8.175 3.82083Z"
        fill="#3B5999"
      />
    </svg>
  );
};

export default IconSocialFacebook;
