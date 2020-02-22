import React from 'react';
import PropTypes from 'prop-types';
import Colors from './../values';

const CardExtraPic = props => {

  const { isLeft, image, imageWidth, title, caption } = props;
  const styles = {
    outerContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: isLeft? 'row': 'row-reverse',
      justifyContent: 'space-between',
      height: 'fit-content',
      padding: '20px',
      background: isLeft? Colors.lightGray: Colors.background,
    },
    picture: {
      height: '230px',
      width: imageWidth? imageWidth: '350px',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center right',
    },
    textContainer: {
      width: '260px',
      padding: '40px',
      alignSelf: 'center',
      marginTop: '25px',
      color: Colors.primary,
    },
    title: {
      fontWeight: 'bold',
      fontSize: '1.2em',
    },
    caption: {
      marginTop: '10px',
      fontSize: '1em',
    }
  };
  
  return (
    <div style={styles.outerContainer}>
      <div style={styles.picture}>
      </div>  
      <div style={styles.textContainer}>
        <div style={styles.title}>
          {title}
        </div>
        <div style={styles.caption}>
          {caption}
        </div> 
      </div>
    </div>
  );
};

CardExtraPic.propTypes = {
  isLeft: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  imageWidth: PropTypes.string,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default CardExtraPic;