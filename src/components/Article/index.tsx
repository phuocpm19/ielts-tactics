import React from 'react';

import { TPostCommon } from '@/common-definition/types';

const Article: React.FC<TPostCommon> = ({ title, desc, createAt, content }) => {
  return (
    <div className="Article padding-common">
      <h1>{title}</h1>
      <h3>{desc}</h3>
      <div>{createAt}</div>
      {content && <p dangerouslySetInnerHTML={{ __html: content }}></p>}
    </div>
  );
};

export default Article;
