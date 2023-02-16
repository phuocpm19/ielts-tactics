import React from 'react';
import moment from 'moment';
import { Col, List, Row, Space } from 'antd';
import Link from 'next/link';
import { CalendarOutlined, FolderOpenOutlined, FolderOutlined, UserOutlined } from '@ant-design/icons';
import { EMPTY_IMAGE_LINK } from '@/helpers/constants';

import styles from './styles.module.scss';
import { renderPathArticle } from '@/helpers/functions';

const IconText = ({ text, categoryName, slug }: any) => {
  return (
    <Space>
      {/* <a target="_blank" rel="noopener noreferrer" href={`${renderPathArticle(categoryName)}/${slug}`}>
        <a>{text}</a>
      </a> */}
      <Link href={`${renderPathArticle(categoryName)}/${slug}`}>
        <a>{text}</a>
      </Link>
    </Space>
  );
};

const ListResult = ({ dataSource }: any) => {
  const renderListItem = (item: any) => {
    return (
      <List.Item
        key={item.title}
        actions={[<IconText text="Xem chi tiết" key="detail" categoryName={item.category} slug={item.slug} />]}
        extra={
          <div className={styles.ThumbnailWrapper}>
            {/* <a
              className="image-common"
              target="_blank"
              rel="noopener noreferrer"
              href={`${renderPathArticle(item.category)}/${item.slug}`}
            >
              <img
                className="img-resize"
                alt="logo"
                src={item.thumbnail ? item.thumbnail : '/images/thumbnail-default.jpeg'}
              />
            </a> */}

            <Link href={`${renderPathArticle(item.category)}/${item.slug}`}>
              <a className="image-common">
                <img
                  className="img-resize"
                  alt="logo"
                  src={item.thumbnail ? item.thumbnail : '/images/thumbnail-default.jpeg'}
                />
              </a>
            </Link>
          </div>
        }
      >
        <List.Item.Meta
          title={
            // <a target="_blank" rel="noopener noreferrer" href={`${renderPathArticle(item.category)}/${item.slug}`}>
            //   {item.title}
            // </a>
            <Link href={`${renderPathArticle(item.category)}/${item.slug}`}>
              <a>{item.title}</a>
            </Link>
          }
          description={item.desc}
        />
        {
          <div className={styles.ResultContent}>
            <Row>
              <Col xs={14}>
                <div className="text-list">
                  <div>
                    <UserOutlined /> Tạo bởi <span className="text-medium">{item.createBy}</span>
                  </div>
                  <div>
                    <CalendarOutlined /> Vào lúc
                    <span className="text-medium">{moment(item.timeServer).format('LLLL')}</span>
                  </div>
                </div>
              </Col>
              <Col xs={10}>
                <div className="text-list">
                  <div>
                    <FolderOutlined /> Nhóm danh mục <span className="text-medium">{item.category}</span>
                  </div>
                  <div>
                    <FolderOpenOutlined /> Danh mục <span className="text-medium">{item.singleCategory}</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        }
      </List.Item>
    );
  };

  return (
    <div className={styles.ListResultWrapper}>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 3,
        }}
        dataSource={dataSource}
        renderItem={renderListItem}
      />
    </div>
  );
};

export default ListResult;
