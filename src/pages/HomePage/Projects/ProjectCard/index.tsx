import React, {
  useEffect,
  useRef,
  useState
} from 'react';

import {
  Button,
  Margin,
  StyledText
} from 'components';
import {
  useTheme,
  useWindowSize
} from 'hooks';
import {
  CardItem,
  Styles
} from 'types';
import { ScreenSize } from 'values';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faExternalLinkSquareAlt,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

import JmervilleData from './JmervilleData';

interface ProjectCardProps {
  item: CardItem;
  onClick?: () => void;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { item } = props;
  const { title, description, image, projectUrl, githubProjectName } = item;
  const { url, backgroundColor } = image;
  const [width, height] = useWindowSize();
  const ref = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const { theme } = useTheme();
  const isScreenTypeMobile = width < ScreenSize.PHONE;

  useEffect(() => {
    const onScroll = () => {
      const positionY = window.scrollY;
      setScrollTop(positionY);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  const getBoundary = (min: number, max: number, val: number) => {
    return Math.min(Math.max(min, val), max);
  };

  const getAnimationFactor = (isMobile = false) => {
    const calc = (ref.current ? 100 - (height - ref.current?.getBoundingClientRect().top) : 0) / 5 + 50;
    return isMobile ? getBoundary(0, 1, 1 - calc / 250) : getBoundary(0, 100, calc);
  };

  const getButton = (label: string, url: string, icon: IconDefinition) => {
    return (
      <Margin right="SMALL" top="SMALL" display="inline-block">
        <Button text={label} url={url} showShadow={false} icon={{ fontAwesomeIcon: icon }} />
      </Margin>
    );
  };

  const getDescription = () =>
    description.map((item) => (
      <Margin key={item} top="SMALL">
        <StyledText key={item} color={theme.text} styleType="PARAGRAPH">
          {item}
        </StyledText>
      </Margin>
    ));

  const styles: Styles = {
    container: {
      display: 'grid',
      gridTemplateColumns:
        '[headline-start excerpt-start cta-start] 1fr [media-start headline-end excerpt-end cta-end copy-start] 1fr [margin-end media-end]',
      gridTemplateRows:
        '[margin-start media-start] 96px [headline-start copy-start] max-content [headline-end excerpt-start] auto [excerpt-end copy-end cta-start] max-content [cta-end] 40px [margin-end media-end]',
      borderRadius: '30px',
      overflow: 'hidden',
      position: 'relative',
      minHeight: '600px',
      width: 'webkit-fill-available',
      background: theme.card,
      transform: `matrix(1, 0, 0, 1, 0, ${getAnimationFactor()})`,
    },
    imageContainer: {
      gridColumn: 'media-start/media-end',
      gridRow: 'media-start/media-end',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: backgroundColor || '',
      backgroundImage: `url("${url}")`,
      backgroundSize: 'cover',
    },
    button: {
      display: 'inline-block',
      marginRight: '20px',
    },
  };

  if (isScreenTypeMobile) {
    styles.container = {
      display: 'block',
      gridTemplateColumns:
        '[margin-start] 10px [headline-start excerpt-start cta-start] 1fr [media-start headline-end excerpt-end cta-end copy-start] 1fr [margin-end media-end]',
      gridTemplateRows:
        '[margin-start media-start] 10px [headline-start copy-start] max-content [headline-end excerpt-start] auto [excerpt-end copy-end cta-start] max-content [cta-end] 40px [margin-end media-end]',
      borderRadius: '30px',
      overflow: 'hidden',
      position: 'relative',
      minHeight: '600px',
      width: 'webkit-fill-available',
      background: theme.card,
      transform: `matrix(${getAnimationFactor(true)}, 0, 0, ${getAnimationFactor(true)}, 0, 0)`,
    };
    styles.imageContainer.height = '400px';
    styles.imageContainer.marginBottom = '50px';
  }

  return (
    <div style={styles.container} ref={ref}>
      <div style={styles.imageContainer}></div>
      <Margin horizontal={isScreenTypeMobile ? 'SMALL' : 'REGULAR'} vertical={isScreenTypeMobile ? 'SMALL' : 'REGULAR'}>
        <Margin bottom="REGULAR">
          <StyledText color={theme.primary} styleType="SUBTITLE">
            {title}
          </StyledText>
          <JmervilleData repository={githubProjectName} />
        </Margin>
        {getDescription()}
        <Margin bottom="REGULAR" top="SMALL">
          {githubProjectName && getButton('Code', 'https://github.com/jbmerville/' + githubProjectName, faGithub)}
          {projectUrl && getButton('Project', projectUrl, faExternalLinkSquareAlt)}
        </Margin>
      </Margin>
    </div>
  );
};

export default ProjectCard;
