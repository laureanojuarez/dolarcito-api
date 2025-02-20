import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {App} from "./App";
import {GlobalStyles} from "../styles/GlobalStyles";
import {Provider} from "react-redux";
import {store} from "./app/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
1233444;
