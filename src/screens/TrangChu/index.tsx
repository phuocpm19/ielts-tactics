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

  const listTuHoc = [
    { id: 1, title: 'IELTS Listening', src: Paths.TuhocIeltsOnlineListening, isInternal: true },
    { id: 2, title: 'IELTS Speaking', src: Paths.TuhocIeltsOnlineSpeaking, isInternal: true },
    { id: 3, title: 'IELTS Reading', src: Paths.TuhocIeltsOnlineReading, isInternal: true },
    { id: 4, title: 'IELTS Writing', src: Paths.TuhocIeltsOnlineWriting, isInternal: true },
    { id: 5, title: 'IELTS Grammar', src: Paths.TuhocIeltsOnlineGrammar, isInternal: true },
    { id: 6, title: 'IELTS Vocabulary', src: Paths.TuhocIeltsOnlineVocabulary, isInternal: true },
    {
      id: 7,
      title: 'IELTS Online Test',
      src: 'https://docs.google.com/forms/d/e/1FAIpQLSf2G9LdAEHOZChMzEJqS0GmHUqBs5xgsEvAZVCcqidYyvvaYQ/viewform',
      isInternal: false,
    },
  ];

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
                  IELTS Tactics - Mang đến những trải nghiệm mới lạ và hiệu quả thực tế qua Chương trình luyện thi IELTS
                  chuyên nghiệp, dành riêng cho người Việt Nam.
                </div>

                <div className={styles['Banner__info-button']}>
                  <Button variant={EButtonVariant.BLACK_WHITE}>
                    <Link href={`${Paths.KhoaHoc}/lo-trình-cac-khoa-hoc-ielts-tactics`}>
                      <a>Tìm hiểu thêm</a>
                    </Link>
                    {/* <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`${Paths.KhoaHoc}/lo-trình-cac-khoa-hoc-ielts-tactics`}
                    >
                      Tìm hiểu thêm
                    </a> */}
                  </Button>
                </div>

                <Social />
              </div>
            </div>
          </Container>
        </div>

        <Container>
          <div className={styles['TuHoc']}>
            <div className={styles['TuHoc__header']}>
              <div className={styles['TuHoc__header-heading']}>Lộ trình tự học IELTS chất lượng cho bạn</div>
              <div className={styles['TuHoc__header-sub-heading']}>
                Tỏ tường mọi &quot;đường đi nước bước&quot; để chinh phục 7.0+ IELTS ngay nào!
              </div>
            </div>

            <div className={styles['TuHoc__body']}>
              <Row>
                <Col span={16}>
                  <div className={styles['TuHoc__video']}>
                    <a
                      className={styles['TuHoc__video-thumb']}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.youtube.com/watch?v=_Ltc3vmBKtw&t=4s"
                    >
                      <img src="/images/video-thumb.jpg" alt="image" />
                    </a>
                  </div>
                </Col>

                <Col span={8} className={styles['TuHoc__info-wrapper']}>
                  <div className={styles['TuHoc__info']}>
                    <div className={styles['TuHoc__info-heading']}>
                      Lộ trình tự học IELTS <br />
                      cho người mới bắt đầu <br />
                      từ 0 - 7.0 IELTS
                    </div>
                    <span className={styles['TuHoc__info-tag']}>MIỄN PHÍ</span>
                    <div className={styles['TuHoc__info-title']}>Tài liệu & Chuỗi Bài giảng online</div>
                    <div className={styles['TuHoc__info-desc']}>
                      Hy vọng sau video này của IELTS Tactics, bạn có thể tự tin bắt tay vào kế hoạch hành động nha!
                    </div>
                    <div className={styles['TuHoc__info-btn']}>
                      <Button variant={EButtonVariant.YELLOW_BLACK}>
                        <Link href={Paths.TaiLieu}>
                          <a>Tải tài liệu</a>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="TuHoc__list">
                <Row gutter={16}>
                  {listTuHoc.map((item) => (
                    <Col span={6} key={item.id} className={styles['TuHoc__item-wrapper']}>
                      {!item.isInternal ? (
                        <Link href={item.src}>
                          <a className={styles['TuHoc__item']}>{item.title}</a>
                        </Link>
                      ) : (
                        <a className={styles['TuHoc__item']} target="_blank" rel="noopener noreferrer" href={item.src}>
                          {item.title}
                        </a>
                      )}
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </Container>

        {/* <div className={styles['TaiSao']}>
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
        </div> */}

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
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf2G9LdAEHOZChMzEJqS0GmHUqBs5xgsEvAZVCcqidYyvvaYQ/viewform"
                  >
                    Đăng ký ngay
                  </a>
                </Button>
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
                  <img src="/images/doc-quyen.png" alt="doc-quyen" />
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

        <div className={styles['LoTrinh']}>
          <Container>
            <div className={styles['LoTrinh__header']}>
              <div className={styles['LoTrinh__header-heading']}>LỘ TRÌNH KHÓA HỌC IELTS TACTICS TINH GỌN</div>
              <div className={`${styles['LoTrinh__header-image']} image-common`}>
                <img src="/images/cam-ket.png" alt="ielts-tactics-cam-ket" />
              </div>
            </div>

            <div className={`${styles['LoTrinh__image']} image-common`}>
              <img src="/images/lo-trinh-moi.png" alt="lo-trinh-moi" />
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
                        {/* <a
                          className={styles['LoTrinh__detail-item-link']}
                          target="_blank"
                          rel="noopener noreferrer"
                          href={item.href}
                        >
                          {item.title}
                        </a> */}
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Container>
        </div>

        {/* <div className={styles['GiaoVien']}>
          <div className={styles['GiaoVien__header']}>
            <div className={styles['GiaoVien__header-heading']}></div>
            <div className={styles['GiaoVien__header-sub-heading']}></div>
          </div>
          <div className={styles['GiaoVien__body']}></div>
        </div> */}
      </div>
    </>
  );
}
