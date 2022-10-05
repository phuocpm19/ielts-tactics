import { useState } from 'react';

const useFakeLoading = () => {
  const [loading, setLoading] = useState<any>(true);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  return loading;
};

export default useFakeLoading;
