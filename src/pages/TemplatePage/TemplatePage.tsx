import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';

import imageSrc from '@/shared/assets/images/graph-picture.jpg';
import classes from './Template.module.scss';

export const TemplatePage = (): JSX.Element => {
  return (
    <>
      <header className={classes.header}>Header</header>
      <nav>
        <Link to="/">main</Link>|<Link to="/cart">cart</Link>
      </nav>
      <img src={imageSrc} alt="picture." width={200} />
      <Suspense fallback={<p>loading...</p>}>
        <Outlet />
      </Suspense>
      <footer>Footer</footer>
    </>
  );
};
