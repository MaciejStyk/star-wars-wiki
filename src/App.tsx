import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

import * as Components from "components";
import { ROUTES } from "routes";
import { store } from "store";
import { theme } from "theme";
import * as Types from "types";

import "react-toastify/dist/ReactToastify.css";

const renderRoute = ({ path, element }: Types.IRoute) => (
  <Route key={path} path={path} element={element} />
);

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Components.GlobalStyle />
        <BrowserRouter>
          <Components.Header />
          <Components.Frame>
            <Routes>{ROUTES.map(renderRoute)}</Routes>
          </Components.Frame>
        </BrowserRouter>
      </ThemeProvider>
      <ToastContainer />
    </Provider>
  );
};

export default App;
