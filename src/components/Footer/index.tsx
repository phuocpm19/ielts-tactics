import React from 'react';
import { Col, Input, Row } from 'antd';
import Link from 'next/link';

import { Paths } from '@/helpers/router';
import Container from '@/components/Container';
import Social from '@/components/Social';
import ConTact from '@/components/Contact';

import styles from './styles.module.scss';
import { branchList, serviceList } from './data';

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <div className={styles.container}>
      <Container>
        <Row gutter={24}>
          <Col span={8}>
            <div className={styles.info}>
              <div className={styles.logo}>
                <Link href={Paths.TrangChu}>
                  <a>
                    <img src="/images/logo.png" alt="logo" />
                  </a>
                </Link>
              </div>

              <div className={styles.about}>
                <div className={styles.headerCommon}>
                  <strong>About IELTS Tactics</strong>
                </div>
                <p className={styles.text}>
                  IELTS Tactics - Trung tâm luyện thi IELTS đặt vấn đề chất lượng và trải nghiệm của học viên là trọng
                  tâm mọi hoạt động. Chúng tôi tin rằng, bằng kinh nghiệm và tâm huyết, IELTS Tactics là môi trường
                  tuyệt vời để bạn phát huy tối đa năng lực IELTS, tự tin thực hiện những khát vọng lớn lao hơn trong
                  tương lai.
                </p>
                <p className={styles.text}>
                  <strong> IELTS Tactics - Smarter, Faster, Better</strong>
                </p>
              </div>
            </div>
          </Col>

          <Col span={8}>
            <div className={styles.branch}>
              <div className={styles.headerCommon}>
                <strong>Hệ thống cơ sở:</strong>
              </div>

              <div className={styles.branch__list}>
                {branchList.map((item) => (
                  <p className={styles.text} key={item.id}>
                    {item.name}
                  </p>
                ))}
              </div>
            </div>

            <div className={styles.service}>
              <div className={styles.headerCommon}>
                <strong>Our service:</strong>
              </div>

              <div className={styles.service__list}>
                {serviceList.map((item) => (
                  <div className={styles.service__item} key={item.id}>
                    {item.isInternal ? (
                      <Link href={item.href}>
                        <a className={styles.service__itemName}>{item.name}</a>
                      </Link>
                    ) : (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col span={8}>
            <div className={styles.contact}>
              <div className={styles.headerCommon}>
                <strong>Contact us:</strong>
              </div>
              <div className={styles.contact__list}>
                <ConTact positionFooter />
              </div>
            </div>

            <div className={styles.follow}>
              <div className={styles.headerCommon}>
                <strong>Follow us</strong>
              </div>
              <div className={styles.social}>
                <Social />
              </div>
            </div>

            <div className={styles.register}>
              <div className={styles.headerCommon}>
                <strong>Đăng ký nhận bản tin:</strong>
              </div>
              <div className={styles.input}>
                <Input.Search placeholder="Nhập địa chỉ email" allowClear enterButton="Đăng ký" size="large" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
