import React from 'react';
import { Col, Row, Skeleton } from 'antd';
import Link from 'next/link';

import styles from './styles.module.scss';

export interface IPostItemProps {
  loading: boolean;
  hrefPost: string;
  srcThumbnail?: string;
  title: string;
  desc: string;
}

export default function PostItem({ loading, hrefPost, srcThumbnail, title, desc }: IPostItemProps) {
  return (
    <div className={styles.PostItem}>
      <Row gutter={16}>
        <Col lg={8} xs={24}>
          <div className={styles['PostItem__thumb']}>
            {loading ? (
              <Skeleton.Image />
            ) : (
              <Link href={hrefPost}>
                <a className="image-common">
                  <img src={srcThumbnail || '/images/thumbnail-default.jpeg'} alt="thumbnail" />
                </a>
              </Link>
            )}
          </div>
        </Col>

        <Col lg={16} xs={24}>
          <Skeleton loading={loading}>
            <div className={styles['PostItem__info']}>
              <div className={styles['PostItem__info-title']}>
                <Link href={hrefPost}>
                  <a>{title}</a>
                </Link>
              </div>

              <div className={styles['PostItem__info-desc']}>
                <Link href={hrefPost}>
                  <a>{desc}</a>
                </Link>
              </div>

              <div className={styles['PostItem__info-link']}>
                <Link href={hrefPost}>
                  <a>Xem chi tiết</a>
                </Link>
              </div>
            </div>
          </Skeleton>
        </Col>
      </Row>
    </div>
  );
}
