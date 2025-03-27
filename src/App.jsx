import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import UserList from "./Pages/UserList";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<UserList />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
