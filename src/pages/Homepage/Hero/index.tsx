import React, {
  useEffect,
  useState
} from 'react';

import { Section } from 'components';
import {
  useTheme,
  useWindowSize
} from 'hooks';
import { Styles } from 'types';
import {
  Colors,
  Paddings,
  ScreenSize
} from 'values';

import HeroCard from './HeroCard';
import HeroImage from './HeroImage';

const Hero = () => {
  const [width] = useWindowSize();
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setTimeout(() => setIsVisible(true));
  });
  const styles: Styles = {
    outerContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme.background,
      width: '100%',
      height: '90%',
      minHeight: 'fit-content',
      overflow: 'hidden',
    },
    innerContainer: {
      position: 'relative',
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  };

  // Mobile style
  if (width < ScreenSize.PHONE) {
    styles.outerContainer = {
      position: 'relative',
      backgroundColor: Colors.WHITE,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    };
    styles.innerContainer = {
      position: 'relative',
      display: 'flex',
      flexFlow: 'column',
      width: 'auto',
      padding: Paddings.PHONE.ALL,
      height: '100%',
    };
    styles.textContainer = {
      position: 'relative',
      width: '100%',
      height: 'fit-content',
      zIndex: 1,
      marginTop: '20%',
    };
  }

  return (
    <Section height="90%">
      <div style={styles.innerContainer}>
        <HeroCard isVisible={isVisible} />
        <HeroImage />
      </div>
    </Section>
  );
};

export default Hero;
