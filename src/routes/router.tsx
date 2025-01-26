import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddProduct from "../pages/ProductManagement/AddProduct";
import ManageProduct from "../pages/ProductManagement/ManageProduct";
import ManagingOrders from "../pages/ProductManagement/ManagingOrders";
import DeactivatingAccounts from "../pages/ProductManagement/DeactivatingAccounts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element:<Dashboard/>,
    children: [
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "manage-product",
        element: <ManageProduct />,
      },
      {
        path: "managing-orders",
        element: <ManagingOrders />,
      },
      {
        path: "deactivating-accounts",
        element: <DeactivatingAccounts/>,
      },
      
    ],
  },
]);

export default router;
