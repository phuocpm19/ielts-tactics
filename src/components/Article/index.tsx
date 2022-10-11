import React from 'react';

import { convertFullDateTime } from '@/helpers/functions';
import useFakeLoading from '@/helpers/hooks/useFakeLoading';
import Icon from '@/components/Icon';
import { EIconName } from '@/components/Icon/enums';
import CommentFake from '@/components/CommentFake';
import Loading from '@/components/Loading';

import { TArticle } from './types';
import styles from './styles.module.scss';

const Article: React.FC<TArticle> = ({ title, desc, createAt, content, thumbnail, slug, show }) => {
  const loading = useFakeLoading(1500);

  return (
    <>
      {loading && <Loading />}

      <div className={styles.Article}>
        <div className={styles['Article__header']}>
          <h1 className={styles['Article__header-title']}>{title}</h1>
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
    </>
  );
};

export default Article;
