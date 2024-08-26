import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SocketProvider from "./components/SocketProvider";
import Entry from "./pages/Entry";
import Loading from "./components/Loading";
import { lazy, Suspense } from "react";
import Home from "./pages/Home";

const Login = lazy(() => import("@/pages/Login"));
const History = lazy(() => import("@/pages/History"));
const Setup = lazy(() => import("@/pages/Setup"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <SocketProvider />,
    children: [
      {
        element: <Entry />,
        children: [
          { index: true, element: <>index</> },
          { path: "home", element: <Home></Home> },
        ],
      },
      { path: "login", element: <Login /> },
      { path: "setup", element: <Setup /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </Suspense>
  );
};

export default App;
