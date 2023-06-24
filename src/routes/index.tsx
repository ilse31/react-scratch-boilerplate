import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/app/Home"));
const HomeDesignSystem = lazy(() => import("../pages/design/HomeDesignSystem"));
const DesignSystem = lazy(() => import("../layouts/DesignSystem"));
const ButtonsPages = lazy(() => import("../pages/design/ButtonsPages"));
const FormPages = lazy(() => import("../pages/design/FormPages"));
type Props = {};

const Routed = (props: Props) => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route element={<DesignSystem />}>
        <Route path='/design-system'>
          <Route index element={<HomeDesignSystem />} />
          <Route path='buttons' element={<ButtonsPages />} />
          <Route path='form' element={<FormPages />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Routed;
