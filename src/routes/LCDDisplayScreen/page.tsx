import styled from '@modern-js/runtime/styled';
import SingleDigit from '@/routes/LCDDisplayScreen/components/SingleDigit';
import useTime from '@/hooks/useTime';
import Dot from '@/routes/LCDDisplayScreen/components/Dot';

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #cfdecd;
`;
const Index = () => {
  const { hour, minute, second } = useTime();
  return (
    <Box>
      {hour.map((item, index) => {
        return <SingleDigit key={`${index}`} number={item} />;
      })}
      <Dot />
      {minute.map((item, index) => {
        return <SingleDigit key={`${index}`} number={item} />;
      })}
      <Dot />
      {second.map((item, index) => {
        return <SingleDigit key={`${index}`} number={item} />;
      })}
    </Box>
  );
};

export default Index;
