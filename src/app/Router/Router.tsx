import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { TemplatePage } from '@/pages/TemplatePage';
import { MainPage } from '@/pages/MainPage';
import { CartPage } from '@/pages/CartPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TemplatePage />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
    ],
  },
]);

export const Router = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
