import { makeAutoObservable } from 'mobx';

import type { IThemeStore, Theme } from './types';

export class ThemeStore implements IThemeStore {
  private _theme: Theme;

  constructor(newTheme: Theme = 'light') {
    this._theme = newTheme;

    makeAutoObservable(this, { theme: false });
  }

  get theme(): Theme {
    return this._theme;
  }

  public setNewTheme = (newTheme: Theme): void => {
    this._theme = newTheme;
  };
}
