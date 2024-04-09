import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes/appRoutes";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Notifications } from "@mantine/notifications";

const App = () => {
  return (
    <Provider store={store}>
      <Notifications
        className="notify-bar"
        containerWidth={344}
        notificationMaxHeight={48}
      />
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
