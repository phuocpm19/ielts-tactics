import React from 'react';
import { Col, Empty, Row } from 'antd';

import Container from '@/components/Container';
import PostItem from '@/containers/PostItem';
import useFakeLoading from '@/helpers/hooks/useFakeLoading';
import Loading from '@/components/Loading';
import { sortList } from '@/helpers/functions';

export interface IPostListProps {
  pathList: string;
  postList: any[] | false;
}

export default function PostList({ pathList, postList }: IPostListProps) {
  const showPostList = postList && postList.length > 0;
  const loading = useFakeLoading(2000);

  return (
    <div className="padding-common">
      {loading && <Loading />}

      <Container isChild>
        <Row gutter={16}>
          {!showPostList ? (
            <Empty />
          ) : (
            <>
              {sortList(postList).map((item: any) => (
                <Col xs={24} sm={12} lg={24} key={item.id}>
                  <PostItem
                    hrefPost={`${pathList}/${item.slug}`}
                    srcThumbnail={item.thumbnail}
                    title={item.title}
                    desc={item.desc}
                  />
                </Col>
              ))}
            </>
          )}
        </Row>
      </Container>
    </div>
  );
}
