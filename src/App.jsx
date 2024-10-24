import { useState } from "react";

import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import Job from "./pages/Job";
import JobListing from "./pages/JobListing";
import Postjobs from "./pages/Postjobs";
import Savedjobs from "./pages/Savedjobs";
import Myjobs from "./pages/Myjobs";
import { ThemeProvider } from "./components/ui/theme-provider";
import ProtectedRoute from "./components/protected-route";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/onboarding",
          element: (
            <ProtectedRoute>
              <Onboarding />
            </ProtectedRoute>
          )
        },
        {
          path: "/jobs",
          element: (
            <ProtectedRoute>
              <JobListing />
            </ProtectedRoute>
          )
        },
        {
          path: "/job/:id",
          element: (
            <ProtectedRoute>
              <Job />
            </ProtectedRoute>
          )
        },
        {
          path: "/post-job",
          element: (
            <ProtectedRoute>
              <Postjobs />
            </ProtectedRoute>
          )
        },
        {
          path: "/saved-jobs",
          element: (
            <ProtectedRoute>
              <Savedjobs />
            </ProtectedRoute>
          )
        },
        {
          path: "/my-jobs",
          element: (
            <ProtectedRoute>
              <Myjobs />
            </ProtectedRoute>
          )
        },
      ],
    },
  ]);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
