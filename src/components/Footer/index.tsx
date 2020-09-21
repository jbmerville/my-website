import React from 'react';

import Button from 'components/Button';
import UseWindowSize from 'hooks/WindowSize';
import { Styles } from 'types';
import { getPaddingsFromWidth } from 'utils';
import {
  Colors,
  MaxWidth,
  Paddings
} from 'values';

import { BUTTONS } from './footer-config';

const Footer = () => {
  const [width] = UseWindowSize();

  const styles: Styles = {
    outerContainer: {
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      verticalAlign: 'center',
      height: '400px',
    },
    innerContainer: {
      position: 'relative',
      maxWidth: MaxWidth,
      width: '100%',
      height: 'fit-content',
      margin: getPaddingsFromWidth(width).ALL,
    },
    title: {
      width: '-webkit-fill-available',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '3em',
      marginBottom: '20px',
      color: Colors.PRIMARY,
    },
    description: {
      marginTop: '25px',
      height: 'fit-content',
      fontWeight: 'lighter',
      fontSize: '1.2em',
      lineHeight: '1.5em',
      width: '500px',
      color: Colors.PRIMARY,
    },
    buttonContainer: {
      height: 'fit-content',
      width: '-webkit-fill-available',
      position: 'relative',
      display: 'block',
    },
    button: {
      marginRight: '20px',
      display: 'inline-block',
    },
  };

  // Mobile style
  if (width < 600) {
    styles.button.padding = '20px 0';
    styles.title = {
      marginTop: '40px',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '1.5em',
      color: Colors.PRIMARY,
    };
    styles.description = {
      marginTop: '15px',
      height: 'fit-content',
      fontWeight: 'lighter',
      fontSize: '1.2em',
      color: Colors.PRIMARY,
    };
  } else if (width < 1200) {
    styles.innerContainer = {
      overflow: 'hidden',
      display: 'flex',
      position: 'relative',
      height: 'auto',
      width: 'auto',
      padding: Paddings.TABLET.ALL,
    };
  }

  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <div style={styles.title}>Find me here!</div>
        <div style={styles.buttonContainer}>
          {BUTTONS.map((button) => (
            <div style={styles.button}>
              <Button
                link={button.link}
                icon={button.icon}
                width="110px"
                backgrounColor={Colors.PRIMARY}
                textColor={Colors.BACKGROUND}
                hoverColor={Colors.SECONDARY}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;