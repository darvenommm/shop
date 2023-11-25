import type { IStore } from '@/shared/types/mobx';

export type Theme = 'light' | 'dark';

export interface IThemeStore extends IStore {
  get theme(): Theme;
  setNewTheme(newTheme: Theme): void;
}
