import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import UserList from "./Pages/UserList";
import EditUser from "./Pages/EditUser";
import { UserDataProvider } from "./contextCreate/Userdata";
import AuthGuard from "./components/AuthGuard";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<AuthGuard><UserList /></AuthGuard>} />
        <Route path="/login" element={<Login />} />
        <Route path="/editUser" element={<EditUser />} />
      </Route>
    )
  );
  return (
    <UserDataProvider>
      <RouterProvider router={router} />
    </UserDataProvider>
  );
}

export default App;
