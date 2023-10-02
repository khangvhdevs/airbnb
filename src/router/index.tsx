import { AuthLayout, MainLayout } from "components/layouts";
import { PATH } from "constant";
import { Login, Register, Home } from "pages";
import RoomsList from "pages/RoomsList";
import { RouteObject } from "react-router-dom";
export const router: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATH.roomslist,
        element: <RoomsList />
      }
    ]
  },
  {
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
