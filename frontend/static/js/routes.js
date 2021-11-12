import DashBoard from "./pages/dashboard.js";
import Abilities from "./pages/abilities.js";
import About from "./pages/about.js";


const Routes = [
  {
    path: "/",
    view: DashBoard,
  },
  {
    path: "/abilities",
    view: Abilities,
  },
  {
    path: "/about",
    view: About,
  },
];

export default Routes;
