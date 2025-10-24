import { createBrowserRouter, RouterProvider } from "react-router";
import Template from "./components/Template";
import PainList from "./components/PainList";
import Pain from "./components/Pain";

const BASE_PATH = import.meta.env.VITE_BASE_PATH || "/";

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Template,
      children: [
        { index: true, Component: PainList },
        {
          path: ":id",
          Component: Pain,
        },
      ],
    },
  ],
  {
    basename: BASE_PATH,
  },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
