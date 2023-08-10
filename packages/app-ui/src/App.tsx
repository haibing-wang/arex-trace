import {css} from '@emotion/react';
import {Suspense, useEffect} from 'react';
import {useNavigate, useRoutes,} from 'react-router-dom';
import routes from '~react-pages';

const App = () => {
  const nav = useNavigate()
  useEffect(()=>{
    nav('/trace')
  },[])
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <div
        css={css`
          margin: 10px;
          flex: 1;
        `}
      >
        <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
      </div>
    </div>
  );
};

export default App;
