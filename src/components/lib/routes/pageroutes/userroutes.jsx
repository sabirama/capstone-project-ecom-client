import Profie from "../../../pages/user/sections/Profie";
import Cart from "../../../pages/user/sections/cart/Cart";
import OrderHistory from "../../../pages/user/sections/OrderHistory/OrderHistory";

const userRoutes = [
  {
    name: "USER PROFILE",
    path: "*",
    element: <Profie />,
  },
  {
    name: "CART",
    path: "cart",
    element: <Cart />,
  },
  {
    name: "ORDER HISTORY",
    path: "orderhistory",
    element: <OrderHistory />,
  },
];

export default userRoutes;
