import React, { forwardRef } from 'react';

import {
  Animate,
  Margin,
  Section,
  StyledText
} from 'components';
import {
  useIsComponentVisible,
  useTheme
} from 'hooks';

import JmervilleData from './JmervilleData';

const Statistics = forwardRef((props: {}, ref: any) => {
  const isVisible = useIsComponentVisible(ref, 300);
  const { theme } = useTheme();

  return (
    <Section ref={ref} height="400px" background={theme.card} alignItems="baseline">
      <Margin bottom={'SMALL'}>
        <Animate direction={'LEFT'} isVisible={isVisible}>
          <StyledText color={theme.primary} styleType="TITLE">
            Statistics
          </StyledText>
        </Animate>
      </Margin>
      <Margin bottom={'SMALL'}>
        <Animate direction={'LEFT'} isVisible={isVisible} speed="1.5x">
          <JmervilleData />
        </Animate>
      </Margin>
    </Section>
  );
});

Statistics.displayName = 'Statistics';

export default Statistics;