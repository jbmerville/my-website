import React from 'react';

import {
  Animate,
  Button,
  Margin,
  SeparationBar,
  StyledText
} from 'components';
import {
  useTheme,
  useWindowSize
} from 'hooks';
import { Style } from 'types';
import { Colors } from 'values';

import { CONTENT } from './hero-config';

interface HeroTextSectionProp {
  isVisible: boolean;
}

const HeroTextSection = (props: HeroTextSectionProp) => {
  const [width] = useWindowSize();
  const { theme } = useTheme();
  const { isVisible } = props;

  const style: Style = {
    background: theme.card,
    borderRadius: '15px',
    float: 'left',
    width: '45%',
    height: 'auto',
    position: 'relative',
  };

  return (
    <div style={style}>
      <Margin horizontal={'SMALL'} vertical="SMALL">
        <Animate direction={'BOTTOM'} isVisible={isVisible} speed="0.5x">
          <StyledText color={theme.primary} style="TITLE">
            {CONTENT.title.primary}
          </StyledText>
        </Animate>
        <Animate direction={'BOTTOM'} isVisible={isVisible}>
          <Margin vertical="SMALL">
            <StyledText color={theme.text} style="SUBTITLE">
              {CONTENT.title.secondary}
            </StyledText>
          </Margin>
        </Animate>
        <Margin bottom="SMALL">
          <Animate direction={'BOTTOM'} isVisible={isVisible}>
            <SeparationBar />
          </Animate>
        </Margin>
        <Animate direction={'BOTTOM'} isVisible={isVisible}>
          <StyledText color={theme.text} style="DESCRIPTION">
            {CONTENT.description}
          </StyledText>
        </Animate>
        {width > 600 && (
          <Animate direction={'BOTTOM'} isVisible={isVisible} speed="1.5x">
            <Margin top="SMALL">
              <Margin right="SMALL">
                <Button
                  text={{ link: { id: 'projects', label: 'Projects', url: '' }, color: Colors.BACKGROUND }}
                  background={{ offHoverColor: theme.highlight, onHoverColor: Colors.SECONDARY }}
                />
              </Margin>
              <Button
                text={{ link: { id: 'experience', label: 'Experience', url: '' }, color: Colors.BACKGROUND }}
                background={{ offHoverColor: theme.highlight, onHoverColor: Colors.SECONDARY }}
              />
            </Margin>
          </Animate>
        )}
      </Margin>
    </div>
  );
};

export default HeroTextSection;
