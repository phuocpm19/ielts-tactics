import { useState } from 'react';

const useFakeLoading = () => {
  const [loading, setLoading] = useState<any>(true);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  return loading;
};

export default useFakeLoading;
