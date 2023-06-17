import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";
import React, { Suspense } from "react";
import { registerServiceWorker } from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </BrowserRouter>
);
registerServiceWorker();
