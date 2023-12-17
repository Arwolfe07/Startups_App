import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/RootLayout";
import { ToastProvider } from "react-toast-notifications";
import Home from "./pages/Home";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./actions/data";
import Startups from "./pages/Startups";
import NewStartup from "./pages/NewStartup";

// Create different routes for the pages (Single Page application)
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allstartups",
        element: <Startups />,
      },
      {
        path: "/newstartup",
        element: <NewStartup />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    initFlowbite(); // Initialize FlowBite styles and components
    dispatch(fetchData()); // Fetches data as the components are first mounted
  }, []);
  return (
    <ToastProvider placement="top-right" autoDismissTimeout={3000}>
      <RouterProvider router={router} />
    </ToastProvider>
  );
}

export default App;
