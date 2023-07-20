import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Infos from './pages/Infos';
import Activites from './pages/Activites';
import Valeurs from './pages/Valeurs';
import Inscription from './pages/Inscription';
import Lieu from './pages/infos/Lieu';
import Planning from './pages/infos/Planning';
import Chambres from './pages/infos/Chambres';
import Ceremonies from './pages/activities/Ceremonies';
import Friday from './pages/activities/Friday';
import Saturday from './pages/activities/Saturday';
import Sunday from './pages/activities/Sunday';
import Bilinguism from './pages/values/Bilinguism';
import Autonomy from './pages/values/Autonomy';
import Consent from './pages/values/Consent';
import Gifts from './pages/values/Gifts';
import Participation from './pages/values/Participation';
import Privacy from './pages/values/Privacy';
import Selfexpression from './pages/values/Selfexpression';
import Tolerance from './pages/values/Tolerance';
import Traces from './pages/values/Traces';
import President from './pages/infos/government/President';
import "./i18n"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Food from './pages/infos/government/Food';
import Transport from './pages/infos/government/Transport';
import Workshops from './pages/infos/government/Workshops';
import CeremonyMinisters from './pages/infos/government/CeremonyMinisters';
import Music from './pages/infos/government/Music';
import Photos from './pages/infos/government/Photos';
import ConsentMinisters from './pages/infos/government/ConsentMinsters';
import Comms from './pages/infos/government/Comms';
import Gouvernement from './pages/infos/Gouvernment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
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
      path: "government",
      element: <Gouvernement />,
      children: [
        {
          path: "president",
          element: <President />,
        },
        {
          path: "food",
          element: <Food />,
        },
        {
          path: "transport",
          element: <Transport />,
        },
        {
          path: "workshops",
          element: <Workshops />,
        },
        {
          path: "ceremonyministers",
          element: <CeremonyMinisters />,
        },
        {
          path: "music",
          element: <Music />,
        },
        {
          path: "photos",
          element: <Photos />,
        },
        {
          path: "consentministers",
          element: <ConsentMinisters />,
        },
        {
          path: "communication",
          element: <Comms />,
        }
      ]

    },
    ]
  },
  {
    path: "/activites",
    element: <Activites />,
    children: [{
      path: "ceremonies",
      element: <Ceremonies />,
    },
    {
      path: "friday",
      element: <Friday />,
    },
    {
      path: "saturday",
      element: <Saturday />,
    },
    {
      path: "sunday",
      element: <Sunday />,
    },
    ]
  },
  {
    path: "/valeurs",
    element: <Valeurs />,
    children: [{
      path: "bilinguism",
      element: <Bilinguism />,
    },
    {
      path: "participation",
      element: <Participation />,
    },
    {
      path: "selfexpression",
      element: <Selfexpression />,
    },
    {
      path: "tolerance",
      element: <Tolerance />,
    },
    {
      path: "consent",
      element: <Consent />,
    },
    {
      path: "traces",
      element: <Traces />,
    },
    {
      path: "gifts",
      element: <Gifts />,
    },
    {
      path: "privacy",
      element: <Privacy />,
    },
    {
      path: "autonomy",
      element: <Autonomy />,
    },
    ]
  },
  {
    path: "/inscription",
    element: <Inscription />
  },
  {
    path: "*",
    element: <Home />,
  },
]
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

