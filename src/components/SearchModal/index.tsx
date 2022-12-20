import React from 'react';
import { Modal } from 'antd';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, useHits } from 'react-instantsearch-hooks-web';
// import * as algolia from "constants/algolia";
import { ALGOLIA_APP_ID, ALGOLIA_API_KEY_SEARCH_POST_LIST } from '@/helpers/constants';

import ListResult from './components/ListResult';
import styles from './styles.module.scss';

interface ISearchModal {
  visible: boolean;
  onCancel: () => void;
  onSubmit: () => void;
}

const SearchModal: React.FC<ISearchModal> = ({ visible, onCancel, onSubmit }) => {
  const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY_SEARCH_POST_LIST);

  // const handleSubmitSearch = (value: any) => {
  //   console.log('value', value);
  // };

  const onStateChange = ({ uiState, setUiState }: any) => {
    setUiState(uiState);
  };

  const CustomHits = (props: any) => {
    const { hits } = useHits(props);

    return (
      <>
        <ListResult dataSource={hits} />
      </>
    );
  };

  return (
    <Modal
      title="Tìm kiếm"
      open={visible}
      onOk={onSubmit}
      onCancel={onCancel}
      width="980px"
      footer={false}
      style={{
        top: 20,
      }}
    >
      <InstantSearch searchClient={searchClient} indexName="posts" onStateChange={onStateChange}>
        <SearchBox
          searchAsYouType={false}
          placeholder="Nhập tiêu đề bài viết? "
          // onSubmit={handleSubmitSearch}
          className={styles.customSearchBox}
        />
        <CustomHits />
      </InstantSearch>
    </Modal>
  );
};

export default SearchModal;
