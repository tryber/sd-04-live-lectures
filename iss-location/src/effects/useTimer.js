import { useEffect, useState } from 'react';

const useTimer = (func, interval) => {
  useEffect(() => {
    const timer = setInterval(
      func,
      interval
    );

    return () => {
      clearInterval(timer);
    }

  }, [])
}

export default useTimer;