import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
// import { AuthContext } from "./Context/AuthContext";
// import { AppContext } from "./Context/AppContext";
import {UserAuthContextProvider} from './Context/AuthContext'
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <AppContext> */}
      <UserAuthContextProvider>
        <BrowserRouter>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </UserAuthContextProvider>
    {/* </AppContext> */}
  </Provider>
);


reportWebVitals();
