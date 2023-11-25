import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { clsx } from 'clsx';

import { Header } from '@/widgets/Header';

import classes from './TemplatePage.module.scss';

export const TemplatePage = (): JSX.Element => {
  const pageContainer = clsx('container', classes['page-container']);

  return (
    <div className={classes['page']}>
      <Header />
      <main className={pageContainer}>
        <Suspense fallback={<p>loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
