import React from 'react';
import Colors from './values/Colors';
import useWindowSize from './WindowSize.js';
import PropTypes from 'prop-types';

const Section = (props) => {

  const [width] = useWindowSize();
  
  let styles = {
    outerContainer: {
      position: 'relative',
      height: 'fit-content',
      padding: '150px',
      background: Colors.background,
    }, 
    title: {
      textTransform: 'uppercase',
      fontWeight: '600',
      fontSize: '2.3em',
      color: Colors.primary,
      marginTop: '-30px',
    },
    titleBar: {
      marginTop: '7px',
      height: '1px',
      width: 'auto',
      background: Colors.primary,
    }
  };

  // Mobile style
  if (width < 600) {
    styles.outerContainer = {
      position: 'relative',
      height: 'fit-content',
      padding: '20px',
      background: Colors.background,
    };
    styles.title = {
      textTransform: 'uppercase',
      fontWeight: '600',
      fontSize: '1.5em',
      color: Colors.primary,
      marginTop: '10px',
    };
  } else if (width < 1200) {
    styles.outerContainer = {
      position: 'relative',
      height: 'fit-content',
      padding: '100px',
      background: Colors.background,
    };
    styles.title = {
      textTransform: 'uppercase',
      fontWeight: '600',
      fontSize: '1.8em',
      color: Colors.primary,
      marginTop: '10px',
    };
  }
  
  return (
    <div style={styles.outerContainer}>
      <div style={styles.title}>{props.title}</div>
      <div style={styles.titleBar}></div>
      {props.cards}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.any,
};

export default Section;