import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserContextProvider from "./context/UserContext.jsx";
import SearchContextProvider from "./context/SearchContext.jsx";
import AddtoCartContextProvider from "./context/AddtoCart.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <SearchContextProvider>
        <AddtoCartContextProvider>
          <App />
        </AddtoCartContextProvider>
      </SearchContextProvider>
    </UserContextProvider>
  </StrictMode>
);
