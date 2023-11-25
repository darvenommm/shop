import { createContext } from 'react';

import { ThemeStore } from '@/entities/Theme';

import type { IStorage } from './types';

export const store: IStorage = {
  theme: new ThemeStore(),
};

export const StoreContext = createContext<IStorage>(store);
