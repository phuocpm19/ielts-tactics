import { useState } from 'react';

const useFakeLoading = (second: number) => {
  const [loading, setLoading] = useState<any>(true);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, second);
  }

  return loading;
};

export default useFakeLoading;
