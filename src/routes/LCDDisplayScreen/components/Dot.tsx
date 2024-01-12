import styled from '@modern-js/runtime/styled';
import { gap, hexagonHeight, hexagonWidth } from '../constant';
import { getTop } from '@/routes/LCDDisplayScreen/components/SingleDigit';

const Dot = styled.div`
  position: relative;
  width: ${hexagonWidth}px;
  height: ${hexagonWidth * 3 + gap * 4 + hexagonHeight * 2}px;
  margin: 10px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: ${hexagonWidth}px;
    height: ${hexagonHeight}px;
    background: #345156;
    border-radius: 2px;
  }
  &:before {
    top: ${getTop({ index: 1 })};
  }

  &:after {
    top: ${getTop({ index: 4 })};
  }
`;

export default Dot;
