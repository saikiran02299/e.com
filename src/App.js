/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation} from "react-router-dom";
// import { Redirect } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import Cart from "pages/Shopping Cart/cart"
import Login from "pages/LandingPages/SignIn/index"
import SignUp from "pages/LandingPages/SignUp/index"

// Material Kit 2 React routes
import routes from "routes";


export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <cartProvider>
        <Routes>
          {getRoutes(routes)}
          <Route path="/cart" element={<Cart />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sign-up" element={<SignUp />} />
          {/* <Redirect to="/Login"  /> */}
          <Route path="*" element={<Navigate to="/Login" />} />
        </Routes>
        </cartProvider>
      </ThemeProvider>
    
  );
}
