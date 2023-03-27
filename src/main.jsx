import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./Context/AuthContext";
import { AppContextProvider } from "./Context/AppContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
