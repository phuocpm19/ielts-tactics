import React from 'react';

import { TIconProps } from './types';
import { EIconName } from './enums';
import styles from './styles.module.scss';

import IconHamburger from './hamburger';
import IconArrowDown from './arrow-down';
import IconPhone from './phone';
import IconMail from './mail';
import IconSearch from './search';
import IconSocialFacebook from './social-facebook';
import IconSocialInstagram from './social-instagram';
import IconSocialTiktok from './social-tiktok';
import IconSocialYoutube from './social-youtube';
import IconMailYellow from './mail-large';
import IconClock from './clock';
import IconUp from './up';

const Icon: React.FC<TIconProps> = ({ name, color }) => {
  const renderIcon = (): React.ReactElement => {
    switch (name) {
      case EIconName.ICON_HAMBURGER:
        return <IconHamburger color={color} />;
      case EIconName.ICON_ARROW_DOWN:
        return <IconArrowDown color={color} />;
      case EIconName.ICON_PHONE:
        return <IconPhone color={color} />;
      case EIconName.ICON_MAIL:
        return <IconMail color={color} />;
      case EIconName.ICON_SEARCH:
        return <IconSearch color={color} />;
      case EIconName.ICON_SOCIAL_FACEBOOK:
        return <IconSocialFacebook color={color} />;
      case EIconName.ICON_SOCIAL_INSTAGRAM:
        return <IconSocialInstagram color={color} />;
      case EIconName.ICON_SOCIAL_TIKTOK:
        return <IconSocialTiktok color={color} />;
      case EIconName.ICON_SOCIAL_YOUTUBE:
        return <IconSocialYoutube color={color} />;
      case EIconName.ICON_MAIL_LARGER:
        return <IconMailYellow color={color} />;
      case EIconName.ICON_CLOCK:
        return <IconClock color={color} />;
      case EIconName.ICON_UP:
        return <IconUp color={color} />;

      default:
        return <></>;
    }
  };

  return <div className={styles.container}>{renderIcon()}</div>;
};

export default Icon;
