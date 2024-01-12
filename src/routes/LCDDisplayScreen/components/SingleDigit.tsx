import { FC } from 'react';
import styled from '@modern-js/runtime/styled';
import {
  color,
  gap,
  hexagonHeight,
  hexagonWidth,
  numberMap,
} from '../constant';

interface HexagonProps {
  light: boolean;
  index: number;
}

export const getTop = ({ index }: Pick<HexagonProps, 'index'>) => {
  if (index === 0) {
    return `-${(hexagonHeight - hexagonWidth) / 2}px`;
  }

  if (index === 1 || index === 2) {
    return `${hexagonWidth + gap}px`;
  }

  if (index === 3) {
    return `${hexagonWidth + hexagonHeight / 2 + hexagonWidth / 2 + gap * 2}px`;
  }

  if (index === 4 || index === 5) {
    return `${hexagonHeight + hexagonWidth * 2 + gap * 3}px`;
  }

  if (index === 6) {
    return `${
      hexagonWidth * 2 +
      hexagonHeight +
      hexagonHeight / 2 +
      hexagonWidth / 2 +
      gap * 4
    }px`;
  }
  return undefined;
};

const getLeft = ({ index }: Pick<HexagonProps, 'index'>) => {
  if (index === 0 || index === 3 || index === 6) {
    return `${hexagonWidth / 2 + hexagonHeight / 2 + gap}px`;
  }

  if (index === 2 || index === 5) {
    return `${hexagonHeight + hexagonWidth + gap * 2}px`;
  }
  return undefined;
};

const getTransform = ({ index }: Pick<HexagonProps, 'index'>) => {
  if (index === 0 || index === 3 || index === 6) {
    return 'rotate(90deg)';
  }
  return undefined;
};

const Hexagon = styled.div<HexagonProps>`
  position: absolute;
  width: ${hexagonWidth}px;
  height: ${hexagonHeight}px;
  background-color: ${color};
  top: ${getTop};
  left: ${getLeft};
  transform: ${getTransform};
  opacity: ${({ light }) => (light ? undefined : 0.05)};

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: ${hexagonWidth / 2}px solid transparent;
    border-right: ${hexagonWidth / 2}px solid transparent;
  }

  &:before {
    bottom: 100%;
    border-bottom: ${hexagonWidth / 2}px solid ${color};
  }

  &:after {
    top: 100%;
    border-top: ${hexagonWidth / 2}px solid ${color};
  }
`;

const Number = styled.div`
  width: ${hexagonWidth * 2 + gap * 2 + hexagonHeight}px;
  height: ${hexagonWidth * 3 + gap * 4 + hexagonHeight * 2}px;
  position: relative;
  margin: 10px;
`;

interface SingleDigitProps {
  number: string;
}

const SingleDigit: FC<SingleDigitProps> = ({ number }) => {
  return (
    <Number>
      {numberMap[number].map((item, index) => {
        return <Hexagon key={`${index}`} index={index} light={Boolean(item)} />;
      })}
    </Number>
  );
};

export default SingleDigit;
