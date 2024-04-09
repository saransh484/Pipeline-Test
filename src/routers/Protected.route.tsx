import React, { memo, useEffect } from "react";

import TheLayout from "../container/TheLayout";
import { useIsAuthenticated } from "react-auth-kit";
import { getToken } from "firebase/messaging";
import { messaging } from "../services/notificationservice/firebase";
import { useCreateTokenMutation } from "../generated/graphql";

const ProtectedRoute = () => {
  const [createTokenMutation] = useCreateTokenMutation();
  useEffect(() => {
    const generateToken = async () => {
      try {
        await Notification.requestPermission();
        const firebaseToken = await getToken(messaging, {
          vapidKey:
            "BAbgPKAjECRPdHPAdWpJj7AmbOLtk1R49WZdeU8RhbkRGap6dtzxwV3s8oP7lanIiB74yien-d-ydvqdW7WpO2s",
        });
        createTokenMutation({
          variables: { firebaseToken: firebaseToken },
        });
      } catch (error) {
        console.error("Error getting permission and token", error);
      }
    };
    generateToken();
  }, []);

  const isAuthenticated = useIsAuthenticated();
  if (!isAuthenticated()) {
    window.location.replace("/login");
  }

  return <TheLayout />;
};

export default memo(ProtectedRoute);
