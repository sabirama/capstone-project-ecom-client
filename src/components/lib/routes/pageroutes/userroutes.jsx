import Profie from "../../../pages/user/sections/Profie";
import Cart from "../../../pages/user/sections/Cart";
import PastOrders from "../../../pages/user/sections/PastOrders";

const userRoutes = [
  {
    name: "USERPROFILE",
    path: "*",
    element: <Profie />,
  },
  {
    name: "CART",
    path: "cart",
    element: <Cart />,
  },
  {
    name: "PAST ORDERS",
    path: "past/orders",
    element: <PastOrders />,
  },
];

export default userRoutes;
