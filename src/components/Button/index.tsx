import * as React from 'react';
import { Button as ButtonAntd } from 'antd';

import { EButtonType, EButtonVariant } from './enums';
import styles from './styles.module.scss';

export interface IButtonProps {
  children: React.ReactNode;
  variant?: EButtonVariant;
  type?: EButtonType;
  fullWidth?: boolean;
}

const Button = ({ children, variant, type = EButtonType.PRIMARY, fullWidth }: IButtonProps) => {
  const ButtonContent = (
    <ButtonAntd className={styles.button} block={fullWidth} type={type}>
      {children}
    </ButtonAntd>
  );

  const renderClassVariant = () => {
    switch (variant) {
      case EButtonVariant.GRAY:
        return <div className={`${styles.container} ${styles.variant__gray}`}>{ButtonContent}</div>;
      case EButtonVariant.WHITE:
        return <div className={`${styles.container} ${styles.variant__white}`}>{ButtonContent}</div>;
      case EButtonVariant.PURPLE:
        return <div className={`${styles.container} ${styles.variant__purple}`}>{ButtonContent}</div>;
      case EButtonVariant.BLACK_WHITE:
        return <div className={`${styles.container} ${styles.variant__blackWhite}`}>{ButtonContent}</div>;
      case EButtonVariant.BLACK_YELLOW:
        return <div className={`${styles.container} ${styles.variant__blackYellow}`}>{ButtonContent}</div>;
      case EButtonVariant.YELLOW_BLACK:
        return <div className={`${styles.container} ${styles.variant__yellowBlack}`}>{ButtonContent}</div>;
      case EButtonVariant.YELLOW_WHITE:
        return <div className={`${styles.container} ${styles.variant__yellowWhite}`}>{ButtonContent}</div>;

      default:
        return '';
    }
  };

  return <>{renderClassVariant()}</>;
};

export default Button;
