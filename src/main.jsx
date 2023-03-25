import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./Context/AuthContext";
import { AppContextProvider } from "./Context/AppContext";
import { ThemeContextProvider } from "./Context/ThemeContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AppContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </AppContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
