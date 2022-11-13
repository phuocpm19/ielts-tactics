import Button from '@/components/Button';
import { EButtonVariant } from '@/components/Button/enums';
import { Paths } from '@/helpers/router';
import Link from 'next/link';
import * as React from 'react';

import styles from './styles.module.scss';

export default function NotFound() {
  return (
    <div className={styles.NotFound__wrapper}>
      <div className={styles.NotFound}>
        <div className={styles.NotFound__img}>
          <img src="/images/404.png" alt="404" />
        </div>

        <div className={styles.NotFound__btn}>
          <Button variant={EButtonVariant.YELLOW_BLACK}>
            <Link href={Paths.TrangChu}>
              <a>Back to IELTS Tactics!</a>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
