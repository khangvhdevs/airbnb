import { AuthLayout } from "components/layouts";
import { PATH } from "constant";
import { Login, Register } from "pages";
import { RouteObject } from "react-router-dom";
export const router: RouteObject[] = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: PATH.login,
        element: <Login />,
      },
      {
        path: PATH.register,
        element: <Register />,
      },
    ],
  },
];
