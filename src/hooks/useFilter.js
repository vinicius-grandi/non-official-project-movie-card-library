import { useLayoutEffect } from 'react';

function useFilter(fn, dep) {
  useLayoutEffect(fn, [...dep]);
}

export default useFilter;
