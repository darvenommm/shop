import { Router } from './Router';
import { StateManager } from './StateManager';

import './styles/index.scss';

export const App = (): JSX.Element => {
  return (
    <StateManager>
      <Router />
    </StateManager>
  );
};
