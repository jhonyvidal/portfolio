import React, { Fragment } from "react";
// components
import { BrowserRouter } from "react-router-dom";
import RootRoutes from "./navigation/RootRoutes";
import i18n from "i18next";
import enTranslation from "./translations/en.json";
import esTranslation from "./translations/es.json";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Fragment>
        <BrowserRouter>
          <RootRoutes />
        </BrowserRouter>
      </Fragment>
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
