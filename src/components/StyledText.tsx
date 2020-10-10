import React, { ReactNode } from 'react';

import { Style } from 'types';
import {
  Colors,
  FontSize
} from 'values';

interface StyledTextProps {
  color: Colors;
  styleType: 'PARAGRAPH' | 'TITLE' | 'SUBTITLE' | 'BUTTON' | 'UNDERTEXT';
  children: ReactNode;
  isLoading?: boolean;
  isError?: boolean;
}

export type TextStyle = 'PARAGRAPH' | 'TITLE' | 'SUBTITLE' | 'BUTTON' | 'UNDERTEXT';

const getCSSFromStyle = (styleType: TextStyle): Style => {
  switch (styleType) {
    case 'PARAGRAPH':
      return {
        fontSize: FontSize.M,
        lineHeight: FontSize.XL,
      };
    case 'TITLE':
      return {
        fontSize: FontSize.XXXL,
        lineHeight: FontSize.S,
        textTransform: 'uppercase',
        fontWeight: 'bold',
      };
    case 'SUBTITLE':
      return {
        fontSize: FontSize.XL,
        lineHeight: FontSize.XL,
      };
    case 'BUTTON':
      return {
        fontSize: FontSize.M,
        lineHeight: FontSize.XL,
        fontWeight: 'normal',
      };
    case 'UNDERTEXT':
      return {
        fontSize: FontSize.S,
        fontStyle: 'italic',
      };
    default:
      throw Error;
  }
};

const getStyle = (styleType: TextStyle, color: Colors): Style => {
  const textStyle = getCSSFromStyle(styleType);
  return { ...textStyle, color, display: 'block' };
};

const StyledText = (props: StyledTextProps): JSX.Element => {
  const { color, styleType, children, isError, isLoading } = props;
  if (isLoading) {
    return <div style={getStyle(styleType, Colors.ORANGE)}>Loading...</div>;
  }
  if (isError) {
    return <div style={getStyle(styleType, Colors.RED)}>Error loading data.</div>;
  }
  return <div style={getStyle(styleType, color)}>{children}</div>;
};

export default StyledText;