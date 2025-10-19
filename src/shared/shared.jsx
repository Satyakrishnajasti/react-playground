import { createBrowserRouter } from "react-router-dom";
import HomePage, { homeActions } from "../pages/HomePage";
import { createContext, lazy, Suspense } from "react";

export const PhotosContext = createContext([]);

const ItemsPage = lazy(() => import("../pages/ItemsPage"));
const PhotosPage = lazy(() => import("../pages/PhotosPage"));
const CountPage = lazy(() => import("../pages/CountPage"));

export const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    action: homeActions,
    children: [
      {
        path: "/photos",
        element: (
          <Suspense fallback={<p>...loading</p>}>
            <PhotosPage />
          </Suspense>
        ),
        loader: () =>
          import("../pages/PhotosPage").then((m) => m.PhotosLoader()),
      },
      {
        path: "/items",
        element: <ItemsPage />,
      },
      {
        path: "/count",
        element: <CountPage />,
      },
    ],
  },
]);
