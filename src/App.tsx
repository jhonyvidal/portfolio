import React, { Fragment } from 'react';
// components
import { BrowserRouter } from 'react-router-dom';
import RootRoutes from './navigation/RootRoutes';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
         <Fragment>
          <BrowserRouter >
            <RootRoutes />
          </BrowserRouter>
        </Fragment>
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
