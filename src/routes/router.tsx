import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddProduct from "../pages/Dashboard/ProductManagement/AddProduct";
import ManageProduct from "../pages/Dashboard/ProductManagement/ManageProduct";
import ManagingOrders from "../pages/Dashboard/ProductManagement/ManagingOrders";
import DeactivatingAccounts from "../pages/UserManagement/DeactivatingAccounts";
import AllProducts from "../pages/Dashboard/ProductManagement/AllProducts";
import ProductDetails from "../pages/ProductDetails";
import PaymentSuccessful from "../pages/Payment/PaymentSuccessful";
import PaymentFailed from "../pages/Payment/PaymentFailed";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import UserDashboard from "../pages/Dashboard/ProductManagement/UserDashboard";
import ViewUserOrderHistory from "../pages/Dashboard/ViewUserOrderHistory";
import AboutUsPage from "../pages/AboutUsPage";
import UpdateProduct from "../pages/Dashboard/ProductManagement/UpdateProduct";

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
        path: "/all-product",
        element: <AllProducts />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/payment-successful/:transectionId",
        element: <PaymentSuccessful />,
      },
      {
        path: "/payment-failed/:transectionId",
        element: <PaymentFailed />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
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
        element: <DeactivatingAccounts />,
      },
      {
        path: "update-product/:id",
        element: <UpdateProduct />,
      },
    ],
  },
  {
    path: "/user/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <UserDashboard />,
      },
      {
        path: "view-order-history",
        element: <ViewUserOrderHistory />,
      },
    ],
  },
]);

export default router;
