import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Products from "src/containers/pages/Products";

import ROUTES from "./constants";

const ProductCreate = lazy(() => import("src/containers/pages/ProductCreate"));
const ProductEdit = lazy(() => import("src/containers/pages/ProductEdit"));

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
    <Route
      path={ROUTES.UPDATE_PRODUCT}
      element={
        <Suspense fallback={<>...</>}>
          <ProductEdit />
        </Suspense>
      }
    />
  </Routes>
);

export default AppRoutes;
