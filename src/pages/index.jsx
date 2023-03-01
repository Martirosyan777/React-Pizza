import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import BasketList from "../pages/BasketList";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/basket-list",
      element: <BasketList/>
    }
  ]);

export default router;