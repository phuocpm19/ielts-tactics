// eslint-disable-next-line @next/next/no-img-element
import React, { useState } from 'react';
import Link from 'next/link';
import { Drawer, Input } from 'antd';

import { Paths } from '@/helpers/router';
import styles from './styles.module.scss';
import ConTact from '@/components/Contact';
import Icon from '@/components/Icon';
import { EIconName } from '@/components/Icon/enums';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { EButtonVariant } from '@/components/Button/enums';

import { navList } from './data';

export interface IHeaderProps {
  showBanner?: boolean;
}

const { Search } = Input;

export default function Header({ showBanner }: IHeaderProps) {
  const [menuMobileVisible, setMenuMobileVisible] = useState<boolean>(false);

  const showMenuMobiles = () => {
    setMenuMobileVisible(true);
  };

  const hiddenMenuMobiles = () => {
    setMenuMobileVisible(false);
  };

  return (
    <div className={styles.Header}>
      <div className={styles.visibleDesktops}>
        {showBanner && (
          <div className={styles.banner}>
            <Link href={Paths.BannerTop}>
              <a>
                <img src="/images/banner.jpg" alt="banner" />
              </a>
            </Link>
          </div>
        )}

        <div className={styles.infoWrapper}>
          <Container>
            <div className={styles.info}>
              <div className={styles.infoLeft}>
                <div className={styles.infoLeft__logo}>
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
                  <Search placeholder="Tìm kiếm" style={{ width: 200 }} />
                </div>

                <div className={styles.infoRight__button}>
                  <Button variant={EButtonVariant.GRAY}>Đăng nhập</Button>
                  <Button variant={EButtonVariant.YELLOW_BLACK}>Đăng ký</Button>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <div className={styles.navWrapper}>
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

          <div className={styles.logo}>
            <Link href={Paths.TrangChu}>
              <a>
                <img src="/images/logo.png" alt="logo" />
              </a>
            </Link>
          </div>
        </div>

        <div className={styles.menuMobile}>
          <Drawer title="Basic Drawer" placement="right" onClose={hiddenMenuMobiles} open={menuMobileVisible}>
            <div className={styles.menuMobile__content}>content</div>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
