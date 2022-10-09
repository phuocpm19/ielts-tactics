import React from 'react';
import Link from 'next/link';
import { Col, Row } from 'antd';

import { Paths } from '@/helpers/router';
import useFakeLoading from '@/helpers/hooks/useFakeLoading';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { EButtonType, EButtonVariant } from '@/components/Button/enums';
import SliderList from '@/components/SliderList';
import Social from '@/components/Social';
import Icon from '@/components/Icon';
import { EIconName } from '@/components/Icon/enums';
import Loading from '@/components/Loading';

import styles from './styles.module.scss';
import { LoTrinhList, TaiSaoList } from './data';

export default function TrangChu() {
  const loading = useFakeLoading(1000);

  return (
    <>
      {loading && <Loading />}

      <div className={styles.TrangChu}>
        <div className={styles['Banner']}>
          <Container>
            <div className={styles['Banner__wrapper']}>
              <div className={styles['Banner__info']}>
                <div className={styles['Banner__info-title']}>
                  <strong>Học IELTS </strong>cũng cần <br />
                  <span>
                    chiến thuật <strong>!</strong>
                  </span>
                </div>

                <div className={styles['Banner__info-desc']}>
                  IELTS Tactics - Mang đến những trải nghiệm mới lạ và hiệu quả chân thực qua Dịch vụ học IELTS trực
                  tuyến chuyên nghiệp hàng đầu dành riêng cho Học sinh, Sinh viên Việt Nam!
                </div>

                <div className={styles['Banner__info-button']}>
                  <Button variant={EButtonVariant.BLACK_WHITE}>
                    <Link href={`${Paths.TinTuc}/trung-tam-luyen-thi-ielts-uy-t%C3%ADn-tai-viet-nam-ielts-tactics`}>
                      <a>Tìm hiểu thêm</a>
                    </Link>
                  </Button>
                </div>

                <Social />
              </div>
            </div>
          </Container>
        </div>

        <div className={styles['TaiSao']}>
          <Container>
            <div className={styles['TaiSao__header']}>
              <div className={styles['TaiSao__heading']}>TẠI SAO CON CẦN CÓ 1 CHỨNG CHỈ IELTS?</div>
              <div className={styles['TaiSao__subHeading']}>It&apos;s Time to Change Your Life!</div>
            </div>
            <div className={styles['TaiSao__body']}>
              <Row gutter={16}>
                {TaiSaoList.map((item) => (
                  <Col xs={24} sm={12} lg={6} key={item.id}>
                    <div className={styles['TaiSao__item']}>
                      <div className={styles['TaiSao__item-thumb']}>
                        <img src={item.imgSrc} alt="image" />
                      </div>
                      <div className={styles['TaiSao__item-info']}>
                        <div className={styles['TaiSao__item-info-title']}>{item.title}</div>
                        <div className={styles['TaiSao__item-info-desc']}>{item.desc}</div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </div>

        <div className={styles['ThiThu__wrapper']}>
          <Container>
            <div className={styles['ThiThu']}>
              <div className={styles['ThiThu__left']}>
                <div className={styles['ThiThu__left-icon']}>
                  <Icon name={EIconName.ICON_DOCUMENT_YELLOW} />
                </div>
                <div className={styles['ThiThu__left-info']}>
                  <div className={styles['ThiThu__left-info-title']}>Thi thử IELTS hoàn toàn miễn phí</div>
                  <div className={styles['ThiThu__left-info-list']}>
                    <div className={styles['ThiThu__left-info-item']}>
                      <div className={styles['ThiThu__left-info-item-icon']}>
                        <Icon name={EIconName.ICON_CHECK_RED} />
                      </div>
                      <p>Nhận kết quả nhanh, chính xác</p>
                    </div>
                    <div className={styles['ThiThu__left-info-item']}>
                      <div className={styles['ThiThu__left-info-item-icon']}>
                        <Icon name={EIconName.ICON_CHECK_RED} />
                      </div>
                      <p>Tư vấn lộ trình IELTS sau Test cùng chuyên gia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles['ThiThu__right']}>
                <Button variant={EButtonVariant.BLACK_YELLOW}>
                  <a target="_blank" rel="noopener noreferrer" href="https://lotrinhkhoahocielts.ieltstactics.vn/">
                    Đăng ký ngay
                  </a>
                </Button>
              </div>
            </div>
          </Container>
        </div>

        <div className={styles['LoTrinh']}>
          <Container>
            <div className={styles['LoTrinh__header']}>
              <div className={styles['LoTrinh__header-heading']}>LỘ TRÌNH KHÓA HỌC IELTS TACTICS TINH GỌN</div>
              <div className={`${styles['LoTrinh__header-image']} image-common`}>
                <img src="/images/cam-ket.png" />
              </div>
            </div>

            <div className={`${styles['LoTrinh__image']} image-common`}>
              <img src="/images/lo-trinh.png" />
            </div>

            <div className={styles['LoTrinh__detail']}>
              <div className={styles['LoTrinh__detail-header']}>CHI TIẾT LỘ TRÌNH THEO MỤC TIÊU</div>
              <div className={styles['LoTrinh__detail-list']}>
                <Row gutter={16}>
                  {LoTrinhList.map((item) => (
                    <Col xs={24} md={8} key={item.id}>
                      <div className={styles['LoTrinh__detail-item']}>
                        <Link href={item.href}>
                          <a className={styles['LoTrinh__detail-item-link']}>{item.title}</a>
                        </Link>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Container>
        </div>

        <div className={styles['KhamPha']}>
          <Container>
            <div className={styles['KhamPha__header']}>
              <div className={styles['KhamPha__header-heading']}>
                <div className={styles['KhamPha__header-heading-text']}>KHÁM PHÁ KHO TÀI LIỆU BÀI GIẢNG IELTS</div>
                <div className={styles['KhamPha__header-heading-image']}>
                  <img src="/images/doc-quyen.png" alt="image" />
                </div>
              </div>
              <div className={styles['KhamPha__header-subHeading']}>
                Chất lượng - Chi tiết - Update 24h bởi đội ngũ chuyên gia học thuật giàu kinh nghiệm!
              </div>
            </div>

            <div className={styles['KhamPha__body']}>
              <SliderList />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
