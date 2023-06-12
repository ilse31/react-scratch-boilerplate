import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";
import { registerServiceWorker } from "./registerServiceWorker";
const root = createRoot(document.getElementById("root") as HTMLElement);
registerServiceWorker();
root.render(<App />);
