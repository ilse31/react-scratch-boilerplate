import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";
import { registerServiceWorker } from "./registerServiceWorker";
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
console.log("index.tsx", process.env.PUBLIC_URL);
registerServiceWorker();
