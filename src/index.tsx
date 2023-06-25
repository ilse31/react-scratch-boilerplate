import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";
import * as React from "react";
import { registerServiceWorker } from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";
const root = createRoot(document.getElementById("root") as HTMLElement);
console.log("root", process.env.NODE_ENV);
root.render(
  <SWRConfig
    value={{
      suspense: true,
    }}
  >
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <App />
      </React.Suspense>
    </BrowserRouter>
  </SWRConfig>
);
registerServiceWorker();
