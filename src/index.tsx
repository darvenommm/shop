import { createRoot } from 'react-dom/client';

import { App } from '@/app/App';

const root = document.getElementById('root');

if (!root) {
  throw new TypeError('The root is not found!');
}

createRoot(root).render(<App />);
