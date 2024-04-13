import { Route, Routes } from "react-router-dom";
import React from "react";
import Loading from "../components/Loading";

const Landing = React.lazy(
  () => import("../screens/Landing")
);
const PortfolioScreen = React.lazy(
  () => import("../screens/Portfolio")
);
const SkillsScreen = React.lazy(
  () => import("../screens/skills")
);
const EducationScreen = React.lazy(
  () => import("../screens/Educations")
);


export default function RootRoutes(/*props: refProps*/) {
  return (
    <Routes>
      {/* default router */}
      <Route
        path="/"
        element={
          <React.Suspense fallback={<Loading/>}>
            <Landing />
          </React.Suspense>
        }
      >
        {/* second router level */}
        <Route index element={<Landing />} />
      </Route>
      {/* contact router */}
      <Route path="portfolio"
        element={
          <React.Suspense fallback={<Loading/>}>
            <PortfolioScreen />
          </React.Suspense>
        }
      />
      {/* contact router */}
      <Route path="skills"
        element={
          <React.Suspense fallback={<Loading/>}>
            <SkillsScreen />
          </React.Suspense>
        }
      />
      {/* contact router */}
      <Route path="educations"
        element={
          <React.Suspense fallback={<Loading/>}>
            <EducationScreen />
          </React.Suspense>
        }
      />
      
      {/* not found router */}
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}
