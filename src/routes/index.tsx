import * as React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/app/Home"));
const HomeDesignSystem = React.lazy(
  () => import("../pages/design/HomeDesignSystem")
);
const DesignSystem = React.lazy(() => import("../layouts/DesignSystem"));
const ButtonsPages = React.lazy(() => import("../pages/design/ButtonsPages"));
const FormPages = React.lazy(() => import("../pages/design/Formpages"));
const AlertPages = React.lazy(() => import("../pages/design/AlertPages"));
const ModalPages = React.lazy(() => import("../pages/design/ModalPages"));
type Props = {};

const Routed = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<DesignSystem />}>
        <Route path="/design-system">
          <Route index element={<HomeDesignSystem />} />
          <Route path="buttons" element={<ButtonsPages />} />
          <Route path="form" element={<FormPages />} />
          <Route path="alerts" element={<AlertPages />} />
          <Route path="modals" element={<ModalPages />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Routed;
