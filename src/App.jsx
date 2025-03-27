import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import UserList from "./Pages/UserList";
import EditUser from "./Pages/EditUser";
import { UserDataProvider } from "./contextCreate/Userdata";
import AppLayout from "./Pages/AppLayout"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserList />} />
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
