import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./language/i18next";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Suspense, lazy } from "react";
import Loader from "./components/loader/Loader";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </BrowserRouter>
);
