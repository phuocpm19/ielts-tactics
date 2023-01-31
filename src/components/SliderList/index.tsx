import React from 'react';
import Link from 'next/link';
import { Col, Row } from 'antd';
import Slider from 'react-slick';

import useFetchDataFirebase from '@/helpers/hooks/useFetchDataFirebase';
import { CATEGORY_NAME } from '@/helpers/constants';
import { Paths } from '@/helpers/router';
import { convertFullDateTime } from '@/helpers/functions';
import Button from '@/components/Button';
import { EButtonType, EButtonVariant } from '@/components/Button/enums';
import Icon from '@/components/Icon';
import { EIconName } from '@/components/Icon/enums';

import styles from './styles.module.scss';

export interface ISliderListProps {}

export default function SliderList(props: ISliderListProps) {
  const isSingleCategory = true;

  const postListVocabulary = useFetchDataFirebase(CATEGORY_NAME.HOC_IELTS_ONLINE_VOCABULARY, isSingleCategory);
  const postListGrammar = useFetchDataFirebase(CATEGORY_NAME.HOC_IELTS_ONLINE_GRAMMAR, isSingleCategory);
  const postListReading = useFetchDataFirebase(CATEGORY_NAME.HOC_IELTS_ONLINE_READING, isSingleCategory);
  const postListListening = useFetchDataFirebase(CATEGORY_NAME.HOC_IELTS_ONLINE_LISTENING, isSingleCategory);
  const postListSpeaking = useFetchDataFirebase(CATEGORY_NAME.HOC_IELTS_ONLINE_SPEAKING, isSingleCategory);
  const postListWriting = useFetchDataFirebase(CATEGORY_NAME.HOC_IELTS_ONLINE_WRITING, isSingleCategory);

  const pathListVocabulary = Paths.TuhocIeltsOnlineVocabulary;
  const pathListGrammar = Paths.TuhocIeltsOnlineGrammar;
  const pathListReading = Paths.TuhocIeltsOnlineReading;
  const pathListListening = Paths.TuhocIeltsOnlineListening;
  const pathListSpeaking = Paths.TuhocIeltsOnlineSpeaking;
  const pathListWriting = Paths.TuhocIeltsOnlineWriting;

  const showListVocabulary = postListVocabulary && postListVocabulary.length > 0;
  const showListGrammar = postListGrammar && postListGrammar.length > 0;
  const showListReading = postListReading && postListReading.length > 0;
  const showListListening = postListListening && postListListening.length > 0;
  const showListSpeaking = postListSpeaking && postListSpeaking.length > 0;
  const showListWriting = postListWriting && postListWriting.length > 0;

  const listVocabulary = showListVocabulary && postListVocabulary.slice(0, 3);
  const listGrammar = showListGrammar && postListGrammar.slice(0, 3);
  const listReading = showListReading && postListReading.slice(0, 3);
  const listListening = showListListening && postListListening.slice(0, 3);
  const listSpeaking = showListSpeaking && postListSpeaking.slice(0, 3);
  const listWriting = showListWriting && postListWriting.slice(0, 3);

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const showSliderList =
    showListVocabulary ||
    showListGrammar ||
    showListReading ||
    showListListening ||
    showListSpeaking ||
    showListWriting;

  const sliderListData = [
    {
      number: '1',
      heading: 'Vocabulary',
      listData: listVocabulary,
      pathList: pathListVocabulary,
    },
    {
      number: '2',
      heading: 'Grammar',
      listData: listGrammar,
      pathList: pathListGrammar,
    },
    {
      number: '3',
      heading: 'Reading',
      listData: listReading,
      pathList: pathListReading,
    },
    {
      number: '4',
      heading: 'Listening',
      listData: listListening,
      pathList: pathListListening,
    },
    {
      number: '5',
      heading: 'Writing',
      listData: listWriting,
      pathList: pathListWriting,
    },
    {
      number: '6',
      heading: 'Speaking',
      listData: listSpeaking,
      pathList: pathListSpeaking,
    },
  ];

  return (
    <div className={styles.SliderList}>
      <Slider {...settings}>
        {showSliderList
          ? sliderListData?.map((slider: any) => (
              <>
                {slider.listData ? (
                  <div className={styles['Item__wrapper']} key={slider.number}>
                    <div className={styles.Item}>
                      <div className={styles['Item__header']}>
                        <div className={styles['Item__header-number']}>{slider.number}</div>
                        <div className={styles['Item__header-heading']}>{slider.heading}</div>
                      </div>

                      <div className={styles['Item__body']}>
                        {slider.listData?.map((item: any) => (
                          <div className={styles['Item__post']} key={item.id}>
                            <Row gutter={16}>
                              <Col span={12}>
                                <div className={styles['Item__post-thumb']}>
                                  <a target="_blank" rel="noopener noreferrer" href={`${slider.pathList}/${item.slug}`}>
                                    <img src={item.thumbnail} alt="" />
                                  </a>
                                </div>
                              </Col>
                              <Col span={12}>
                                <div className={styles['Item__post-info']}>
                                  <div className={styles['Item__post-info-title']}>
                                    <a
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      href={`${slider.pathList}/${item.slug}`}
                                    >
                                      {item.title}
                                    </a>
                                  </div>
                                  {/* {item.createAt && (
                                    <div className={styles['Item__post-info-time']}>
                                      <div className={styles['Item__post-info-time-icon']}>
                                        <Icon name={EIconName.ICON_CLOCK} />
                                      </div>
                                      <div>{convertFullDateTime(item.createAt)}</div>
                                    </div>
                                  )} */}
                                </div>
                              </Col>
                            </Row>
                          </div>
                        ))}
                      </div>

                      <div className={styles['Item__footer']}>
                        <Button variant={EButtonVariant.WHITE} type={EButtonType.DEFAULT} fullWidth>
                          {/* <Link href={slider.pathList}>
                            <a>Xem tất cả</a>
                          </Link> */}
                          <a className="aaa" target="_blank" rel="noopener noreferrer" href={slider.pathList}>
                            Xem tất cả
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </>
            ))
          : null}

        {/* {showListVocabulary && (
          <div className={styles['Item__wrapper']}>
            <div className={styles.Item}>
              <div className={styles['Item__header']}>
                <div className={styles['Item__header-number']}>1</div>
                <div className={styles['Item__header-heading']}>Vocabulary</div>
              </div>

              <div className={styles['Item__body']}>
                {listVocabulary.map((item: any) => (
                  <div className={styles['Item__post']} key={item.id}>
                    <Row gutter={16}>
                      <Col span={12}>
                        <div className={styles['Item__post-thumb']}>
                          <a target="_blank" rel="noopener noreferrer" href={`${pathListVocabulary}/${item.slug}`}>
                            <img src={item.thumbnail} alt="" />
                          </a>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div className={styles['Item__post-info']}>
                          <div className={styles['Item__post-info-title']}>
                            <a target="_blank" rel="noopener noreferrer" href={`${pathListVocabulary}/${item.slug}`}>
                              {item.title}
                            </a>
                          </div>
                          {item.createAt && (
                            <div className={styles['Item__post-info-time']}>
                              <div className={styles['Item__post-info-time-icon']}>
                                <Icon name={EIconName.ICON_CLOCK} />
                              </div>
                              <div>{convertFullDateTime(item.createAt)}</div>
                            </div>
                          )}
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))}
              </div>

              <div className={styles['Item__footer']}>
                <Button variant={EButtonVariant.WHITE} type={EButtonType.DEFAULT} fullWidth>
                  <Link href={pathListVocabulary}>
                    <a>Xem tất cả</a>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}

        {showListGrammar && (
          <div className={styles['Item__wrapper']}>
            <div className={styles.Item}>
              <div className={styles['Item__header']}>
                <div className={styles['Item__header-number']}>2</div>
                <div className={styles['Item__header-heading']}>Grammar</div>
              </div>

              <div className={styles['Item__body']}>
                {listGrammar.map((item: any) => (
                  <div className={styles['Item__post']} key={item.id}>
                    <Row gutter={16}>
                      <Col span={12}>
                        <div className={styles['Item__post-thumb']}>
                          <Link href={`${pathListGrammar}/${item.slug}`}>
                            <a>
                              <img src={item.thumbnail} alt="" />
                            </a>
                          </Link>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div className={styles['Item__post-info']}>
                          <div className={styles['Item__post-info-title']}>
                            <Link href={`${pathListGrammar}/${item.slug}`}>
                              <a>{item.title}</a>
                            </Link>
                          </div>
                          {item.createAt && (
                            <div className={styles['Item__post-info-time']}>
                              <div className={styles['Item__post-info-time-icon']}>
                                <Icon name={EIconName.ICON_CLOCK} />
                              </div>
                              <div>{convertFullDateTime(item.createAt)}</div>
                            </div>
                          )}
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))}
              </div>

              <div className={styles['Item__footer']}>
                <Button variant={EButtonVariant.WHITE} type={EButtonType.DEFAULT} fullWidth>
                  <Link href={pathListGrammar}>
                    <a>Xem tất cả</a>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}

        {showListReading && (
          <div className={styles['Item__wrapper']}>
            <div className={styles.Item}>
              <div className={styles['Item__header']}>
                <div className={styles['Item__header-number']}>3</div>
                <div className={styles['Item__header-heading']}>Reading</div>
              </div>

              <div className={styles['Item__body']}>
                {listReading.map((item: any) => (
                  <div className={styles['Item__post']} key={item.id}>
                    <Row gutter={16}>
                      <Col span={12}>
                        <div className={styles['Item__post-thumb']}>
                          <Link href={`${pathListReading}/${item.slug}`}>
                            <a>
                              <img src={item.thumbnail} alt="" />
                            </a>
                          </Link>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div className={styles['Item__post-info']}>
                          <div className={styles['Item__post-info-title']}>
                            <Link href={`${pathListReading}/${item.slug}`}>
                              <a>{item.title}</a>
                            </Link>
                          </div>
                          {item.createAt && (
                            <div className={styles['Item__post-info-time']}>
                              <div className={styles['Item__post-info-time-icon']}>
                                <Icon name={EIconName.ICON_CLOCK} />
                              </div>
                              <div>{convertFullDateTime(item.createAt)}</div>
                            </div>
                          )}
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))}
              </div>

              <div className={styles['Item__footer']}>
                <Button variant={EButtonVariant.WHITE} type={EButtonType.DEFAULT} fullWidth>
                  <Link href={pathListReading}>
                    <a>Xem tất cả</a>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}

        {showListListening && (
          <div className={styles['Item__wrapper']}>
            <div className={styles.Item}>
              <div className={styles['Item__header']}>
                <div className={styles['Item__header-number']}>4</div>
                <div className={styles['Item__header-heading']}>Listening</div>
              </div>

              <div className={styles['Item__body']}>
                {listListening.map((item: any) => (
                  <div className={styles['Item__post']} key={item.id}>
                    <Row gutter={16}>
                      <Col span={12}>
                        <div className={styles['Item__post-thumb']}>
                          <Link href={`${pathListListening}/${item.slug}`}>
                            <a>
                              <img src={item.thumbnail} alt="" />
                            </a>
                          </Link>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div className={styles['Item__post-info']}>
                          <div className={styles['Item__post-info-title']}>
                            <Link href={`${pathListListening}/${item.slug}`}>
                              <a>{item.title}</a>
                            </Link>
                          </div>
                          {item.createAt && (
                            <div className={styles['Item__post-info-time']}>
                              <div className={styles['Item__post-info-time-icon']}>
                                <Icon name={EIconName.ICON_CLOCK} />
                              </div>
                              <div>{convertFullDateTime(item.createAt)}</div>
                            </div>
                          )}
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))}
              </div>

              <div className={styles['Item__footer']}>
                <Button variant={EButtonVariant.WHITE} type={EButtonType.DEFAULT} fullWidth>
                  <Link href={pathListListening}>
                    <a>Xem tất cả</a>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}

        {showListWriting && (
          <div className={styles['Item__wrapper']}>
            <div className={styles.Item}>
              <div className={styles['Item__header']}>
                <div className={styles['Item__header-number']}>5</div>
                <div className={styles['Item__header-heading']}>Writing</div>
              </div>

              <div className={styles['Item__body']}>
                {listWriting.map((item: any) => (
                  <div className={styles['Item__post']} key={item.id}>
                    <Row gutter={16}>
                      <Col span={12}>
                        <div className={styles['Item__post-thumb']}>
                          <Link href={`${pathListWriting}/${item.slug}`}>
                            <a>
                              <img src={item.thumbnail} alt="" />
                            </a>
                          </Link>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div className={styles['Item__post-info']}>
                          <div className={styles['Item__post-info-title']}>
                            <Link href={`${pathListWriting}/${item.slug}`}>
                              <a>{item.title}</a>
                            </Link>
                          </div>
                          {item.createAt && (
                            <div className={styles['Item__post-info-time']}>
                              <div className={styles['Item__post-info-time-icon']}>
                                <Icon name={EIconName.ICON_CLOCK} />
                              </div>
                              <div>{convertFullDateTime(item.createAt)}</div>
                            </div>
                          )}
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))}
              </div>

              <div className={styles['Item__footer']}>
                <Button variant={EButtonVariant.WHITE} type={EButtonType.DEFAULT} fullWidth>
                  <Link href={pathListWriting}>
                    <a>Xem tất cả</a>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}

        {showListSpeaking && (
          <div className={styles['Item__wrapper']}>
            <div className={styles.Item}>
              <div className={styles['Item__header']}>
                <div className={styles['Item__header-number']}>6</div>
                <div className={styles['Item__header-heading']}>Speaking</div>
              </div>

              <div className={styles['Item__body']}>
                {listSpeaking.map((item: any) => (
                  <div className={styles['Item__post']} key={item.id}>
                    <Row gutter={16}>
                      <Col span={12}>
                        <div className={styles['Item__post-thumb']}>
                          <Link href={`${pathListSpeaking}/${item.slug}`}>
                            <a>
                              <img src={item.thumbnail} alt="" />
                            </a>
                          </Link>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div className={styles['Item__post-info']}>
                          <div className={styles['Item__post-info-title']}>
                            <Link href={`${pathListSpeaking}/${item.slug}`}>
                              <a>{item.title}</a>
                            </Link>
                          </div>
                          {item.createAt && (
                            <div className={styles['Item__post-info-time']}>
                              <div className={styles['Item__post-info-time-icon']}>
                                <Icon name={EIconName.ICON_CLOCK} />
                              </div>
                              <div>{convertFullDateTime(item.createAt)}</div>
                            </div>
                          )}
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))}
              </div>

              <div className={styles['Item__footer']}>
                <Button variant={EButtonVariant.WHITE} type={EButtonType.DEFAULT} fullWidth>
                  <Link href={pathListSpeaking}>
                    <a>Xem tất cả</a>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )} */}
      </Slider>
    </div>
  );
}
