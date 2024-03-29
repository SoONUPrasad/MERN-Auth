import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div>Hello World</div>
    </RouterProvider>
  );
}

export default App;
