import { useContext } from 'react';

import { StoreContext } from './StoreContext';

import type { IStorage } from './types';

export const useStore = (key: keyof IStorage) => {
  return useContext<IStorage>(StoreContext)[key];
};
