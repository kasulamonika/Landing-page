
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  import "./styles/globals.css";

  pendo.initialize({
    visitor: {
      id: ''
    }
  });

  createRoot(document.getElementById("root")!).render(<App />);
  