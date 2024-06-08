import { useEffect } from 'react';

const useBeforeMount = (callback) => {
  useEffect(() => {
    if (typeof callback === 'function') {
      callback();
    }
  }, []);
};

export default useBeforeMount;
