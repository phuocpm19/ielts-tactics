import { NextPage } from 'next';

import { getPostBySlug } from '@/config/firebase';
import { TPostCommon } from '@/common-definition/types';
import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TinTucChiTiet from '@/screens/TinTuc/ChiTiet';

const TinTucChiTietPage: NextPage<TPostCommon> = ({ id, title, desc, createAt, content, thumbnail }) => {
  return (
    <>
      <HeadSeo title="Chi tiet Tin tuc" />

      <Layout>
        <TinTucChiTiet id={id} title={title} desc={desc} createAt={createAt} content={content} thumbnail={thumbnail} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const newPost = await getPostBySlug('posts', context.query.slug);
  const post = newPost && newPost.length > 0 && newPost[0];

  return {
    props: {
      id: post ? post.id : null,
      title: post ? post.title : null,
      desc: post ? post.desc : null,
      createAt: post ? post.createAt : null,
      content: post ? post.content : null,
      thumbnail: post ? post.thumbnail : null,
    },
  };
}

export default TinTucChiTietPage;
