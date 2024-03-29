// eslint-disable-next-line @next/next/no-img-element
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Drawer, Input, Menu, MenuProps } from 'antd';
import { Button as ButtonAntd } from 'antd';
import classNames from 'classnames';

import { Paths } from '@/helpers/router';
import styles from './styles.module.scss';
import ConTact from '@/components/Contact';
import Icon from '@/components/Icon';
import { EIconName } from '@/components/Icon/enums';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { EButtonVariant } from '@/components/Button/enums';
import SearchModal from '@/components/SearchModal';

import { MENU, navList } from './data';

export interface IHeaderProps {
  showBanner?: boolean;
}

type MenuItem = Required<MenuProps>['items'][number];

export default function Header({ showBanner }: IHeaderProps) {
  const [bannerVisible, setBannerVisible] = useState<boolean>(true);
  const [menuMobileVisible, setMenuMobileVisible] = useState<boolean>(false);
  const [headerSticky, setHeaderSticky] = useState<boolean>(false);
  const [openKeys, setOpenKeys] = useState(['menu2']);
  const rootSubmenuKeys = ['menu1', 'menu2', 'menu3', 'menu4', 'menu6', 'menu6', 'menu7', 'menu8'];

  const [modalSearchVisible, setModalSearchVisible] = useState<boolean>(false);

  const showModalSearch = () => {
    setModalSearchVisible(true);
  };

  const hiddenModalSearch = () => {
    setModalSearchVisible(false);
  };

  const getItem = (label: React.ReactNode, key: React.Key, children?: MenuItem[], type?: 'group'): MenuItem => {
    return {
      key,
      children,
      label,
      type,
    } as MenuItem;
  };

  const items: MenuItem[] = [
    getItem(
      <Link href={MENU.TrangChu.href}>
        <a>{MENU.TrangChu.name}</a>
      </Link>,
      'menu1',
    ),
    getItem(
      <Link href={MENU.GioiThieu.href}>
        <a>{MENU.GioiThieu.name}</a>
      </Link>,
      'menu2',
      [
        getItem(
          <Link href={MENU.GioiThieuVeIeltsTactics.href}>
            <a>{MENU.GioiThieuVeIeltsTactics.name}</a>
          </Link>,
          'menu21',
        ),
        getItem(
          <Link href={MENU.GioiThieu.href}>
            <a>{MENU.GioiThieu.name}</a>
          </Link>,
          'menu22',
        ),
        getItem(
          <Link href={MENU.GioiThieuChinhSach.href}>
            <a>{MENU.GioiThieuChinhSach.name}</a>
          </Link>,
          'menu23',
        ),
      ],
    ),
    getItem(
      <Link href={MENU.LichKhaiGiang.href}>
        <a>{MENU.LichKhaiGiang.name}</a>
      </Link>,
      'menu3',
    ),
    getItem(
      <Link href={MENU.KhoaHoc.href}>
        <a>{MENU.KhoaHoc.name}</a>
      </Link>,
      'menu4',
      [
        getItem(
          <Link href={MENU.KhoaHoc55.href}>
            <a>{MENU.KhoaHoc55.name}</a>
          </Link>,
          'menu41',
        ),
        getItem(
          <Link href={MENU.KhoaHoc65.href}>
            <a>{MENU.KhoaHoc65.name}</a>
          </Link>,
          'menu42',
        ),
        getItem(
          <Link href={MENU.KhoaHoc7075.href}>
            <a>{MENU.KhoaHoc7075.name}</a>
          </Link>,
          'menu43',
        ),
      ],
    ),
    getItem(
      <Link href={MENU.TaiLieu.href}>
        <a>{MENU.TaiLieu.name}</a>
      </Link>,
      'menu5',
    ),
    getItem(
      <Link href={MENU.TuhocIeltsOnline.href}>
        <a>{MENU.TuhocIeltsOnline.name}</a>
      </Link>,
      'menu6',
      [
        getItem(
          <Link href={MENU.TuhocIeltsOnlineVocabulary.href}>
            <a>{MENU.TuhocIeltsOnlineVocabulary.name}</a>
          </Link>,
          'menu61',
        ),
        getItem(
          <Link href={MENU.TuhocIeltsOnlineGrammar.href}>
            <a>{MENU.TuhocIeltsOnlineGrammar.name}</a>
          </Link>,
          'menu62',
        ),
        getItem(
          <Link href={MENU.TuhocIeltsOnlineReading.href}>
            <a>{MENU.TuhocIeltsOnlineReading.name}</a>
          </Link>,
          'menu63',
        ),
        getItem(
          <Link href={MENU.TuhocIeltsOnlineListening.href}>
            <a>{MENU.TuhocIeltsOnlineListening.name}</a>
          </Link>,
          'menu64',
        ),
        getItem(
          <Link href={MENU.TuhocIeltsOnlineSpeaking.href}>
            <a>{MENU.TuhocIeltsOnlineSpeaking.name}</a>
          </Link>,
          'menu65',
        ),
        getItem(
          <Link href={MENU.TuhocIeltsOnlineWriting.href}>
            <a>{MENU.TuhocIeltsOnlineWriting.name}</a>
          </Link>,
          'menu66',
        ),
      ],
    ),
    getItem(
      <Link href={MENU.TinTuc.href}>
        <a>{MENU.TinTuc.name}</a>
      </Link>,
      'menu7',
    ),
    getItem(MENU.TuVan.name, 'menu8', [
      getItem(
        <Link href={MENU.TuVanKhoaHoc.href}>
          <a>{MENU.TuVanKhoaHoc.name}</a>
        </Link>,
        'menu81',
      ),
      getItem(
        <Link href={MENU.TuVanThiThu.href}>
          <a>{MENU.TuVanThiThu.name}</a>
        </Link>,
        'menu82',
      ),
    ]),
  ];

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const showMenuMobiles = () => {
    setMenuMobileVisible(true);
  };

  const hiddenMenuMobiles = () => {
    setMenuMobileVisible(false);
  };

  const closeBanner = () => {
    setBannerVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 380) {
        setHeaderSticky(true);
      } else {
        setHeaderSticky(false);
      }
    });
  }, []);

  return (
    <>
      <div className={styles.Header}>
        <div className={styles.visibleDesktops}>
          {bannerVisible && showBanner && (
            <div className={styles.banner}>
              <a className="image-common" target="_blank" rel="noopener noreferrer" href={Paths.BannerTop}>
                <img src="/images/banner-t3.jpg" alt="banner" />
              </a>

              <div className={`${styles.banner__icon} icon-common`} onClick={closeBanner}>
                <Icon name={EIconName.ICON_CLOSE} />
              </div>
            </div>
          )}

          <div className={styles.infoWrapper}>
            <Container>
              <div className={styles.info}>
                <div className={styles.infoLeft}>
                  <div className={`${styles.infoLeft__logo} wrapper-logo`}>
                    {/* <a target="_blank" rel="noopener noreferrer" href={Paths.TrangChu}>
                      <img src="/images/logo.png" alt="logo" />
                    </a> */}
                    <Link href={Paths.TrangChu}>
                      <a>
                        <img src="/images/logo.png" alt="logo" />
                      </a>
                    </Link>
                  </div>

                  <ConTact />
                </div>

                <div className={styles.infoRight}>
                  <div className={styles.infoRight__search}>
                    {/* <ButtonAntd onClick={showModalSearch}>CLick me</ButtonAntd> */}
                    <Input.Search placeholder="Tìm kiếm" style={{ width: 200 }} onClick={showModalSearch} />
                  </div>

                  <div className={styles.infoRight__button}>
                    <Button variant={EButtonVariant.GRAY}>Đăng nhập</Button>
                    <Button variant={EButtonVariant.YELLOW_BLACK}>Đăng ký</Button>
                  </div>
                </div>
              </div>
            </Container>
          </div>

          <div className={classNames(styles.navWrapper, { [styles.sticky]: headerSticky })}>
            <Container>
              <div className={styles.navList}>
                {navList.map((item) => (
                  <div className={styles.navItem} key={item.id}>
                    <div className={styles.navItem__menu}>
                      {item.href ? (
                        <Link href={item.href}>
                          <a className={styles.navItem__menuName}>{item.name}</a>
                        </Link>
                      ) : (
                        // <a
                        //   className={styles.navItem__menuName}
                        //   target="_blank"
                        //   rel="noopener noreferrer"
                        //   href={item.href}
                        // >
                        //   {item.name}
                        // </a>
                        <span className={styles.navItem__menuName}>{item.name}</span>
                      )}

                      {item.subMenu && (
                        <div className={`${styles.navItem__menuIcon} icon-common`}>
                          <Icon name={EIconName.ICON_ARROW_DOWN} />
                        </div>
                      )}
                    </div>

                    {item.subMenu && (
                      <div className={styles.navItem__subMenu}>
                        {item.subMenu.map((itemChild) => (
                          <div className={styles.navItem__subMenuItem} key={itemChild.id}>
                            {itemChild.isInternal ? (
                              <Link href={itemChild.href}>
                                <a className={styles.navItem__subMenuItemName}>{itemChild.name}</a>
                              </Link>
                            ) : (
                              // <a
                              //   className={styles.navItem__subMenuItemName}
                              //   target="_blank"
                              //   rel="noopener noreferrer"
                              //   href={itemChild.href}
                              // >
                              //   {itemChild.name}
                              // </a>
                              <a
                                className={styles.navItem__subMenuItemName}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={itemChild.href}
                              >
                                {itemChild.name}
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </div>

        <div className={styles.visibleMobiles}>
          <div className={styles.toolBar}>
            <div className={styles.icon} onClick={showMenuMobiles}>
              <div className="icon-common">
                <Icon name={EIconName.ICON_HAMBURGER} />
              </div>
            </div>

            <div className={`${styles.logo} wrapper-logo`}>
              <Link href={Paths.TrangChu}>
                <a className="image-common">
                  <img src="/images/logo.png" alt="logo" />
                </a>
              </Link>
            </div>

            <div className={styles.empty}>&nbsp;</div>
          </div>

          <Drawer
            className={styles.MenuMobile}
            title={
              <div className="wrapper-logo">
                <Link href={Paths.TrangChu}>
                  <a className="image-common">
                    <img src="/images/logo.png" alt="logo" />
                  </a>
                </Link>
              </div>
            }
            placement="left"
            onClose={hiddenMenuMobiles}
            open={menuMobileVisible}
          >
            <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} items={items} />
          </Drawer>
        </div>
      </div>

      <SearchModal visible={modalSearchVisible} onCancel={hiddenModalSearch} onSubmit={hiddenModalSearch} />
    </>
  );
}
