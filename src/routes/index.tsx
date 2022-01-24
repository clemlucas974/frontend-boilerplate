import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Products = lazy(() => import("src/containers/pages/Products"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<>...</>}>
            <Products />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
