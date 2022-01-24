import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Products from "src/containers/pages/Products";

import ROUTES from "./constants";

const ProductCreate = lazy(() => import("src/containers/pages/ProductCreate"));

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<>...</>}>
          <Products />
        </Suspense>
      }
    />
    <Route
      path={ROUTES.CREATE_PRODUCT}
      element={
        <Suspense fallback={<>...</>}>
          <ProductCreate />
        </Suspense>
      }
    />
  </Routes>
);

export default AppRoutes;
