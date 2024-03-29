import React, { useEffect, useState } from 'react';
import { Collapse, Input } from 'antd';
import Link from 'next/link';
import classNames from 'classnames';

import Icon from '@/components/Icon';
import { EIconName } from '@/components/Icon/enums';

import styles from './styles.module.scss';
import { courseList, ieltsList, socialList } from './data';

export interface ISidebarRightProps {
  mucLucList?: any;
}

const { Panel } = Collapse;

export default function SidebarRight({ mucLucList }: ISidebarRightProps) {
  const [headerSticky, setHeaderSticky] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 160) {
        setHeaderSticky(true);
      } else {
        setHeaderSticky(false);
      }
    });
  }, []);

  return (
    <div className={styles.SidebarRight}>
      {mucLucList && mucLucList?.length > 0 ? (
        <div
          className={classNames(styles.SidebarRight__collapse, styles['SidebarRight__collapse--mucluc'], {
            [styles.sticky]: headerSticky,
          })}
        >
          <Collapse defaultActiveKey={['1']}>
            <Panel header="Mục lục" key="1">
              {mucLucList?.map((item: any) => (
                <div key={item?.idMucLuc} className={styles.SidebarRight__collapseItem}>
                  <a href={`#${item?.idMucLuc}`}>{item?.tenMucLuc}</a>
                </div>
              ))}
            </Panel>
          </Collapse>
        </div>
      ) : null}

      <div className={styles.SidebarRight__collapse}>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="Lộ trình Khóa học IELTS" key="1">
            <div className={styles.SidebarRight__collapseList}>
              {courseList.map((item) => (
                <div className={styles.SidebarRight__collapseItem} key={item.id}>
                  <Link href={item.href}>
                    <a>{item.name}</a>
                  </Link>
                  {/* <a target="_blank" rel="noopener noreferrer" href={item.href}>
                    {item.name}
                  </a> */}
                </div>
              ))}
              <div></div>
            </div>
          </Panel>
        </Collapse>
      </div>

      <div className={styles.SidebarRight__collapse}>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="Tự học IELTS Online" key="1">
            <div className={styles.SidebarRight__collapseList}>
              {ieltsList.map((item) => (
                <div className={styles.SidebarRight__collapseItem} key={item.id}>
                  <Link href={item.href}>
                    <a>{item.name}</a>
                  </Link>
                  {/* <a target="_blank" rel="noopener noreferrer" href={item.href}>
                    {item.name}
                  </a> */}
                </div>
              ))}
              <div></div>
            </div>
          </Panel>
        </Collapse>
      </div>

      <p>
        <strong>Mạng xã hội</strong>
      </p>
      <div className={styles.SidebarRight__social}>
        <div className={styles.SidebarRight__socialList}>
          {socialList.map((item) => (
            <a
              className={styles.SidebarRight__socialItem}
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.SidebarRight__socialItemIcon}>
                <Icon name={item.iconName} />
              </div>
              <div className={styles.SidebarRight__socialItemName}>{item.name}</div>
            </a>
          ))}
        </div>

        <p>Liên lạc trực tiếp</p>
        <div className={styles.SidebarRight__socialContact}>
          <div className={styles.SidebarRight__socialContactIcon}>
            <Icon name={EIconName.ICON_PHONE} />
          </div>
          <div className={styles.SidebarRight__socialContactName}>
            Gọi điện: <strong>0979 580 154</strong>
          </div>
        </div>
      </div>

      <div className={styles.SidebarRight__register}>
        <div className={styles.SidebarRight__registerIcon}>
          <Icon name={EIconName.ICON_MAIL_LARGER} />
        </div>
        <p>
          <strong>ĐĂNG KÝ NHẬN BẢN TIN</strong>
        </p>
        <div className={styles.SidebarRight__registerInput}>
          <Input.Search placeholder="Nhập địa chỉ email" allowClear enterButton="Đăng ký" size="large" />
        </div>
        <div className={styles.SidebarRight__registerText}>
          Chúng mình sẽ tặng bạn các tài liệu hay và vé mời tham gia nhiều Event đặc biệt hấp dẫn nhé!
        </div>
      </div>
    </div>
  );
}
