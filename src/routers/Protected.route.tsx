import React, { memo } from "react";

import TheLayout from "../container/TheLayout";
import { useIsAuthenticated } from "react-auth-kit";

const ProtectedRoute = () => {
  const isAuthenticated = useIsAuthenticated();
  if (!isAuthenticated()) {
    window.location.replace("/login");
  }

  return <TheLayout />;
};

export default memo(ProtectedRoute);
