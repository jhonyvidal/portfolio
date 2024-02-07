import React, { Fragment } from "react";
// components
import { BrowserRouter } from "react-router-dom";
import RootRoutes from "./navigation/RootRoutes";
import './i18n';

const App = () => {
  return (
    <Fragment>
      {/* <div className="bg-site bg-no-repeat bg-cover overflow-hidden"> */}
          <BrowserRouter>
            <RootRoutes />
          </BrowserRouter>
      {/* </div> */}
    </Fragment> 
  );
};

export default App;
