import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import RadialMenu from "./components/RadialMenu";
import TranslatePopup from "./components/TranslatePopup";
import "./styles/index.css";
import "./i18n";

const isRadialWindow = window.location.search.includes("radial=1");
const isTranslatePopup = window.location.search.includes("translate=1");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {isRadialWindow ? <RadialMenu /> : isTranslatePopup ? <TranslatePopup /> : <App />}
  </React.StrictMode>
);
