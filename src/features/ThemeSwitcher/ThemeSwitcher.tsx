import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { useStore } from '@/contexts/Store';
import { themes } from '@/entities/Theme';
import { Button } from '@/shared/ui/Button';

import type { Theme } from '@/entities/Theme';

export const ThemeSwitcher = observer(function ThemeSwitcher(): JSX.Element {
  const { theme, setNewTheme } = useStore('theme');

  useEffect((): void => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const buttonClickHandler = (themeValue: Theme): void => {
    setNewTheme(themeValue);
  };

  const buttons = themes.map(
    (themeValue): JSX.Element => (
      <Button
        key={themeValue}
        onClick={() => buttonClickHandler(themeValue)}
        isActive={theme === themeValue}
        type="button"
      >
        {themeValue}
      </Button>
    ),
  );

  return <div>{buttons}</div>;
});
