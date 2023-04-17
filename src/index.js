import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Infos from './pages/Infos';
import Activites from './pages/Activites';
import Valeurs from './pages/Valeurs';
import Inscription from './pages/Inscription';
import Lieu from './pages/infos/Lieu';
import Planning from './pages/infos/Planning';
import Chambres from './pages/infos/Chambres';
import Transport from './pages/infos/Transport';
import Gouvernement from './pages/infos/Gouvernment';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />},
  {
    path: "/infos",
    element: <Infos />,
    children: [{
      path: "lieu",
      element: <Lieu />,
    },
    {
      path: "planning",
      element: <Planning />,
    },
    {
      path: "chambres",
      element: <Chambres />,
    },
    {
      path: "transport",
      element: <Transport />,
    },
    {
      path: "gouvernement",
      element: <Gouvernement />,
    },
  ]
  },
  {
    path: "/activites",
    element: <Activites />
  },
  {
    path: "/valeurs",
    element: <Valeurs />
  },
  {
    path: "/inscription",
    element: <Inscription />
  }
]
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

