import { useState } from 'react';
import dayjs from 'dayjs';
import { getNumberArray } from '@/utils';

const useTime = () => {
  const [hour, setHour] = useState<string[]>(['8', '8']);
  const [minute, setMinute] = useState<string[]>(['8', '8']);
  const [second, setSecond] = useState<string[]>(['8', '8']);

  setInterval(() => {
    const [h, m, s] = dayjs().format('HH:mm:ss').split(':');
    setHour(getNumberArray(h));
    setMinute(getNumberArray(m));
    setSecond(getNumberArray(s));
  }, 1000);

  return {
    hour,
    minute,
    second,
  };
};

export default useTime;
