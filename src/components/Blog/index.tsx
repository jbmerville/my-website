import React, { useRef } from 'react';

import CSS from 'csstype';
import IsComponentVisible from 'hooks/ComponentVisibility';
import UseWindowSize from 'hooks/WindowSize';
import { getPaddingsFromWidth } from 'utils';
import {
  Colors,
  Paddings
} from 'values';

import Column from './Column';

interface Styles {
  outerContainer: CSS.Properties;
  leftContainer: CSS.Properties;
  rightContainer: CSS.Properties;
  textContainer: CSS.Properties;
  title: CSS.Properties;
  secondaryTitle: CSS.Properties;
}

const Blog = () => {
  const [width] = UseWindowSize();
  const ref = useRef(null);
  const isVisible = IsComponentVisible(ref, 300);

  const leftColumn = [
    [Colors.GRAY_DARK, '🤖', 'Placeholder', true],
    [Colors.SECONDARY, '👽', 'Placeholder', true],
    [Colors.PRIMARY, '🤞', 'Placeholder', true],
  ];
  const rightColumn = [
    [Colors.PRIMARY, '🤞', 'Placeholder', true],
    [Colors.GRAY_DARK, '🤖', 'Placeholder', true],
    [Colors.SECONDARY, '👽', 'Placeholder', true],
  ];

  const styles: Styles = {
    outerContainer: {
      overflow: 'hidden',
      position: 'relative',
      height: '400px',
      padding: getPaddingsFromWidth(width).ALL,
      paddingTop: '0',
      paddingBottom: '0',
      background: Colors.GRAY_LIGHT,
    },
    leftContainer: {
      float: 'left',
      width: '70%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
      position: 'relative',
      zIndex: 1,
    },
    rightContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'right',
      float: 'right',
      width: '30%',
      height: '100%',
      position: 'relative',
    },
    textContainer: {},
    title: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '2.5em',
      color: Colors.PRIMARY,
      marginTop: '-30px',
    },
    secondaryTitle: {
      marginTop: '20px',
      fontWeight: 'normal',
      fontSize: '1em',
      color: Colors.TEXT,
      transitionDelay: '.1s',
    },
  };

  // Mobile style
  if (width < 600) {
    styles.outerContainer = {
      overflow: 'hidden',
      position: 'relative',
      height: '400px',
      padding: Paddings.PHONE.ALL,
      paddingTop: '0 !important',
      paddingBottom: '0 !important',
      background: Colors.GRAY_LIGHT,
    };
    styles.leftContainer = {
      float: 'left',
      width: '50%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 1,
    };
    styles.rightContainer = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'right',
      float: 'right',
      width: '50%',
      height: '100%',
      position: 'relative',
    };
    styles.textContainer = {
      position: 'relative',
      paddingLeft: '20px',
    };
    styles.title = {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '1.2em',
      color: Colors.PRIMARY,
      marginTop: '-30px',
    };
    styles.secondaryTitle = {
      marginTop: '20px',
      fontWeight: 'normal',
      fontSize: '1em',
      color: Colors.TEXT,
      transitionDelay: '.1s',
    };
  }

  const columns =
    width < 600 ? (
      <div style={styles.leftContainer}>
        <Column cards={[...leftColumn, ...rightColumn]} offset="0px" />
      </div>
    ) : (
      <div style={styles.leftContainer}>
        <Column cards={leftColumn} offset="0px" />
        <Column cards={rightColumn} offset="-100px" />
      </div>
    );

  return (
    <div ref={ref} style={styles.outerContainer}>
      {columns}
      <div style={styles.rightContainer}>
        <div style={styles.textContainer}>
          <div className={isVisible} style={styles.title}>
            Articles & Blog Posts
          </div>
          <div className={isVisible} style={styles.secondaryTitle}>
            Coming soon!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
