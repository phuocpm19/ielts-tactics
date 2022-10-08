import React from 'react';

import { TPostCommon } from '@/common-definition/types';
import { convertFullDateTime } from '@/helpers/functions';
import Icon from '@/components/Icon';
import { EIconName } from '@/components/Icon/enums';
import CommentFake from '@/components/CommentFake';

import styles from './styles.module.scss';

const Article: React.FC<TPostCommon> = ({ title, desc, createAt, content, thumbnail }) => {
  return (
    <div className={styles.Article}>
      <div className={styles['Article__header']}>
        <h1 className={styles['Article__header-title']}>{title}</h1>
        <h3 className={styles['Article__header-desc']}>{desc}</h3>
        {createAt && (
          <div className={styles['Article__header-time']}>
            <div className={styles['Article__header-time-icon']}>
              <Icon name={EIconName.ICON_CLOCK} />
            </div>

            <div className={styles['Article__header-time-date']}>{convertFullDateTime(createAt)}</div>
          </div>
        )}
      </div>
      <div className={styles['Article__content']}>
        {content && <div className="CKEditer" dangerouslySetInnerHTML={{ __html: content }}></div>}

        <CommentFake />
      </div>
    </div>
  );
};

export default Article;
