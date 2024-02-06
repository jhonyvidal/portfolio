import React, { Fragment } from "react";
// components
import { BrowserRouter } from "react-router-dom";
import RootRoutes from "./navigation/RootRoutes";
import './i18n';

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
        <BrowserRouter>
          <RootRoutes />
        </BrowserRouter>
    </div>
  );
};

export default App;
