import React from 'react';
import { Col, Row, Skeleton } from 'antd';
import Link from 'next/link';

import useFakeLoading from '@/helpers/hooks/useFakeLoading';

import styles from './styles.module.scss';

export interface IPostItemProps {
  hrefPost: string;
  srcThumbnail?: string;
  title: string;
  desc: string;
}

export default function PostItem({ hrefPost, srcThumbnail, title, desc }: IPostItemProps) {
  const loading = useFakeLoading(500);

  return (
    <div className={styles.PostItem}>
      <Row gutter={16}>
        <Col lg={8} xs={24}>
          <div className={styles['PostItem__thumb']}>
            {loading ? (
              <Skeleton.Image />
            ) : (
              // <Link href={hrefPost}>
              //   <a className="image-common">
              //     <img src={srcThumbnail || '/images/thumbnail-default.jpeg'} alt="thumbnail" />
              //   </a>
              // </Link>
              <a className="image-common" target="_blank" rel="noopener noreferrer" href={hrefPost}>
                <img src={srcThumbnail || '/images/thumbnail-default.jpeg'} alt={title || 'ielts-tactics'} />
              </a>
            )}
          </div>
        </Col>

        <Col lg={16} xs={24}>
          <Skeleton loading={loading}>
            <div className={styles['PostItem__info']}>
              <div className={styles['PostItem__info-title']}>
                {/* <Link href={hrefPost}>
                  <a>{title}</a>
                </Link> */}
                <a target="_blank" rel="noopener noreferrer" href={hrefPost}>
                  {title}
                </a>
              </div>

              <div className={styles['PostItem__info-desc']}>
                {/* <Link href={hrefPost}>
                  <a>{desc}</a>
                </Link> */}
                <a target="_blank" rel="noopener noreferrer" href={hrefPost}>
                  {desc}
                </a>
              </div>

              <div className={styles['PostItem__info-link']}>
                {/* <Link href={hrefPost}>
                  <a>Xem chi tiết</a>
                </Link> */}
                <a target="_blank" rel="noopener noreferrer" href={hrefPost}>
                  Xem chi tiết
                </a>
              </div>
            </div>
          </Skeleton>
        </Col>
      </Row>
    </div>
  );
}
