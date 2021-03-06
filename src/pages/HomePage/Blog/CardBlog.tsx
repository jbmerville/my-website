import React from 'react';

import { useWindowSize } from 'hooks';
import { Styles } from 'types';
import { Colors } from 'values';

interface CardBlogProps {
  color: string;
  emoji: string;
  title: string;
  isColorLight: boolean;
  widths: string[];
}

const CardBlog = (props: CardBlogProps) => {
  const { color, emoji, title, isColorLight, widths } = props;
  const [width] = useWindowSize();

  const styles: Styles = {
    outerContainer: {
      transition: 'transform 0.5s cubic-bezier(0.215,0.61,0.355,1) 0s',
      cursor: 'pointer',
      position: 'relative',
      height: '250px',
      minHeight: '250px',
      width: '190px',
      borderRadius: '7px',
      backgroundColor: color,
      marginTop: '20px',
    },
    innerContainer: {
      padding: '20px',
      height: '100%',
    },
    emoji: {
      fontSize: '1.8em',
      display: 'table-cell',
      verticalAlign: 'middle',
      height: '50px',
      width: '50px',
      borderRadius: '25px',
      backgroundColor: Colors.TRANSPARENT,
      textAlign: 'center',
    },
    title: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '1em',
      paddingTop: '20px',
      color: isColorLight ? Colors.WHITE : Colors.TEXT,
    },
    barContainer: {
      paddingTop: '20px',
      height: 'fit-content',
      position: 'relative',
    },
    bar: {
      marginBottom: '7px',
      position: 'relative',
      height: '7px',
      borderRadius: '4px',
      background: Colors.TRANSPARENT,
    },
  };

  // Mobile style
  if (width < 600) {
    styles.outerContainer = {
      transition: 'transform 0.5s cubic-bezier(0.215,0.61,0.355,1) 0s',
      cursor: 'pointer',
      position: 'relative',
      height: '180px',
      minHeight: '250px',
      maxWidth: '190px',
      borderRadius: '7px',
      backgroundColor: color,
      marginTop: '20px',
    };
    styles.innerContainer = {
      padding: '15px',
      height: '100%',
    };
  }

  let bars = [];
  for (let i = 0; i < 3; i++) {
    bars.push(<div key={i} style={{ ...styles.bar, width: widths[i] }}></div>);
  }

  return (
    <div className="card-blog" style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <div style={styles.emoji}>{emoji}</div>
        <div style={styles.title}>{title}</div>
        <div style={styles.barContainer}>{bars}</div>
      </div>
    </div>
  );
};

export default CardBlog;
