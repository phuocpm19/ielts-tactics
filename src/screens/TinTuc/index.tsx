import React from 'react';
import Link from 'next/link';
import { Col, Row, Skeleton } from 'antd';

import useFakeLoading from '@/helpers/hooks/useFakeLoading';
import useFetchDataFirebase from '@/helpers/hooks/useFetchDataFirebase';
import { Paths } from '@/helpers/router';
import Container from '@/components/Container';

import styles from './styles.module.scss';

export interface ITinTucProps {}

const TinTuc: React.FC = (props: ITinTucProps) => {
  const loading = useFakeLoading();
  const news = useFetchDataFirebase();
  const showNews = news && news.length > 0;

  return (
    <div className={`${styles.News || 'News'} padding-common`}>
      <Container isChild>
        <div className={styles.News__list}>
          {showNews &&
            news.map((item: any) => {
              const itemHref = `${Paths.TinTucChiTiet}${item.slug}`;

              return (
                <div className={styles.News__item} key={item.id}>
                  <Row gutter={16}>
                    <Col lg={8} xs={24}>
                      <div className={styles['News__item-thumb']}>
                        {loading ? (
                          <Skeleton.Image />
                        ) : (
                          <Link href={itemHref}>
                            <a className="image-common">
                              <img src={item.thumbnail || '/images/thumbnail-default.jpeg'} alt="thumbnail" />
                            </a>
                          </Link>
                        )}
                      </div>
                    </Col>

                    <Col lg={16} xs={24}>
                      <Skeleton loading={loading}>
                        <div className={styles['News__item-info']}>
                          <div className={styles['News__item-info-title']}>
                            <Link href={itemHref}>
                              <a>{item.title}</a>
                            </Link>
                          </div>

                          <div className={styles['News__item-info-desc']}>
                            <Link href={itemHref}>
                              <a>{item.desc}</a>
                            </Link>
                          </div>

                          <div className={styles['News__item-info-link']}>
                            <Link href={itemHref}>
                              <a>Xem chi tiết</a>
                            </Link>
                          </div>
                        </div>
                      </Skeleton>
                    </Col>
                  </Row>
                </div>
              );
            })}
        </div>
      </Container>
    </div>
  );
};

export default TinTuc;
