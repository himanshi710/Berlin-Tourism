import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Global Styles
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/responsive.css";
import "./styles/animations.css";

// App
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Berlin-Tourism">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);