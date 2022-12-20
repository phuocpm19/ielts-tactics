import React from 'react';

import { Button } from 'antd';

import styles from './styles.module.scss';

export interface IPaginationProps {
  documentName: string;
  totalData: string | number;
  page: string | number;
  currentPage: string | number;
  indexFirstItem: string | number;
  indexLastItem: string | number;
  previousPage: () => void;
  nextPage: () => void;
}

export default function Pagination({
  totalData,
  previousPage,
  currentPage,
  nextPage,
  page,
  indexFirstItem,
  indexLastItem,
  documentName,
}: IPaginationProps) {
  return (
    <div className={styles.Pagination}>
      <div>
        <Button onClick={previousPage} className="button-pagination" disabled={Number(currentPage) === 1}>
          {Number(currentPage) === 1 ? 'Page 1' : `Previous Page ${currentPage}`}
        </Button>
        <Button onClick={nextPage} className="button-pagination" disabled={Number(currentPage) === page}>
          Next Page {Number(currentPage) + 1}
        </Button>
      </div>
      <div>
        {indexFirstItem}-{indexLastItem} của {totalData} {documentName ? documentName : 'bài viết'}
      </div>
    </div>
  );
}
